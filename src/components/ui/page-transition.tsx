"use client";

import React from "react";
import { LoadingOverlay } from "./loading";
import { usePageTransition } from "@/hooks/usePageTransition";

export const PageTransition = React.memo(() => {
  const isTransitioning = usePageTransition();

  if (!isTransitioning) return null;

  return (
    <LoadingOverlay 
      key="page-transition"
      message="Loading page..."
      variant="dots"
      className="z-40"
    />
  );
});

PageTransition.displayName = "PageTransition"; 