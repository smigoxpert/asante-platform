import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingMessage: string;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  setLoadingMessage: (message: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  const showLoading = useCallback((message = 'Loading...') => {
    setLoadingMessage(message);
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
    setLoadingMessage('Loading...');
  }, []);

  const updateLoadingMessage = useCallback((message: string) => {
    setLoadingMessage(message);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingMessage,
        showLoading,
        hideLoading,
        setLoadingMessage: updateLoadingMessage,
      }}
    >
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