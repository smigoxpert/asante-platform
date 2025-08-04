"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CircleGathering {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  timezone: string;
  type: 'virtual' | 'hybrid' | 'in_person';
  location?: string;
  joinUrl?: string;
  facilitator: string;
  participants: CircleParticipant[];
  maxParticipants: number;
  topics: string[];
  circleHealth: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

interface CircleParticipant {
  id: string;
  name: string;
  role: 'facilitator' | 'participant' | 'elder';
  avatar: string;
  rsvpStatus: 'attending' | 'maybe' | 'declined' | 'pending';
  contribution?: string;
}

export function CircleGatherings() {
  const [gatherings, setGatherings] = useState<CircleGathering[]>([]);
  const [selectedGathering, setSelectedGathering] = useState<CircleGathering | null>(null);
  const [showCreateGathering, setShowCreateGathering] = useState(false);

  useEffect(() => {
    // Simulate loading circle gatherings
    const mockGatherings: CircleGathering[] = [
      {
        id: "1",
        title: "Monthly Ubuntu Circle",
        description: "Deep dive into Ubuntu principles and community building",
        date: "2024-01-20",
        time: "19:00",
        timezone: "EST",
        type: "virtual",
        joinUrl: "https://meet.google.com/abc-defg-hij",
        facilitator: "Mama Aisha",
        participants: [
          {
            id: "1",
            name: "Mama Aisha",
            role: "facilitator",
            avatar: "A",
            rsvpStatus: "attending",
            contribution: "Leading discussion on Ubuntu leadership"
          },
          {
            id: "2",
            name: "Brother Kofi",
            role: "participant",
            avatar: "K",
            rsvpStatus: "attending",
            contribution: "Sharing wisdom on community healing"
          },
          {
            id: "3",
            name: "Sister Zara",
            role: "participant",
            avatar: "Z",
            rsvpStatus: "maybe"
          },
          {
            id: "4",
            name: "Elder Mosi",
            role: "elder",
            avatar: "M",
            rsvpStatus: "attending",
            contribution: "Ancestral wisdom sharing"
          }
        ],
        maxParticipants: 12,
        topics: ["Ubuntu Leadership", "Community Healing", "Ancestral Wisdom"],
        circleHealth: 85,
        status: "upcoming"
      },
      {
        id: "2",
        title: "Youth Mentorship Circle",
        description: "Supporting young leaders in their Ubuntu journey",
        date: "2024-01-25",
        time: "16:00",
        timezone: "EST",
        type: "hybrid",
        location: "Community Center",
        joinUrl: "https://meet.google.com/xyz-uvw-rst",
        facilitator: "Brother Kofi",
        participants: [
          {
            id: "5",
            name: "Brother Kofi",
            role: "facilitator",
            avatar: "K",
            rsvpStatus: "attending"
          },
          {
            id: "6",
            name: "Young Amani",
            role: "participant",
            avatar: "A",
            rsvpStatus: "attending"
          }
        ],
        maxParticipants: 8,
        topics: ["Youth Leadership", "Ubuntu Values", "Personal Growth"],
        circleHealth: 92,
        status: "upcoming"
      },
      {
        id: "3",
        title: "Ancestor Honoring Ceremony",
        description: "Sacred ceremony to honor and connect with our ancestors",
        date: "2024-01-15",
        time: "20:00",
        timezone: "EST",
        type: "in_person",
        location: "Sacred Grove",
        facilitator: "Elder Mosi",
        participants: [
          {
            id: "7",
            name: "Elder Mosi",
            role: "facilitator",
            avatar: "M",
            rsvpStatus: "attending"
          },
          {
            id: "8",
            name: "Mama Aisha",
            role: "participant",
            avatar: "A",
            rsvpStatus: "attending"
          }
        ],
        maxParticipants: 15,
        topics: ["Ancestral Connection", "Spiritual Healing", "Cultural Traditions"],
        circleHealth: 78,
        status: "completed"
      }
    ];
    setGatherings(mockGatherings);
  }, []);

  const getUpcomingGatherings = () => {
    return gatherings.filter(g => g.status === 'upcoming');
  };

  const getCompletedGatherings = () => {
    return gatherings.filter(g => g.status === 'completed');
  };

  const getParticipantCount = (gathering: CircleGathering) => {
    return gathering.participants.filter(p => p.rsvpStatus === 'attending').length;
  };

  const getCircleHealthColor = (health: number) => {
    if (health >= 80) return 'text-green-600';
    if (health >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCircleHealthLabel = (health: number) => {
    if (health >= 80) return 'Thriving';
    if (health >= 60) return 'Growing';
    return 'Needs Support';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-ubuntu font-bold text-gray-900 mb-2">Circle Gatherings</h2>
          <p className="text-gray-600 font-ubuntu">
            Sacred spaces for community connection and wisdom sharing
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className="text-2xl font-ubuntu font-bold text-heritage-gold">
              {getUpcomingGatherings().length}
            </p>
            <p className="text-sm text-gray-600 font-ubuntu">Upcoming</p>
          </div>
          <Button
            onClick={() => setShowCreateGathering(true)}
            className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu"
          >
            Create Gathering
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Active Circles</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">3</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Total Participants</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">24</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Avg Circle Health</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">85%</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-ubuntu">Wisdom Shared</p>
                <p className="text-2xl font-ubuntu font-bold text-heritage-gold">47</p>
              </div>
              <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Gatherings */}
      <div>
        <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-4">Upcoming Gatherings</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {getUpcomingGatherings().map((gathering) => (
            <Card
              key={gathering.id}
              className="bg-white/80 backdrop-blur-sm border-heritage-gold/20 cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedGathering(gathering)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-ubuntu font-bold text-gray-900 mb-2">
                      {gathering.title}
                    </CardTitle>
                    <CardDescription className="font-ubuntu mb-3">
                      {gathering.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(gathering.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{gathering.time} {gathering.timezone}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-heritage-gold/10 text-heritage-gold">
                    {gathering.type.replace('_', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 font-ubuntu">Facilitator:</span>
                      <span className="text-sm font-ubuntu font-semibold text-gray-900">{gathering.facilitator}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 font-ubuntu">Participants:</span>
                      <span className="text-sm font-ubuntu font-semibold text-heritage-gold">
                        {getParticipantCount(gathering)}/{gathering.maxParticipants}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 font-ubuntu">Circle Health</span>
                      <span className={`text-sm font-ubuntu font-semibold ${getCircleHealthColor(gathering.circleHealth)}`}>
                        {gathering.circleHealth}% - {getCircleHealthLabel(gathering.circleHealth)}
                      </span>
                    </div>
                    <Progress value={gathering.circleHealth} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {gathering.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-heritage-gold/30 text-heritage-gold">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle join gathering
                      }}
                    >
                      {gathering.type === 'virtual' ? 'Join Meeting' : 'RSVP'}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-heritage-gold/30 text-heritage-gold"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle view details
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Completed Gatherings */}
      <div>
        <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-4">Recent Completed Gatherings</h3>
        <div className="space-y-4">
          {getCompletedGatherings().map((gathering) => (
            <Card key={gathering.id} className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-ubuntu font-semibold text-gray-900">{gathering.title}</h4>
                      <p className="text-sm text-gray-600 font-ubuntu">
                        {new Date(gathering.date).toLocaleDateString()} • {gathering.facilitator}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-ubuntu font-semibold text-heritage-gold">
                        {getParticipantCount(gathering)} participants
                      </p>
                      <p className="text-xs text-gray-500">Circle Health: {gathering.circleHealth}%</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-heritage-gold/30 text-heritage-gold"
                    >
                      View Summary
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Circle Wisdom Insights */}
      <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
        <CardHeader>
          <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
            Circle Wisdom Insights
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
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Wisdom Shared</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">47</p>
              <p className="text-xs text-gray-600 font-ubuntu">Stories & insights</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Community Bonds</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">24</p>
              <p className="text-xs text-gray-600 font-ubuntu">Stronger connections</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Transformations</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">12</p>
              <p className="text-xs text-gray-600 font-ubuntu">Lives changed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 