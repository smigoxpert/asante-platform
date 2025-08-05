"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/ui/logo";
import { LoadingButton } from "@/components/ui/loading";
import { authService } from "@/lib/auth";
import { useLoading } from "@/components/providers/loading-provider";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { showLoading, hideLoading } = useLoading();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    showLoading("Signing you in...");
    setError("");

    try {
      const result = await authService.login(email, password);
      if (result.success && result.user) {
        // Clear loading states before redirect
        setIsLoading(false);
        hideLoading();
        // Small delay to ensure loading states are cleared before redirect
        setTimeout(() => {
          router.push("/ubuntu");
        }, 100);
      } else {
        setIsLoading(false);
        hideLoading();
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setIsLoading(false);
      hideLoading();
      setError("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 african-sunset opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
      
      {/* Floating Cultural Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-heritage-gold/20 rounded-full cultural-float blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-terracotta-500/30 rounded-full cultural-float blur-lg" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-ochre-500/25 rounded-full cultural-float blur-md" style={{animationDelay: '4s'}}></div>
      
      {/* Traditional Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header with Enhanced Typography */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Logo size="xl" showText={false} />
            </div>
            
            <h1 className="text-4xl font-ubuntu font-bold text-white mb-2 text-balance">
              Welcome to <span className="bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-lg shadow-black/50 ubuntu-pulse font-extrabold">Asante</span>
            </h1>
            <p className="text-white/90 text-lg font-ubuntu font-light">
              Continue your Ubuntu journey of growth and connection
            </p>
            
            {/* Inspirational Quote */}
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-white/80 text-sm italic font-ubuntu">
                "I am because we are" - Ubuntu Philosophy
              </p>
            </div>
          </div>

          {/* Enhanced Card with Glassmorphism */}
          <Card className="backdrop-blur-xl bg-white/95 border-white/30 shadow-2xl heritage-glow">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent">
                Sign In
              </CardTitle>
              <CardDescription className="text-gray-600 font-ubuntu">
                Enter your credentials to access your learning space
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600 text-sm font-ubuntu">{error}</p>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-ubuntu font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-heritage-gold/30 focus:border-heritage-gold focus:ring-heritage-gold/20 transition-all duration-300 font-ubuntu bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="font-ubuntu font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-heritage-gold/30 focus:border-heritage-gold focus:ring-heritage-gold/20 transition-all duration-300 font-ubuntu bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-heritage-gold focus:ring-heritage-gold border-gray-300 rounded transition-all duration-200"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 font-ubuntu">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link 
                      href="/forgot-password" 
                      className="font-medium font-ubuntu heritage-gradient bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <LoadingButton 
                  type="submit" 
                  loading={isLoading}
                  loadingText="Signing In..."
                  className="w-full heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white py-3 disabled:opacity-50"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Sign In</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </LoadingButton>
              </form>

              {/* Social Login Section */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-heritage-gold/30" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-ubuntu">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="border-2 border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold transition-all duration-300 font-ubuntu font-medium backdrop-blur-sm bg-white/80"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold transition-all duration-300 font-ubuntu font-medium backdrop-blur-sm bg-white/80"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Apple
                  </Button>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 font-ubuntu">
                  Don't have an account?{" "}
                  <Link 
                    href="/signup" 
                    className="font-semibold font-ubuntu heritage-gradient bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Footer Quote */}
          <div className="text-center mt-8">
            <p className="text-white/70 text-xs font-ubuntu italic">
              "The quality of being human shows itself through Ubuntu" - Desmond Tutu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}