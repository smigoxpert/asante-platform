import { User, HeritageBackground } from '@/types';

class AuthService {
  private currentUser: User | null = null;

  constructor() {
    // Initialize with a mock user for development
    this.currentUser = {
      id: "1",
      email: "ubuntu@asante.com",
      full_name: "Ubuntu Seeker",
      subscription_tier: "seeker",
      ubuntu_values_score: 75,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation
    if (email === "test@example.com" && password === "password") {
      const user: User = {
        id: "1",
        email: email,
        full_name: "Test User",
        subscription_tier: "ubuntu_connector",
        ubuntu_values_score: 85,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      this.currentUser = user;
      return { success: true, user };
    }

    return { success: false, error: "Invalid credentials" };
  }

  async signup(userData: Partial<User>): Promise<{ success: boolean; user?: User; error?: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock validation
    if (!userData.email || !userData.full_name) {
      return { success: false, error: "Email and full name are required" };
    }

    // Create new user
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: userData.email,
      full_name: userData.full_name,
      subscription_tier: "seeker",
      ubuntu_values_score: 50,
      heritage_profile: userData.heritage_profile,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.currentUser = newUser;
    return { success: true, user: newUser };
  }

  async logout(): Promise<{ success: boolean }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    this.currentUser = null;
    return { success: true };
  }

  async getCurrentUser(): Promise<User | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return this.currentUser;
  }

  async updateProfile(updates: Partial<User>): Promise<{ success: boolean; user?: User; error?: string }> {
    if (!this.currentUser) {
      return { success: false, error: "No user logged in" };
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Update user
    this.currentUser = { ...this.currentUser, ...updates, updated_at: new Date().toISOString() };
    return { success: true, user: this.currentUser };
  }
}

// Export singleton instance
export const authService = new AuthService();

// Utility functions
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }
  
  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
} 