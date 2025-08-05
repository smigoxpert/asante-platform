import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useAuthState() {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthRoute, setIsAuthRoute] = useState(false);

  useEffect(() => {
    // Check if current route is an auth route
    const authRoutes = ['/login', '/signup', '/onboarding'];
    const currentIsAuthRoute = authRoutes.some(route => pathname.includes(route));
    setIsAuthRoute(currentIsAuthRoute);

    // Determine if user is authenticated based on route
    // This is a simple heuristic - in a real app you'd check actual auth state
    const authenticatedRoutes = ['/ubuntu', '/wisdom-paths', '/courses', '/heritage', '/circles', '/donate'];
    const isOnAuthenticatedRoute = authenticatedRoutes.some(route => pathname.includes(route));
    setIsAuthenticated(isOnAuthenticatedRoute);
  }, [pathname]);

  return {
    isAuthenticated,
    isAuthRoute,
    pathname
  };
} 