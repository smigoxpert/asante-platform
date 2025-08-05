"use client";

import React, { useEffect, useRef } from "react";
import { useLoading } from "@/components/providers/loading-provider";
import { LoadingOverlay } from "./loading";
import { useAuthState } from "@/hooks/useAuthState";
import { usePathname } from "next/navigation";

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/about', '/pricing', '/download'];

export const GlobalLoading = React.memo(() => {
  const { isLoading, loadingMessage } = useLoading();
  const { isAuthRoute } = useAuthState();
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showLoading, setShowLoading] = React.useState(false); // Local state to manage visibility with delay
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) {
      // Clear any existing timeout to prevent premature hiding
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
      setShowLoading(true); // Show loading immediately when isLoading is true
    } else {
      // Hide loading with a small delay to prevent flickering
      loadingTimeoutRef.current = setTimeout(() => setShowLoading(false), 100);
    }

    return () => {
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
    };
  }, [isLoading]);

  // Don't show loading on auth routes or public routes to prevent loops
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  if (!showLoading || isAuthRoute || isPublicRoute) return null;

  return (
    <LoadingOverlay 
      key="global-loading" // Added key to prevent re-render conflicts
      message={loadingMessage}
      variant="spinner"
    />
  );
});

GlobalLoading.displayName = "GlobalLoading"; 