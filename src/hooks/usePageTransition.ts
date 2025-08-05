import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAuthState } from './useAuthState'; // Import the new hook

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/about', '/pricing', '/download'];

export function usePageTransition() {
  const pathname = usePathname();
  const { isAuthRoute } = useAuthState(); // Use the new hook
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const isInitialMount = useRef(true); // To prevent transition on initial load

  useEffect(() => {
    // Skip transition on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevPathnameRef.current = pathname; // Initialize prevPathnameRef
      return;
    }

    // Only trigger transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      // Don't show transition for auth-related routes or public routes to prevent loops
      const isPublicRoute = PUBLIC_ROUTES.includes(pathname) || PUBLIC_ROUTES.includes(prevPathnameRef.current);
      if (isAuthRoute || isPublicRoute) {
        prevPathnameRef.current = pathname;
        return;
      }

      setIsTransitioning(true);
      prevPathnameRef.current = pathname; // Update previous pathname
      
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, isAuthRoute]); // Add isAuthRoute to dependencies

  return isTransitioning;
} 