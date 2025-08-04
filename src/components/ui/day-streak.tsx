"use client";

import { useState, useEffect } from "react";

interface DayStreakProps {
  currentStreak: number;
  className?: string;
}

export default function DayStreak({ currentStreak, className = "" }: DayStreakProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Animate in after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show celebration for milestone streaks
    if (currentStreak % 7 === 0 && currentStreak > 0) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStreak]);

  return (
    <div 
      className={`inline-flex items-center space-x-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {/* Hexagonal Icon */}
      <div className="flex-shrink-0">
        <svg 
          className="w-4 h-4 text-gray-600" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      
      {/* Text Content */}
      <span className="text-gray-600 font-medium">
        {currentStreak} day streak
      </span>
      
      {/* Celebration effect */}
      {showCelebration && (
        <div className="absolute -top-1 -right-1">
          <div className="text-xs animate-bounce">🎉</div>
        </div>
      )}
    </div>
  );
} 