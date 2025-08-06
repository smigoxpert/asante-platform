"use client";

import { useTheme } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ThemeTestPage() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Theme Test Page
          </h1>
          <p className="text-muted-foreground mb-4">
            Testing the theme system with all color variables
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline">Current Theme: {theme}</Badge>
            <Badge variant="outline">Resolved: {resolvedTheme}</Badge>
          </div>
        </div>

        {/* Theme Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Theme Controls</CardTitle>
            <CardDescription>Test different theme options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button 
                onClick={() => setTheme("light")}
                variant={theme === "light" ? "default" : "outline"}
              >
                Light
              </Button>
              <Button 
                onClick={() => setTheme("dark")}
                variant={theme === "dark" ? "default" : "outline"}
              >
                Dark
              </Button>
              <Button 
                onClick={() => setTheme("system")}
                variant={theme === "system" ? "default" : "outline"}
              >
                System
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>All theme colors in action</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Background Colors */}
            <div>
              <h3 className="font-semibold mb-2">Background Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 bg-background border border-border rounded"></div>
                  <p className="text-xs text-center">background</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border border-border rounded"></div>
                  <p className="text-xs text-center">card</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-secondary border border-border rounded"></div>
                  <p className="text-xs text-center">secondary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-muted border border-border rounded"></div>
                  <p className="text-xs text-center">muted</p>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div>
              <h3 className="font-semibold mb-2">Text Colors</h3>
              <div className="space-y-2">
                <p className="text-foreground">foreground - Main text color</p>
                <p className="text-muted-foreground">muted-foreground - Secondary text color</p>
                <p className="text-primary">primary - Primary accent color</p>
                <p className="text-secondary-foreground">secondary-foreground - Secondary text</p>
              </div>
            </div>

            {/* Interactive Elements */}
            <div>
              <h3 className="font-semibold mb-2">Interactive Elements</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <Input placeholder="Input field" />
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="font-semibold mb-2">Badges</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Heritage Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Heritage Colors</CardTitle>
            <CardDescription>African heritage color palette</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-heritage-gold rounded"></div>
                <p className="text-xs text-center">heritage-gold</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-heritage-bronze rounded"></div>
                <p className="text-xs text-center">heritage-bronze</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-heritage-copper rounded"></div>
                <p className="text-xs text-center">heritage-copper</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-heritage-earth rounded"></div>
                <p className="text-xs text-center">heritage-earth</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-heritage-clay rounded"></div>
                <p className="text-xs text-center">heritage-clay</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CSS Variables Display */}
        <Card>
          <CardHeader>
            <CardTitle>CSS Variables</CardTitle>
            <CardDescription>Current theme CSS custom properties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto">
              <pre>
                {typeof window !== 'undefined' ? 
                  `--background: ${getComputedStyle(document.documentElement).getPropertyValue('--background')}
--foreground: ${getComputedStyle(document.documentElement).getPropertyValue('--foreground')}
--primary: ${getComputedStyle(document.documentElement).getPropertyValue('--primary')}
--primary-foreground: ${getComputedStyle(document.documentElement).getPropertyValue('--primary-foreground')}
--secondary: ${getComputedStyle(document.documentElement).getPropertyValue('--secondary')}
--muted: ${getComputedStyle(document.documentElement).getPropertyValue('--muted')}
--border: ${getComputedStyle(document.documentElement).getPropertyValue('--border')}` 
                  : 'CSS variables will be displayed on client-side'
                }
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 