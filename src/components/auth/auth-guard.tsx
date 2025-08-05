"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '@/components/ui/loading';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/about', '/pricing', '/download'];

export function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Don't check auth for public routes
    if (PUBLIC_ROUTES.includes(pathname)) {
      setIsChecking(false);
      return;
    }

    // If we're still loading auth state, wait
    if (isLoading) {
      return;
    }

    // If auth is required but user is not authenticated
    if (requireAuth && !isAuthenticated) {
      // Redirect to landing page instead of login
      router.push('/');
      return;
    }

    // If user is authenticated but trying to access auth pages
    if (isAuthenticated && (pathname === '/login' || pathname === '/signup')) {
      // Redirect to dashboard
      router.push('/ubuntu');
      return;
    }

    setIsChecking(false);
  }, [isAuthenticated, isLoading, pathname, requireAuth, router]);

  // Show loading spinner while checking auth
  if (isLoading || isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="text-center">
          <LoadingSpinner size="lg" className="text-heritage-gold mb-4" />
          <p className="text-gray-600 font-ubuntu">Loading your heritage journey...</p>
        </div>
      </div>
    );
  }

  // If this is a public route, render children directly
  if (PUBLIC_ROUTES.includes(pathname)) {
    return <>{children}</>;
  }

  // If auth is required and user is not authenticated, don't render children
  if (requireAuth && !isAuthenticated) {
    return null;
  }

  // Render children for authenticated users or non-auth-required routes
  return <>{children}</>;
} 