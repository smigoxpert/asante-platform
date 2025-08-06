'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import { storage } from '@/lib/storage';

interface StorageContextType {
  cleanup: () => void;
  cleanupCorrupted: () => void;
  getSize: () => { local: number; session: number };
  clearAll: () => void;
  isStorageAvailable: boolean;
}

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export function StorageProvider({ children }: { children: React.ReactNode }) {
  const cleanupIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isStorageAvailable = useRef(true);

  // Check if storage is available
  useEffect(() => {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      sessionStorage.setItem(testKey, 'test');
      sessionStorage.removeItem(testKey);
      isStorageAvailable.current = true;
    } catch (error) {
      console.warn('Storage not available:', error);
      isStorageAvailable.current = false;
    }
  }, []);

  // Automatic cleanup every 30 minutes
  useEffect(() => {
    if (!isStorageAvailable.current) return;

    const cleanup = () => {
      try {
        const result = storage.cleanup();
        if (result.localCleaned > 0 || result.sessionCleaned > 0) {
          console.log(`Storage cleanup: removed ${result.localCleaned + result.sessionCleaned} expired items`);
        }
      } catch (error) {
        console.warn('Storage cleanup failed:', error);
      }
    };

    const cleanupCorrupted = () => {
      try {
        const result = storage.cleanupCorrupted();
        if (result.localCorrupted > 0 || result.sessionCorrupted > 0) {
          console.log(`Storage corrupted cleanup: removed ${result.localCorrupted + result.sessionCorrupted} corrupted items`);
        }
      } catch (error) {
        console.warn('Storage corrupted cleanup failed:', error);
      }
    };

    // Initial cleanup - first corrupted, then expired
    cleanupCorrupted();
    cleanup();

    // Set up periodic cleanup
    cleanupIntervalRef.current = setInterval(cleanup, 30 * 60 * 1000); // 30 minutes

    return () => {
      if (cleanupIntervalRef.current) {
        clearInterval(cleanupIntervalRef.current);
      }
    };
  }, []);

  // Cleanup on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      try {
        // Save any pending analytics events
        const events = storage.getAnalyticsEvents();
        if (events.length > 0) {
          // You could send these to your analytics service here
          console.log('Saving analytics events:', events.length);
        }
      } catch (error) {
        console.warn('Failed to save analytics on unload:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Monitor storage size and warn if getting too large
  useEffect(() => {
    if (!isStorageAvailable.current) return;

    const checkStorageSize = () => {
      try {
        const size = storage.getSize();
        const totalSize = size.local + size.session;
        const maxSize = 5 * 1024 * 1024; // 5MB limit

        if (totalSize > maxSize) {
          console.warn(`Storage size (${(totalSize / 1024 / 1024).toFixed(2)}MB) is approaching limit. Consider cleanup.`);
          
          // Auto-cleanup if over 80% of limit
          if (totalSize > maxSize * 0.8) {
            const result = storage.cleanup();
            console.log(`Auto-cleanup performed: removed ${result.localCleaned + result.sessionCleaned} items`);
          }
        }
      } catch (error) {
        console.warn('Storage size check failed:', error);
      }
    };

    // Check every 5 minutes
    const sizeCheckInterval = setInterval(checkStorageSize, 5 * 60 * 1000);
    
    // Initial check
    checkStorageSize();

    return () => clearInterval(sizeCheckInterval);
  }, []);

  const contextValue: StorageContextType = {
    cleanup: () => {
      if (!isStorageAvailable.current) return;
      const result = storage.cleanup();
      console.log(`Manual cleanup: removed ${result.localCleaned + result.sessionCleaned} items`);
    },
    cleanupCorrupted: () => {
      if (!isStorageAvailable.current) return;
      const result = storage.cleanupCorrupted();
      console.log(`Manual corrupted cleanup: removed ${result.localCorrupted + result.sessionCorrupted} corrupted items`);
    },
    getSize: () => {
      if (!isStorageAvailable.current) return { local: 0, session: 0 };
      return storage.getSize();
    },
    clearAll: () => {
      if (!isStorageAvailable.current) return;
      storage.clearAll();
      console.log('All storage cleared');
    },
    isStorageAvailable: isStorageAvailable.current,
  };

  return (
    <StorageContext.Provider value={contextValue}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorageContext() {
  const context = useContext(StorageContext);
  if (context === undefined) {
    throw new Error('useStorageContext must be used within a StorageProvider');
  }
  return context;
} 