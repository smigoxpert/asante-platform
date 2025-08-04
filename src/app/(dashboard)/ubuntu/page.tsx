"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authService } from "@/lib/auth";
import { User, DashboardStats, ActivityFeedItem, QuickAction, CulturalCalendarEvent, ElderWisdomDaily, HeritageDiscovery, UbuntuCircleStatus } from "@/types";

export default function UbuntuDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const coursesRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState<DashboardStats>({
    heritage_completion: 65,
    ubuntu_circle_health: 89,
    wisdom_paths_completed: 3,
    community_impact_score: 78,
    days_in_journey: 42,
    next_meeting_countdown: 2,
    community_energy: 'high'
  });

  const [featuredCourses] = useState([
    {
      id: "1",
      title: "Ancestral Wisdom Foundations",
      description: "Discover the power of storytelling and oral traditions",
      progress: 75,
      thumbnail: "🌍",
      duration: "2h 30m",
      lessons: 12,
      category: "Heritage"
    },
    {
      id: "2",
      title: "Ubuntu Leadership",
      description: "Community-centered leadership principles",
      progress: 45,
      thumbnail: "👑",
      duration: "3h 15m",
      lessons: 18,
      category: "Leadership"
    },
    {
      id: "3",
      title: "Sacred Relationships",
      description: "Building meaningful connections through Ubuntu",
      progress: 20,
      thumbnail: "💝",
      duration: "1h 45m",
      lessons: 8,
      category: "Relationships"
    },
    {
      id: "4",
      title: "Spiritual Awakening",
      description: "Traditional African spirituality and modern practice",
      progress: 0,
      thumbnail: "✨",
      duration: "4h 20m",
      lessons: 15,
      category: "Spirituality"
    }
  ]);

  const [communityHighlights] = useState([
    {
      id: "1",
      user: { name: "Amina", avatar: "A" },
      action: "shared wisdom",
      content: "Traditional healing practices from my grandmother",
      reactions: 12,
      timestamp: "2h ago"
    },
    {
      id: "2",
      user: { name: "Kwame", avatar: "K" },
      action: "completed",
      content: "Ancestral Wisdom Foundations course",
      reactions: 8,
      timestamp: "4h ago"
    },
    {
      id: "3",
      user: { name: "Maya", avatar: "M" },
      action: "discovered",
      content: "new family connection in Nigeria",
      reactions: 15,
      timestamp: "6h ago"
    },
    {
      id: "4",
      user: { name: "Zara", avatar: "Z" },
      action: "started",
      content: "Ubuntu Leadership journey",
      reactions: 6,
      timestamp: "8h ago"
    }
  ]);

  const [calendarEvents] = useState<CulturalCalendarEvent[]>([
    {
      id: "1",
      title: "Full Moon Ceremony",
      description: "Traditional African spiritual ceremony",
      date: "2024-01-15",
      type: "ceremony",
      cultural_significance: "Honoring ancestors and seeking guidance",
      user_relevance: "high",
      rsvp_required: true,
      rsvp_status: "attending"
    },
    {
      id: "2",
      title: "Elder Wisdom Session",
      description: "One-on-one guidance with Elder Aisha",
      date: "2024-01-16",
      type: "workshop",
      cultural_significance: "Personal spiritual development",
      user_relevance: "high",
      rsvp_required: true
    },
    {
      id: "3",
      title: "Cultural Cooking Workshop",
      description: "Learn traditional African recipes",
      date: "2024-01-18",
      type: "workshop",
      cultural_significance: "Connecting through food and tradition",
      user_relevance: "medium",
      rsvp_required: true
    }
  ]);

  const [elderWisdom] = useState<ElderWisdomDaily>({
    id: "1",
    elder_name: "Elder Aisha",
    cultural_background: "Yoruba",
    wisdom_quote: "The river flows not by its own power, but by the strength of many streams coming together.",
    modern_application: "In our digital age, remember that true connection comes from combining our individual strengths to create something greater than ourselves.",
    cultural_practices: ["Community meditation", "Storytelling circles", "Ancestral honoring"]
  });

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };
    loadUser();
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

  const scrollToCourse = (direction: 'left' | 'right') => {
    if (!coursesRef.current) return;
    
    const container = coursesRef.current;
    const cardWidth = 320 + 24; // card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    // Update current index
    if (direction === 'left' && currentCourseIndex > 0) {
      setCurrentCourseIndex(currentCourseIndex - 1);
    } else if (direction === 'right' && currentCourseIndex < featuredCourses.length - 1) {
      setCurrentCourseIndex(currentCourseIndex + 1);
    }
  };

  const canScrollLeft = currentCourseIndex > 0;
  const canScrollRight = currentCourseIndex < featuredCourses.length - 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-heritage-gold via-terracotta-500 to-ochre-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-white mb-8 lg:mb-0">
                <h1 className="text-5xl lg:text-6xl font-ubuntu font-bold mb-4">
                  {getGreeting()}, <br />
                  <span className="text-white drop-shadow-lg">{user?.full_name || "Ubuntu Seeker"}</span>
                </h1>
                <p className="text-xl lg:text-2xl font-ubuntu font-light mb-6">
                  {getHeritageGreeting()} - Day {stats.days_in_journey} of your transformation
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-ubuntu font-bold">{stats.heritage_completion}%</div>
                    <div className="text-sm font-ubuntu opacity-90">Heritage Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-ubuntu font-bold">{stats.community_impact_score}</div>
                    <div className="text-sm font-ubuntu opacity-90">Impact Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-ubuntu font-bold">{stats.wisdom_paths_completed}</div>
                    <div className="text-sm font-ubuntu opacity-90">Paths Completed</div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Button 
                  size="lg" 
                  className="bg-white text-heritage-gold hover:bg-gray-100 px-8 py-4 text-lg font-ubuntu font-semibold shadow-lg"
                >
                  Resume Course
                </Button>
                <p className="text-white/80 text-sm font-ubuntu mt-2">
                  Continue your Ubuntu journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Featured Courses Carousel */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900">Featured Courses</h2>
              <Button variant="outline" className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu">
                View All Courses
              </Button>
            </div>
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={() => scrollToCourse('left')}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft 
                    ? 'hover:bg-white hover:shadow-xl text-heritage-gold' 
                    : 'opacity-50 cursor-not-allowed text-gray-400'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => scrollToCourse('right')}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  canScrollRight 
                    ? 'hover:bg-white hover:shadow-xl text-heritage-gold' 
                    : 'opacity-50 cursor-not-allowed text-gray-400'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Courses Container */}
              <div 
                ref={coursesRef}
                className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide px-16"
                onScroll={(e) => {
                  const target = e.target as HTMLDivElement;
                  const scrollLeft = target.scrollLeft;
                  const cardWidth = 320 + 24; // card width + gap
                  const newIndex = Math.round(scrollLeft / cardWidth);
                  setCurrentCourseIndex(Math.max(0, Math.min(newIndex, featuredCourses.length - 1)));
                }}
              >
                {featuredCourses.map((course) => (
                <Card key={course.id} className="min-w-[320px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-4xl">{course.thumbnail}</span>
                      <Badge className="bg-heritage-gold/10 text-heritage-gold border-heritage-gold/20">
                        {course.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-ubuntu font-bold text-gray-900 mb-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="font-ubuntu text-gray-600">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm font-ubuntu mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 font-ubuntu">
                        <span>{course.duration}</span>
                        <span>{course.lessons} lessons</span>
                      </div>
                      <Button 
                        className="w-full heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white"
                      >
                        {course.progress > 0 ? 'Continue' : 'Start Course'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </section>

          {/* Daily Wisdom Section */}
          <section>
            <Card className="bg-gradient-to-br from-heritage-gold/5 to-terracotta-500/5 border-heritage-gold/20">
              <CardContent className="p-8">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="text-6xl mb-6">🧙‍♀️</div>
                  <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">
                    Today's Ubuntu Wisdom
                  </h2>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-6 shadow-lg">
                    <p className="text-2xl font-ubuntu italic text-gray-800 mb-4 leading-relaxed">
                      "{elderWisdom.wisdom_quote}"
                    </p>
                    <p className="text-lg font-ubuntu text-gray-600 mb-4">
                      {elderWisdom.modern_application}
                    </p>
                    <div className="text-sm text-heritage-gold font-ubuntu">
                      — Elder {elderWisdom.elder_name} ({elderWisdom.cultural_background})
                    </div>
                  </div>
                  <Button 
                    size="lg"
                    className="heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white px-8 py-3"
                  >
                    Listen to Full Teaching
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Community Highlights Carousel */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900">Community Highlights</h2>
              <Button variant="outline" className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu">
                View All Activity
              </Button>
            </div>
            <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
              {communityHighlights.map((highlight) => (
                <Card key={highlight.id} className="min-w-[280px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-heritage-gold/20">
                        <AvatarFallback className="bg-heritage-gold text-white font-ubuntu font-semibold">
                          {highlight.user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-ubuntu font-semibold text-gray-900">
                          {highlight.user.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-ubuntu">
                          {highlight.action} <span className="font-medium">{highlight.content}</span>
                        </p>
                        <p className="text-xs text-gray-500 font-ubuntu mt-1">
                          {highlight.timestamp}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-heritage-gold">❤️</span>
                        <span className="text-sm font-ubuntu text-gray-600">{highlight.reactions} reactions</span>
                      </div>
                      <Button size="sm" variant="outline" className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu">
                        Celebrate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cultural Calendar Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900">Cultural Calendar</h2>
              <Button variant="outline" className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu">
                View Full Calendar
              </Button>
            </div>
            <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
              {calendarEvents.map((event) => (
                <Card key={event.id} className="min-w-[300px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">
                        {event.type === 'ceremony' ? '🌙' : event.type === 'workshop' ? '📚' : '🎉'}
                      </span>
                      <Badge className={`${
                        event.rsvp_status === 'attending' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      } font-ubuntu`}>
                        {event.rsvp_status || 'RSVP'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-ubuntu font-bold text-gray-900 mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="font-ubuntu text-gray-600">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-heritage-gold font-ubuntu">
                        {event.cultural_significance}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-ubuntu">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <Button 
                          size="sm"
                          className="heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white"
                        >
                          {event.rsvp_status === 'attending' ? 'Attending' : 'RSVP'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Actions Grid */}
          <section>
            <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌳</div>
                  <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Family Tree</h3>
                  <p className="text-sm text-gray-600 font-ubuntu mb-4">Add 3 more family members</p>
                  <Button className="w-full heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white">
                    Continue
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Circle Meeting</h3>
                  <p className="text-sm text-gray-600 font-ubuntu mb-4">Join in 2 hours</p>
                  <Button className="w-full heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white">
                    Join Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Next Lesson</h3>
                  <p className="text-sm text-gray-600 font-ubuntu mb-4">25 minutes remaining</p>
                  <Button className="w-full heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white">
                    Resume
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🧙‍♀️</div>
                  <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Elder Guidance</h3>
                  <p className="text-sm text-gray-600 font-ubuntu mb-4">Book your session</p>
                  <Button className="w-full heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white">
                    Schedule
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 