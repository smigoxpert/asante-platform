import { useState, useEffect, useCallback, useRef } from 'react';
import { storage, STORAGE_KEYS } from '@/lib/storage';

export interface UseStorageOptions {
  defaultValue?: any;
  ttl?: number;
  type?: 'local' | 'session';
  key: string;
  onError?: (error: Error) => void;
}

export function useStorage<T = any>(options: UseStorageOptions) {
  const { key, defaultValue, ttl, type = 'local', onError } = options;
  const [value, setValue] = useState<T | null>(defaultValue || null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const isInitialized = useRef(false);

  // Load initial value from storage
  useEffect(() => {
    try {
      const storedValue = type === 'local' 
        ? storage.localStorage.get<T>(key)
        : storage.sessionStorage.get<T>(key);
      
      if (storedValue !== null) {
        setValue(storedValue);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Storage read failed');
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
      isInitialized.current = true;
    }
  }, [key, type, onError]);

  // Update storage when value changes
  const updateValue = useCallback((newValue: T | null) => {
    try {
      setValue(newValue);
      setError(null);

      if (newValue === null) {
        // Remove from storage
        type === 'local' 
          ? storage.localStorage.remove(key)
          : storage.sessionStorage.remove(key);
      } else {
        // Set in storage
        type === 'local'
          ? storage.localStorage.set(key, newValue, ttl)
          : storage.sessionStorage.set(key, newValue, ttl);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Storage write failed');
      setError(error);
      onError?.(error);
    }
  }, [key, ttl, type, onError]);

  // Clear storage
  const clear = useCallback(() => {
    updateValue(null);
  }, [updateValue]);

  // Refresh from storage
  const refresh = useCallback(() => {
    setIsLoading(true);
    try {
      const storedValue = type === 'local' 
        ? storage.localStorage.get<T>(key)
        : storage.sessionStorage.get<T>(key);
      
      setValue(storedValue);
      setError(null);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Storage refresh failed');
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, [key, type, onError]);

  return {
    value,
    setValue: updateValue,
    clear,
    refresh,
    isLoading,
    error,
    isInitialized: isInitialized.current,
  };
}

// Specialized hooks for common use cases
export function useUserPreferences() {
  return useStorage({
    key: STORAGE_KEYS.USER_PREFERENCES,
    defaultValue: {},
    type: 'local',
  });
}

export function useTheme() {
  return useStorage<string>({
    key: STORAGE_KEYS.THEME,
    defaultValue: 'light',
    type: 'local',
  });
}

export function useLanguage() {
  return useStorage<string>({
    key: STORAGE_KEYS.LANGUAGE,
    defaultValue: 'en',
    type: 'local',
  });
}

export function useAuthToken() {
  return useStorage<string>({
    key: STORAGE_KEYS.AUTH_TOKEN,
    type: 'session',
    ttl: 60 * 60 * 1000, // 1 hour
  });
}

export function useUserProfile() {
  return useStorage({
    key: STORAGE_KEYS.USER_PROFILE,
    type: 'local',
  });
}

export function useOnboardingStatus() {
  return useStorage<boolean>({
    key: STORAGE_KEYS.ONBOARDING_COMPLETE,
    defaultValue: false,
    type: 'local',
  });
}

export function useApiCache<T = any>(cacheKey: string, ttl?: number) {
  return useStorage<T>({
    key: `api_${cacheKey}`,
    type: 'local',
    ttl,
  });
}

export function useComponentState<T = any>(componentName: string) {
  return useStorage<T>({
    key: `component_${componentName}`,
    type: 'session',
  });
}

export function useFormData<T = any>(formName: string) {
  return useStorage<T>({
    key: `form_${formName}`,
    type: 'session',
  });
}

// Hook for analytics events
export function useAnalytics() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const storedEvents = storage.getAnalyticsEvents();
    setEvents(storedEvents);
  }, []);

  const addEvent = useCallback((event: any) => {
    storage.addAnalyticsEvent(event);
    setEvents(prev => [...prev, { ...event, timestamp: Date.now() }]);
  }, []);

  const clearEvents = useCallback(() => {
    storage.clearAnalyticsEvents();
    setEvents([]);
  }, []);

  return {
    events,
    addEvent,
    clearEvents,
  };
}

// Hook for storage management
export function useStorageManager() {
  const [storageSize, setStorageSize] = useState({ local: 0, session: 0 });

  const refreshSize = useCallback(() => {
    setStorageSize(storage.getSize());
  }, []);

  const cleanup = useCallback(() => {
    const result = storage.cleanup();
    refreshSize();
    return result;
  }, [refreshSize]);

  const clearAll = useCallback(() => {
    storage.clearAll();
    refreshSize();
  }, [refreshSize]);

  useEffect(() => {
    refreshSize();
  }, [refreshSize]);

  return {
    storageSize,
    refreshSize,
    cleanup,
    clearAll,
  };
} 