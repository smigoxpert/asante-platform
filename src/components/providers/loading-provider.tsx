"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useMemo, useRef } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingMessage: string;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  setLoadingMessage: (message: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Debug mode - set to true to see loading state logs
const DEBUG_LOADING = false;

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadingCountRef = useRef(0);

  const showLoading = useCallback((message = 'Loading...') => {
    loadingCountRef.current++;
    if (DEBUG_LOADING) {
      console.log(`[Loading] Show: ${message} (count: ${loadingCountRef.current})`);
    }
    
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }
    
    setLoadingMessage(message);
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
    if (DEBUG_LOADING) {
      console.log(`[Loading] Hide (count: ${loadingCountRef.current})`);
    }
    
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    
    // Set a timeout to prevent rapid state changes
    loadingTimeoutRef.current = setTimeout(() => {
      if (loadingCountRef.current === 0) {
        setIsLoading(false);
        setLoadingMessage('Loading...');
      }
      loadingTimeoutRef.current = null;
    }, 50);
  }, []);

  const updateLoadingMessage = useCallback((message: string) => {
    if (DEBUG_LOADING) {
      console.log(`[Loading] Update message: ${message}`);
    }
    setLoadingMessage(message);
  }, []);

  // Auto-hide loading after 10 seconds to prevent infinite loading
  useMemo(() => {
    if (isLoading) {
      const autoHideTimer = setTimeout(() => {
        console.warn('[Loading] Timeout - auto-hiding loading state');
        loadingCountRef.current = 0;
        hideLoading();
      }, 10000);

      return () => clearTimeout(autoHideTimer);
    }
  }, [isLoading, hideLoading]);

  const contextValue = useMemo(() => ({
    isLoading,
    loadingMessage,
    showLoading,
    hideLoading,
    setLoadingMessage: updateLoadingMessage,
  }), [isLoading, loadingMessage, showLoading, hideLoading, updateLoadingMessage]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
} 