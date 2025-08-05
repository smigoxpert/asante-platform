// User and Heritage Types
export interface User {
  id: string;
  email: string;
  full_name: string;
  heritage_profile?: HeritageProfile;
  subscription_tier: SubscriptionTier;
  ubuntu_values_score: number;
  created_at: string;
  updated_at: string;
  country?: string;
  country_code?: string;
  flag_emoji?: string;
}

export interface HeritageProfile {
  id: string;
  user_id: string;
  haplogroup?: string;
  regional_origins: string[];
  cultural_identities: string[];
  dna_results?: DNAResults;
  family_tree_id?: string;
  heritage_completion_percentage: number;
  cultural_preferences: CulturalPreferences;
}

export interface DNAResults {
  provider: 'ancestrydna' | '23andme' | 'familytreedna' | 'myheritage';
  ethnicity_estimate: EthnicityEstimate[];
  haplogroup_maternal?: string;
  haplogroup_paternal?: string;
  uploaded_at: string;
}

export interface EthnicityEstimate {
  region: string;
  percentage: number;
  confidence_range: [number, number];
  sub_regions?: string[];
}

export interface CulturalPreferences {
  preferred_languages: string[];
  cultural_practices: string[];
  spiritual_traditions: string[];
  community_focus: 'local' | 'regional' | 'global';
  learning_style: 'visual' | 'auditory' | 'kinesthetic' | 'community';
}

// Community and Ubuntu Types
export interface UbuntuCircle {
  id: string;
  name: string;
  description: string;
  members: UbuntuCircleMember[];
  elder_id?: string;
  meeting_schedule: MeetingSchedule;
  circle_health_score: number;
  shared_goals: string[];
  created_at: string;
}

export interface UbuntuCircleMember {
  user_id: string;
  role: 'member' | 'facilitator' | 'elder';
  joined_at: string;
  participation_score: number;
  contributions: CircleContribution[];
}

export interface CircleContribution {
  id: string;
  type: 'wisdom_share' | 'story_telling' | 'cultural_practice' | 'community_support';
  title: string;
  description: string;
  impact_score: number;
  created_at: string;
}

export interface MeetingSchedule {
  frequency: 'weekly' | 'biweekly' | 'monthly';
  day_of_week?: number;
  time: string;
  timezone: string;
  duration_minutes: number;
}

// Learning and Wisdom Types
export interface WisdomPath {
  id: string;
  title: string;
  description: string;
  category: WisdomPathCategory;
  lessons: Lesson[];
  prerequisites: string[];
  estimated_duration: number;
  cultural_context: CulturalContext;
  difficulty_level: 1 | 2 | 3 | 4 | 5;
}

export type WisdomPathCategory = 
  | 'ubuntu_leadership'
  | 'ancestral_healing'
  | 'sacred_relationships'
  | 'purposeful_abundance'
  | 'spiritual_awakening'
  | 'cultural_renaissance';

export interface Lesson {
  id: string;
  title: string;
  content_type: 'video' | 'audio' | 'text' | 'interactive';
  content_url?: string;
  duration: number;
  cultural_practices?: CulturalPractice[];
  elder_wisdom?: ElderWisdom;
  community_discussion_id?: string;
}

export interface CulturalPractice {
  id: string;
  name: string;
  description: string;
  region: string;
  category: 'ritual' | 'celebration' | 'daily_life' | 'healing' | 'leadership';
  instructions?: string;
  materials?: string[];
  significance: string;
  image_url?: string;
}

export interface ElderWisdom {
  elder_id: string;
  elder_name: string;
  cultural_background: string;
  wisdom_quote: string;
  context: string;
  modern_application: string;
  video_url?: string;
}

export interface CulturalContext {
  region: string;
  historical_period: string;
  cultural_significance: string;
  modern_relevance: string;
  related_practices: string[];
}

// Subscription and Business Types
export type SubscriptionTier = 'seeker' | 'ubuntu_connector' | 'heritage_guardian' | 'wisdom_keeper';

export interface SubscriptionFeatures {
  tier: SubscriptionTier;
  monthly_price: number;
  features: string[];
  heritage_tools_included: boolean;
  ubuntu_circle_access: boolean;
  elder_guidance_sessions: number;
  advanced_analytics: boolean;
}

// Progress and Analytics Types
export interface UserProgress {
  user_id: string;
  path_id: string;
  lesson_id: string;
  completed: boolean;
  progress_percentage: number;
  time_spent: number;
  reflections: Reflection[];
  last_accessed: string;
}

export interface Reflection {
  id: string;
  user_id: string;
  lesson_id: string;
  content: string;
  emotional_state: string;
  cultural_insights: string[];
  community_impact: string;
  created_at: string;
}

// Cultural Events and Celebrations
export interface CulturalEvent {
  id: string;
  title: string;
  description: string;
  event_type: 'ceremony' | 'celebration' | 'workshop' | 'gathering';
  date: string;
  timezone: string;
  location: 'virtual' | 'hybrid' | 'in_person';
  cultural_region: string;
  participants: string[];
  elder_facilitators: string[];
  registration_required: boolean;
  max_participants?: number;
}

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
    total_pages: number;
  };
}

// Legacy types for backward compatibility
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface HeritageBackground {
  primaryRegion: string;
  secondaryRegions?: string[];
  familyTraditions?: string;
  ancestralStories?: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: ModuleContent[];
  duration: number;
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

// Dashboard and Activity Types
export interface DashboardStats {
  heritage_completion: number;
  ubuntu_circle_health: number;
  wisdom_paths_completed: number;
  community_impact_score: number;
  days_in_journey: number;
  next_meeting_countdown?: number;
  community_energy: 'high' | 'medium' | 'low';
}

export interface ActivityFeedItem {
  id: string;
  type: 'heritage_discovery' | 'circle_activity' | 'learning_achievement' | 'community_celebration' | 'elder_wisdom' | 'heritage_match';
  title: string;
  description: string;
  user_id?: string;
  user_name?: string;
  timestamp: string;
  image_url?: string;
  action_url?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  action_url: string;
  priority: 'urgent' | 'recommended' | 'optional';
  progress?: number;
  time_estimate?: number;
}

export interface CulturalCalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'ceremony' | 'celebration' | 'workshop' | 'moon_phase' | 'seasonal' | 'personal_milestone';
  cultural_significance: string;
  user_relevance: 'high' | 'medium' | 'low';
  rsvp_required: boolean;
  rsvp_status?: 'attending' | 'maybe' | 'declined';
}

export interface ElderWisdomDaily {
  id: string;
  elder_name: string;
  cultural_background: string;
  wisdom_quote: string;
  modern_application: string;
  audio_url?: string;
  video_url?: string;
  cultural_practices: string[];
  community_discussion_id?: string;
}

export interface HeritageDiscovery {
  id: string;
  type: 'family_member' | 'cultural_connection' | 'dna_match' | 'historical_document' | 'traditional_recipe';
  title: string;
  description: string;
  discovery_date: string;
  significance: string;
  next_steps: string[];
  completion_percentage: number;
  related_heritage_categories: string[];
}

export interface UbuntuCircleStatus {
  circle_id: string;
  circle_name: string;
  member_count: number;
  online_members: number;
  next_meeting?: {
    date: string;
    time: string;
    topic: string;
    join_url?: string;
  };
  recent_activity: {
    wisdom_shared: number;
    support_given: number;
    conflicts_resolved: number;
  };
  circle_health_score: number;
  user_participation_score: number;
} 