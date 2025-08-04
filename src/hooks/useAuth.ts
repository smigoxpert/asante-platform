"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { User, AuthState } from '@/types';
import { authService } from '@/lib/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (userData: Partial<User>) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<{ success: boolean }>;
  updateProfile: (updates: Partial<User>) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check if user is already authenticated on mount
    const checkAuth = async () => {
      try {
        const user = await authService.getCurrentUser();
        setAuthState({
          user,
          isAuthenticated: !!user,
          isLoading: false
        });
      } catch (error) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true }));
    
    try {
      const result = await authService.login(email, password);
      
      if (result.success && result.user) {
        setAuthState({
          user: result.user,
          isAuthenticated: true,
          isLoading: false
        });
      } else {
        setAuthState((prev: AuthState) => ({ ...prev, isLoading: false }));
      }
      
      return result;
    } catch (error) {
      setAuthState((prev: AuthState) => ({ ...prev, isLoading: false }));
      return { success: false, error: 'Login failed' };
    }
  };

  const signup = async (userData: Partial<User>) => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true }));
    
    try {
      const result = await authService.signup(userData);
      
      if (result.success && result.user) {
        setAuthState({
          user: result.user,
          isAuthenticated: true,
          isLoading: false
        });
      } else {
        setAuthState((prev: AuthState) => ({ ...prev, isLoading: false }));
      }
      
      return result;
    } catch (error) {
      setAuthState((prev: AuthState) => ({ ...prev, isLoading: false }));
      return { success: false, error: 'Signup failed' };
    }
  };

  const logout = async () => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true }));
    
    try {
      const result = await authService.logout();
      
      if (result.success) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      } else {
        setAuthState((prev: AuthState) => ({ ...prev, isLoading: false }));
      }
      
      return result;
    } catch (error) {
      setAuthState((prev: AuthState) => ({ ...prev, isLoading: false }));
      return { success: false };
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    try {
      const result = await authService.updateProfile(updates);
      
      if (result.success && result.user) {
        setAuthState((prev: AuthState) => ({
          ...prev,
          user: result.user || null
        }));
      }
      
      return result;
    } catch (error) {
      return { success: false, error: 'Profile update failed' };
    }
  };

  const value: AuthContextType = {
    ...authState,
    login,
    signup,
    logout,
    updateProfile
  };

  return React.createElement(AuthContext.Provider, { value }, children);
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 