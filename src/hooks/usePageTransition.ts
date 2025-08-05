import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAuthState } from './useAuthState';

export function usePageTransition() {
  const pathname = usePathname();
  const { isAuthRoute } = useAuthState();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip transition on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevPathnameRef.current = pathname;
      return;
    }

    // Only trigger transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      // Don't show transition for auth-related routes to prevent loops
      if (isAuthRoute) {
        prevPathnameRef.current = pathname;
        return;
      }

      setIsTransitioning(true);
      prevPathnameRef.current = pathname;
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [pathname, isAuthRoute]);

  return isTransitioning;
} 