"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { authService } from "@/lib/auth";
import { User } from "@/types";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [showGreeting, setShowGreeting] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };
    loadUser();
  }, []);

  useEffect(() => {
    // Show greeting notification when component mounts
    setShowGreeting(true);
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getHeritageGreeting = () => {
    const greetings = {
      "Yoruba": "Ẹ káàbọ̀",
      "Swahili": "Jambo",
      "Zulu": "Sawubona",
      "Igbo": "Ndewo",
      "Hausa": "Sannu"
    };
    return greetings[user?.heritage_profile?.cultural_identities?.[0] as keyof typeof greetings] || "Welcome";
  };

  const navigationItems = [
    { 
      href: "/ubuntu", 
      label: "Dashboard", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      )
    },
    { 
      href: "/heritage", 
      label: "Heritage", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      href: "/wisdom-paths", 
      label: "Wisdom Paths", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      href: "/circles", 
      label: "Ubuntu Circles", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      href: "/impact", 
      label: "Impact", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  const handleLogout = async () => {
    await authService.logout();
    window.location.href = "/login";
  };

  return (
    <>
      {/* Greeting Notification */}
      {showGreeting && (
        <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm border border-heritage-gold/20 rounded-lg shadow-lg p-4 animate-in slide-in-from-right duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-heritage-gold/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <p className="font-ubuntu font-semibold text-gray-900">
                {getGreeting()}, {user?.full_name || "Ubuntu Seeker"}!
              </p>
              <p className="text-sm text-heritage-gold font-ubuntu">
                {getHeritageGreeting()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-heritage-gold/20 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <Link href="/ubuntu" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-xl font-bold">A</span>
                </div>
                <div>
                  <h1 className="text-xl font-ubuntu font-bold text-gray-900">Asante</h1>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-ubuntu font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-heritage-gold/10 text-heritage-gold border border-heritage-gold/20"
                      : "text-gray-600 hover:text-heritage-gold hover:bg-heritage-gold/5"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-heritage-gold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Avatar */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10 border-2 border-heritage-gold/20">
                  <AvatarFallback className="bg-heritage-gold text-white font-ubuntu font-semibold">
                    {user?.full_name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-ubuntu font-semibold text-gray-900">
                    {user?.full_name || "Ubuntu Seeker"}
                  </p>
                  <p className="text-xs text-heritage-gold font-ubuntu">
                    {user?.subscription_tier?.replace('_', ' ').toUpperCase() || "SEEKER"}
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-heritage-gold/10">
          <div className="flex space-x-1 px-4 py-2 overflow-x-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg font-ubuntu text-xs transition-all duration-200 flex-shrink-0 ${
                  pathname === item.href
                    ? "bg-heritage-gold/10 text-heritage-gold"
                    : "text-gray-600 hover:text-heritage-gold hover:bg-heritage-gold/5"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
} 