import { User } from "@/types";

// Mock user data for development
const mockUsers: User[] = [
  {
    id: "1",
    email: "demo@asante.com",
    firstName: "Ubuntu",
    lastName: "Warrior",
    avatar: "/avatars/default.jpg",
    heritage: {
      primaryRegion: "west-africa",
      familyTraditions: "Storytelling and community gatherings",
      ancestralStories: ["The wisdom of our elders", "Community leadership"]
    },
    location: "Accra, Ghana",
    ageRange: "26-35",
    occupation: "Community Leader",
    interests: [
      "Connect with African heritage and culture",
      "Learn traditional wisdom and philosophy",
      "Build community and relationships"
    ],
    communityPreferences: [
      "Join discussion circles",
      "Connect with mentors",
      "Share stories and experiences"
    ],
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date()
  }
];

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export class AuthService {
  private static instance: AuthService;
  private currentUser: User | null = null;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = mockUsers.find(u => u.email === email);
      if (user && password === "demo123") {
        this.currentUser = user;
        return { success: true, user };
      }
      
      return { success: false, error: "Invalid credentials" };
    } catch (error) {
      return { success: false, error: "Login failed" };
    }
  }

  async signup(userData: Partial<User>): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email!,
        firstName: userData.firstName!,
        lastName: userData.lastName!,
        interests: userData.interests || [],
        communityPreferences: userData.communityPreferences || [],
        heritage: userData.heritage,
        location: userData.location,
        ageRange: userData.ageRange,
        occupation: userData.occupation,
        familyTraditions: userData.familyTraditions,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      this.currentUser = newUser;
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: "Signup failed" };
    }
  }

  async logout(): Promise<{ success: boolean }> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.currentUser = null;
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  async getCurrentUser(): Promise<User | null> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.currentUser;
  }

  async updateProfile(updates: Partial<User>): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      if (!this.currentUser) {
        return { success: false, error: "Not authenticated" };
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.currentUser = { ...this.currentUser, ...updates, updatedAt: new Date() };
      return { success: true, user: this.currentUser };
    } catch (error) {
      return { success: false, error: "Profile update failed" };
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getUser(): User | null {
    return this.currentUser;
  }
}

// Export singleton instance
export const authService = AuthService.getInstance();

// Utility functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
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
}; 