"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Elder {
  id: string;
  name: string;
  title: string;
  culturalBackground: string;
  expertise: string[];
  wisdomQuote: string;
  availability: ElderAvailability[];
  rating: number;
  sessionsCompleted: number;
  languages: string[];
  avatar: string;
  bio: string;
  specialties: string[];
}

interface ElderAvailability {
  id: string;
  date: string;
  time: string;
  timezone: string;
  duration: number;
  type: 'virtual' | 'in_person';
  location?: string;
  maxParticipants: number;
  currentParticipants: number;
  topic?: string;
}

interface WisdomSession {
  id: string;
  elderId: string;
  elderName: string;
  title: string;
  date: string;
  time: string;
  type: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  insights?: string[];
}

export function ElderGuidance() {
  const [elders, setElders] = useState<Elder[]>([]);
  const [selectedElder, setSelectedElder] = useState<Elder | null>(null);
  const [userSessions, setUserSessions] = useState<WisdomSession[]>([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  useEffect(() => {
    // Simulate loading elder data
    const mockElders: Elder[] = [
      {
        id: "1",
        name: "Mama Aisha",
        title: "Elder & Community Healer",
        culturalBackground: "Yoruba, Nigerian",
        expertise: ["Ancestral Healing", "Community Leadership", "Traditional Medicine"],
        wisdomQuote: "The greatest healing comes from remembering who we are and honoring our ancestors.",
        availability: [
          {
            id: "1",
            date: "2024-01-22",
            time: "14:00",
            timezone: "EST",
            duration: 60,
            type: "virtual",
            maxParticipants: 5,
            currentParticipants: 2,
            topic: "Ancestral Connection & Healing"
          },
          {
            id: "2",
            date: "2024-01-25",
            time: "16:00",
            timezone: "EST",
            duration: 90,
            type: "in_person",
            location: "Community Center",
            maxParticipants: 8,
            currentParticipants: 4,
            topic: "Traditional Healing Practices"
          }
        ],
        rating: 4.9,
        sessionsCompleted: 127,
        languages: ["English", "Yoruba"],
        avatar: "A",
        bio: "Mama Aisha has been a community healer for over 30 years, specializing in ancestral healing and traditional medicine. She has guided thousands through their spiritual journeys.",
        specialties: ["Ancestral Healing", "Community Leadership", "Traditional Medicine", "Spiritual Guidance"]
      },
      {
        id: "2",
        name: "Elder Mosi",
        title: "Wisdom Keeper & Storyteller",
        culturalBackground: "Akan, Ghanaian",
        expertise: ["Storytelling", "Cultural Preservation", "Youth Mentorship"],
        wisdomQuote: "Stories are the bridges between generations, carrying wisdom that never grows old.",
        availability: [
          {
            id: "3",
            date: "2024-01-23",
            time: "19:00",
            timezone: "EST",
            duration: 75,
            type: "virtual",
            maxParticipants: 10,
            currentParticipants: 6,
            topic: "Ancestral Stories & Wisdom"
          }
        ],
        rating: 4.8,
        sessionsCompleted: 89,
        languages: ["English", "Twi"],
        avatar: "M",
        bio: "Elder Mosi is a master storyteller who has preserved and shared ancestral wisdom for decades. He specializes in youth mentorship and cultural preservation.",
        specialties: ["Storytelling", "Cultural Preservation", "Youth Mentorship", "Ancestral Wisdom"]
      },
      {
        id: "3",
        name: "Baba Kofi",
        title: "Spiritual Guide & Teacher",
        culturalBackground: "Ewe, Togolese",
        expertise: ["Spiritual Development", "Meditation", "Life Purpose"],
        wisdomQuote: "Your purpose is not something you find, but something you remember from your soul's journey.",
        availability: [
          {
            id: "4",
            date: "2024-01-24",
            time: "20:00",
            timezone: "EST",
            duration: 60,
            type: "virtual",
            maxParticipants: 6,
            currentParticipants: 3,
            topic: "Finding Your Life Purpose"
          }
        ],
        rating: 4.7,
        sessionsCompleted: 156,
        languages: ["English", "Ewe"],
        avatar: "K",
        bio: "Baba Kofi is a spiritual guide who helps people discover their life purpose and develop their spiritual practice. He has guided many through major life transitions.",
        specialties: ["Spiritual Development", "Meditation", "Life Purpose", "Personal Transformation"]
      }
    ];

    const mockSessions: WisdomSession[] = [
      {
        id: "1",
        elderId: "1",
        elderName: "Mama Aisha",
        title: "Ancestral Healing Session",
        date: "2024-01-15",
        time: "14:00",
        type: "completed",
        notes: "Deep healing session focused on connecting with maternal ancestors",
        insights: [
          "Learned about the importance of honoring ancestors daily",
          "Discovered family healing patterns",
          "Received guidance on spiritual practices"
        ]
      },
      {
        id: "2",
        elderId: "2",
        elderName: "Elder Mosi",
        title: "Storytelling & Wisdom",
        date: "2024-01-28",
        time: "19:00",
        type: "scheduled"
      }
    ];

    setElders(mockElders);
    setUserSessions(mockSessions);
  }, []);

  const getUpcomingSessions = () => {
    return userSessions.filter(session => session.type === 'scheduled');
  };

  const getCompletedSessions = () => {
    return userSessions.filter(session => session.type === 'completed');
  };

  const getAvailableElders = () => {
    return elders.filter(elder => elder.availability.length > 0);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-ubuntu font-bold text-gray-900 mb-2">Elder Guidance</h2>
          <p className="text-gray-600 font-ubuntu">
            Connect with wisdom keepers for spiritual guidance and ancestral wisdom
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className="text-2xl font-ubuntu font-bold text-heritage-gold">
              {getUpcomingSessions().length}
            </p>
            <p className="text-sm text-gray-600 font-ubuntu">Upcoming Sessions</p>
          </div>
          <Button
            onClick={() => setShowScheduleModal(true)}
            className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu"
          >
            Schedule Session
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Available Elders</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">{getAvailableElders().length}</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Sessions Completed</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">{getCompletedSessions().length}</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Wisdom Insights</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">23</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Avg Rating</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">4.8</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Elders */}
      <div>
        <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-4">Available Elders</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {getAvailableElders().map((elder) => (
            <Card
              key={elder.id}
              className="bg-white/80 backdrop-blur-sm border-heritage-gold/20 cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedElder(elder)}
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center text-white text-2xl font-ubuntu font-bold">
                    {elder.avatar}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-ubuntu font-bold text-gray-900 mb-1">
                      {elder.name}
                    </CardTitle>
                    <CardDescription className="font-ubuntu mb-2">
                      {elder.title} • {elder.culturalBackground}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-ubuntu font-semibold">{elder.rating}</span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600 font-ubuntu">{elder.sessionsCompleted} sessions</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 font-ubuntu italic mb-2">
                      "{elder.wisdomQuote}"
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {elder.specialties.slice(0, 3).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-heritage-gold/30 text-heritage-gold">
                          {specialty}
                        </Badge>
                      ))}
                      {elder.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                          +{elder.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Available Sessions</h4>
                    <div className="space-y-2">
                      {elder.availability.slice(0, 2).map((session) => (
                        <div key={session.id} className="p-3 bg-heritage-gold/5 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-ubuntu font-semibold text-gray-900">
                              {session.topic}
                            </span>
                            <Badge variant="secondary" className="text-xs bg-heritage-gold/10 text-heritage-gold">
                              {session.currentParticipants}/{session.maxParticipants}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-gray-600">
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                            <span>{session.time} {session.timezone}</span>
                            <span>{session.duration}min</span>
                            <span className="capitalize">{session.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElder(elder);
                    }}
                  >
                    Book Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Your Sessions */}
      <div>
        <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-4">Your Wisdom Sessions</h3>
        
        {/* Upcoming Sessions */}
        {getUpcomingSessions().length > 0 && (
          <div className="mb-6">
            <h4 className="font-ubuntu font-semibold text-gray-900 mb-3">Upcoming</h4>
            <div className="space-y-3">
              {getUpcomingSessions().map((session) => (
                <Card key={session.id} className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-ubuntu font-semibold text-gray-900">{session.title}</h5>
                          <p className="text-sm text-gray-600 font-ubuntu">
                            with {session.elderName} • {new Date(session.date).toLocaleDateString()} at {session.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="border-heritage-gold/30 text-heritage-gold">
                          Join
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-300 text-gray-600">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Completed Sessions */}
        {getCompletedSessions().length > 0 && (
          <div>
            <h4 className="font-ubuntu font-semibold text-gray-900 mb-3">Completed</h4>
            <div className="space-y-3">
              {getCompletedSessions().map((session) => (
                <Card key={session.id} className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-ubuntu font-semibold text-gray-900 mb-1">{session.title}</h5>
                          <p className="text-sm text-gray-600 font-ubuntu mb-2">
                            with {session.elderName} • {new Date(session.date).toLocaleDateString()}
                          </p>
                          {session.insights && (
                            <div>
                              <h6 className="font-ubuntu font-semibold text-sm text-gray-900 mb-1">Key Insights:</h6>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {session.insights.map((insight, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <span className="text-heritage-gold mt-1">•</span>
                                    <span>{insight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-heritage-gold/30 text-heritage-gold">
                        View Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Wisdom Insights */}
      <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
        <CardHeader>
          <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
            Wisdom Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Wisdom Received</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">23</p>
              <p className="text-xs text-gray-600 font-ubuntu">Insights & guidance</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Elder Connections</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">3</p>
              <p className="text-xs text-gray-600 font-ubuntu">Wisdom keepers</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Spiritual Growth</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">85%</p>
              <p className="text-xs text-gray-600 font-ubuntu">Progress made</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 