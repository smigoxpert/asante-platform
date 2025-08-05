"use client";

import React from "react";
import { LoadingOverlay } from "./loading";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/about', '/pricing', '/download'];

function PageTransitionComponent() {
  const isTransitioning = usePageTransition();
  const pathname = usePathname();

  // Don't show page transition on public routes to prevent loops
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  if (!isTransitioning || isPublicRoute) return null;

  return (
    <LoadingOverlay 
      key="page-transition"
      message="Loading page..."
      variant="dots"
      className="z-40"
    />
  );
}

export const PageTransition = React.memo(PageTransitionComponent);

PageTransition.displayName = "PageTransition"; 