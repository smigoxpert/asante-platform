"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const navigationItems = [
  {
    name: "Ubuntu Dashboard",
    href: "/ubuntu",
    icon: "🏠",
    description: "Your personal learning space"
  },
  {
    name: "Heritage",
    href: "/heritage",
    icon: "🌳",
    description: "Discover your ancestral roots"
  },
  {
    name: "Wisdom Paths",
    href: "/wisdom-paths",
    icon: "🛤️",
    description: "Curated learning journeys"
  },
  {
    name: "Circles",
    href: "/circles",
    icon: "👥",
    description: "Community connections"
  },
  {
    name: "Impact",
    href: "/impact",
    icon: "🌟",
    description: "Track your community contributions"
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Asante</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-100 text-amber-700"
                      : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <span className="text-lg">🔔</span>
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>

            {/* User Avatar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/default.jpg" alt="User" />
                    <AvatarFallback className="bg-amber-100 text-amber-600">
                      UW
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Ubuntu Warrior</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      demo@asante.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="mr-2">👤</span>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">⚙️</span>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">📚</span>
                  My Learning
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="mr-2">🚪</span>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div>{item.name}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 