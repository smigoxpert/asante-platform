// User Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  heritage?: HeritageBackground;
  location?: string;
  ageRange?: string;
  occupation?: string;
  interests: string[];
  communityPreferences: string[];
  familyTraditions?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface HeritageBackground {
  primaryRegion: string;
  secondaryRegions?: string[];
  familyTraditions?: string;
  ancestralStories?: string[];
}

// Learning Path Types
export interface WisdomPath {
  id: string;
  title: string;
  description: string;
  category: PathCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in hours
  modules: Module[];
  prerequisites?: string[];
  tags: string[];
  imageUrl?: string;
  instructor?: string;
  rating?: number;
  enrolledCount: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: ModuleContent[];
  duration: number; // in minutes
  order: number;
}

export interface ModuleContent {
  id: string;
  type: 'video' | 'audio' | 'text' | 'interactive' | 'reflection';
  title: string;
  description?: string;
  url?: string;
  content?: string;
  duration?: number;
}

export type PathCategory = 
  | 'ancestral-wisdom'
  | 'ubuntu-leadership'
  | 'healing-medicine'
  | 'creative-expression'
  | 'community-building'
  | 'spiritual-development';

// Progress Types
export interface UserProgress {
  userId: string;
  pathId: string;
  moduleId: string;
  contentId: string;
  completed: boolean;
  progress: number; // 0-100
  timeSpent: number; // in seconds
  lastAccessed: Date;
  reflections?: Reflection[];
}

export interface Reflection {
  id: string;
  userId: string;
  contentId: string;
  text: string;
  createdAt: Date;
  tags?: string[];
}

// Community Types
export interface CommunityCircle {
  id: string;
  name: string;
  description: string;
  category: CircleCategory;
  members: CircleMember[];
  discussions: Discussion[];
  events: CircleEvent[];
  imageUrl?: string;
  isPrivate: boolean;
  createdAt: Date;
}

export interface CircleMember {
  userId: string;
  role: 'member' | 'moderator' | 'mentor' | 'admin';
  joinedAt: Date;
  contributionScore: number;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  authorId: string;
  circleId: string;
  replies: Reply[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Reply {
  id: string;
  content: string;
  authorId: string;
  discussionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CircleEvent {
  id: string;
  title: string;
  description: string;
  circleId: string;
  startDate: Date;
  endDate: Date;
  type: 'virtual' | 'in-person' | 'hybrid';
  attendees: string[];
  maxAttendees?: number;
}

export type CircleCategory = 
  | 'ancestral-wisdom'
  | 'leadership'
  | 'healing'
  | 'creativity'
  | 'community'
  | 'spirituality'
  | 'general';

// Impact Types
export interface ImpactMetric {
  userId: string;
  type: ImpactType;
  value: number;
  description: string;
  date: Date;
  verified: boolean;
}

export type ImpactType = 
  | 'community-service'
  | 'knowledge-sharing'
  | 'mentorship'
  | 'cultural-preservation'
  | 'leadership'
  | 'healing-practice';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
} 