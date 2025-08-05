import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner = React.memo(({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <svg 
      className={cn("animate-spin", sizeClasses[size], className)} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
});

LoadingSpinner.displayName = "LoadingSpinner";

interface LoadingDotsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingDots = React.memo(({ size = "md", className }: LoadingDotsProps) => {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3"
  };

  return (
    <div className={cn("flex space-x-1", className)}>
      <div className={cn("bg-current rounded-full animate-bounce", sizeClasses[size])} style={{ animationDelay: '0ms' }} />
      <div className={cn("bg-current rounded-full animate-bounce", sizeClasses[size])} style={{ animationDelay: '150ms' }} />
      <div className={cn("bg-current rounded-full animate-bounce", sizeClasses[size])} style={{ animationDelay: '300ms' }} />
    </div>
  );
});

LoadingDots.displayName = "LoadingDots";

interface LoadingBarProps {
  className?: string;
}

export const LoadingBar = React.memo(({ className }: LoadingBarProps) => {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-1", className)}>
      <div className="bg-heritage-gold h-1 rounded-full animate-pulse" style={{ width: '60%' }} />
    </div>
  );
});

LoadingBar.displayName = "LoadingBar";

interface LoadingOverlayProps {
  message?: string;
  variant?: "spinner" | "dots" | "bar";
  className?: string;
}

export const LoadingOverlay = React.memo(({ 
  message = "Loading...", 
  variant = "spinner",
  className 
}: LoadingOverlayProps) => {
  const LoadingComponent = {
    spinner: LoadingSpinner,
    dots: LoadingDots,
    bar: LoadingBar
  }[variant];

  return (
    <div className={cn(
      "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center",
      className
    )}>
      <div className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center space-y-4">
        <LoadingComponent size="lg" className="text-heritage-gold" />
        <p className="text-gray-700 font-ubuntu font-medium">{message}</p>
      </div>
    </div>
  );
});

LoadingOverlay.displayName = "LoadingOverlay";

interface LoadingButtonProps extends Omit<ButtonProps, 'children'> {
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  loadingVariant?: "spinner" | "dots";
}

export const LoadingButton = React.memo(({ 
  children, 
  loading = false, 
  loadingText = "Loading...",
  loadingVariant = "spinner",
  className,
  disabled,
  ...props
}: LoadingButtonProps) => {
  const LoadingComponent = {
    spinner: LoadingSpinner,
    dots: LoadingDots
  }[loadingVariant];

  return (
    <Button
      disabled={loading || disabled}
      className={cn(className)}
      {...props}
    >
      <span className="flex items-center justify-center space-x-2">
        {loading && (
          <LoadingComponent size="sm" className="text-current" />
        )}
        <span>{loading ? loadingText : children}</span>
      </span>
    </Button>
  );
});

LoadingButton.displayName = "LoadingButton";

interface LoadingCardProps {
  className?: string;
}

export const LoadingCard = React.memo(({ className }: LoadingCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md animate-pulse",
      className
    )}>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
});

LoadingCard.displayName = "LoadingCard";

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
}

export const LoadingSkeleton = React.memo(({ className, lines = 3 }: LoadingSkeletonProps) => {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-gray-200 rounded animate-pulse"
          style={{ width: `${Math.max(60, 100 - i * 10)}%` }}
        />
      ))}
    </div>
  );
});

LoadingSkeleton.displayName = "LoadingSkeleton"; 