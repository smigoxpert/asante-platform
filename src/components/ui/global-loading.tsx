"use client";

import React, { useEffect, useRef } from "react";
import { useLoading } from "@/components/providers/loading-provider";
import { LoadingOverlay } from "./loading";
import { useAuthState } from "@/hooks/useAuthState";

export const GlobalLoading = React.memo(() => {
  const { isLoading, loadingMessage } = useLoading();
  const { isAuthRoute } = useAuthState();
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showLoading, setShowLoading] = React.useState(false);

  useEffect(() => {
    if (isLoading) {
      // Clear any existing timeout
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      
      // Show loading immediately
      setShowLoading(true);
    } else {
      // Hide loading with a small delay to prevent flickering
      loadingTimeoutRef.current = setTimeout(() => {
        setShowLoading(false);
      }, 100);
    }

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [isLoading]);

  // Don't show loading on auth routes to prevent loops
  if (!showLoading || isAuthRoute) return null;

  return (
    <LoadingOverlay 
      key="global-loading"
      message={loadingMessage}
      variant="spinner"
    />
  );
});

GlobalLoading.displayName = "GlobalLoading"; 