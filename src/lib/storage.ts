// Storage utility for localStorage and sessionStorage with type safety and performance optimizations

export interface StorageConfig {
  prefix?: string;
  ttl?: number; // Time to live in milliseconds
  compress?: boolean;
}

export interface StorageItem<T = any> {
  value: T;
  timestamp: number;
  ttl?: number;
}

class StorageManager {
  private prefix: string;
  private defaultTTL: number;
  private compress: boolean;

  constructor(config: StorageConfig = {}) {
    this.prefix = config.prefix || 'asante_';
    this.defaultTTL = config.ttl || 24 * 60 * 60 * 1000; // 24 hours default
    this.compress = config.compress ?? false;
  }

  // Generic storage methods
  private getStorage(type: 'local' | 'session'): globalThis.Storage {
    return type === 'local' ? globalThis.localStorage : globalThis.sessionStorage;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  private compressData(data: string): string {
    if (!this.compress) return data;
    try {
      // Simple compression for larger data
      return btoa(encodeURIComponent(data));
    } catch {
      return data;
    }
  }

  private decompressData(data: string): string {
    if (!this.compress) return data;
    try {
      return decodeURIComponent(atob(data));
    } catch {
      return data;
    }
  }

  // Set data with TTL
  set<T>(key: string, value: T, ttl?: number, type: 'local' | 'session' = 'local'): boolean {
    try {
      const storage = this.getStorage(type);
      const storageKey = this.getKey(key);
      const item: StorageItem<T> = {
        value,
        timestamp: Date.now(),
        ttl: ttl || this.defaultTTL,
      };

      const serialized = JSON.stringify(item);
      const compressed = this.compressData(serialized);
      storage.setItem(storageKey, compressed);
      return true;
    } catch (error) {
      console.warn('Storage set failed:', error);
      return false;
    }
  }

  // Get data with TTL check
  get<T>(key: string, type: 'local' | 'session' = 'local'): T | null {
    try {
      const storage = this.getStorage(type);
      const storageKey = this.getKey(key);
      const compressed = storage.getItem(storageKey);
      
      if (!compressed) return null;

      const serialized = this.decompressData(compressed);
      const item: StorageItem<T> = JSON.parse(serialized);

      // Check if data has expired
      if (item.ttl && Date.now() - item.timestamp > item.ttl) {
        this.remove(key, type);
        return null;
      }

      return item.value;
    } catch (error) {
      console.warn('Storage get failed:', error);
      return null;
    }
  }

  // Remove data
  remove(key: string, type: 'local' | 'session' = 'local'): boolean {
    try {
      const storage = this.getStorage(type);
      const storageKey = this.getKey(key);
      storage.removeItem(storageKey);
      return true;
    } catch (error) {
      console.warn('Storage remove failed:', error);
      return false;
    }
  }

  // Clear all data with prefix
  clear(type: 'local' | 'session' = 'local'): boolean {
    try {
      const storage = this.getStorage(type);
      const keys = Object.keys(storage);
      
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          storage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.warn('Storage clear failed:', error);
      return false;
    }
  }

  // Check if key exists and is not expired
  has(key: string, type: 'local' | 'session' = 'local'): boolean {
    return this.get(key, type) !== null;
  }

  // Get all keys with prefix
  keys(type: 'local' | 'session' = 'local'): string[] {
    try {
      const storage = this.getStorage(type);
      const keys = Object.keys(storage);
      return keys
        .filter(key => key.startsWith(this.prefix))
        .map(key => key.replace(this.prefix, ''));
    } catch (error) {
      console.warn('Storage keys failed:', error);
      return [];
    }
  }

  // Get storage size in bytes
  size(type: 'local' | 'session' = 'local'): number {
    try {
      const storage = this.getStorage(type);
      const keys = Object.keys(storage);
      return keys
        .filter(key => key.startsWith(this.prefix))
        .reduce((total, key) => {
          const value = storage.getItem(key) || '';
          return total + key.length + value.length;
        }, 0);
    } catch (error) {
      console.warn('Storage size calculation failed:', error);
      return 0;
    }
  }

  // Clean expired items
  cleanup(type: 'local' | 'session' = 'local'): number {
    try {
      const keys = this.keys(type);
      let cleaned = 0;

      keys.forEach(key => {
        if (!this.has(key, type)) {
          cleaned++;
        }
      });

      return cleaned;
    } catch (error) {
      console.warn('Storage cleanup failed:', error);
      return 0;
    }
  }
}

// Create default storage instances
export const localStorage = new StorageManager({
  prefix: 'asante_local_',
  ttl: 24 * 60 * 60 * 1000, // 24 hours
  compress: true,
});

export const sessionStorage = new StorageManager({
  prefix: 'asante_session_',
  ttl: 60 * 60 * 1000, // 1 hour
  compress: false,
});

// Specific storage keys for better organization
export const STORAGE_KEYS = {
  // User preferences
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
  NOTIFICATIONS: 'notifications',
  
  // App state
  AUTH_TOKEN: 'auth_token',
  USER_PROFILE: 'user_profile',
  ONBOARDING_COMPLETE: 'onboarding_complete',
  
  // Performance cache
  API_CACHE: 'api_cache',
  COMPONENT_STATE: 'component_state',
  FORM_DATA: 'form_data',
  
  // Analytics
  ANALYTICS_EVENTS: 'analytics_events',
  USER_JOURNEY: 'user_journey',
  
  // Feature flags
  FEATURE_FLAGS: 'feature_flags',
  
  // Temporary data
  TEMP_DATA: 'temp_data',
  UPLOAD_PROGRESS: 'upload_progress',
} as const;

// Type-safe storage helpers
export const storage = {
  // Expose storage instances
  localStorage,
  sessionStorage,
  // User preferences
  setUserPreferences: (prefs: any) => localStorage.set(STORAGE_KEYS.USER_PREFERENCES, prefs),
  getUserPreferences: () => localStorage.get(STORAGE_KEYS.USER_PREFERENCES),
  
  setTheme: (theme: string) => localStorage.set(STORAGE_KEYS.THEME, theme),
  getTheme: () => localStorage.get<string>(STORAGE_KEYS.THEME),
  
  setLanguage: (lang: string) => localStorage.set(STORAGE_KEYS.LANGUAGE, lang),
  getLanguage: () => localStorage.get<string>(STORAGE_KEYS.LANGUAGE),
  
  // Auth
  setAuthToken: (token: string) => sessionStorage.set(STORAGE_KEYS.AUTH_TOKEN, token, 60 * 60 * 1000), // 1 hour
  getAuthToken: () => sessionStorage.get<string>(STORAGE_KEYS.AUTH_TOKEN),
  removeAuthToken: () => sessionStorage.remove(STORAGE_KEYS.AUTH_TOKEN, 'session'),
  
  setUserProfile: (profile: any) => localStorage.set(STORAGE_KEYS.USER_PROFILE, profile),
  getUserProfile: () => localStorage.get(STORAGE_KEYS.USER_PROFILE),
  
  // App state
  setOnboardingComplete: (complete: boolean) => localStorage.set(STORAGE_KEYS.ONBOARDING_COMPLETE, complete),
  isOnboardingComplete: () => localStorage.get<boolean>(STORAGE_KEYS.ONBOARDING_COMPLETE),
  
  // API cache
  setApiCache: (key: string, data: any, ttl?: number) => localStorage.set(`api_${key}`, data, ttl),
  getApiCache: (key: string) => localStorage.get(`api_${key}`),
  clearApiCache: () => {
    const keys = localStorage.keys();
    keys.forEach(key => {
      if (key.startsWith('api_')) {
        localStorage.remove(key);
      }
    });
  },
  
  // Component state
  setComponentState: (component: string, state: any) => sessionStorage.set(`component_${component}`, state),
  getComponentState: (component: string) => sessionStorage.get(`component_${component}`),
  
  // Form data
  setFormData: (form: string, data: any) => sessionStorage.set(`form_${form}`, data),
  getFormData: (form: string) => sessionStorage.get(`form_${form}`),
  clearFormData: (form: string) => sessionStorage.remove(`form_${form}`, 'session'),
  
  // Analytics
  addAnalyticsEvent: (event: any) => {
    const events = sessionStorage.get<any[]>(STORAGE_KEYS.ANALYTICS_EVENTS) || [];
    events.push({ ...event, timestamp: Date.now() });
    sessionStorage.set(STORAGE_KEYS.ANALYTICS_EVENTS, events);
  },
  getAnalyticsEvents: () => sessionStorage.get<any[]>(STORAGE_KEYS.ANALYTICS_EVENTS) || [],
  clearAnalyticsEvents: () => sessionStorage.remove(STORAGE_KEYS.ANALYTICS_EVENTS, 'session'),
  
  // Utility methods
  clearAll: () => {
    localStorage.clear();
    sessionStorage.clear();
  },
  
  cleanup: () => {
    const localCleaned = localStorage.cleanup();
    const sessionCleaned = sessionStorage.cleanup();
    return { localCleaned, sessionCleaned };
  },
  
  getSize: () => ({
    local: localStorage.size(),
    session: sessionStorage.size(),
  }),
};

export default storage; 