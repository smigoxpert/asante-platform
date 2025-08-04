"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ImpactCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  score: number;
  target: number;
  color: string;
  recentActivities: ImpactActivity[];
}

interface ImpactActivity {
  id: string;
  title: string;
  description: string;
  date: string;
  impactScore: number;
  verified: boolean;
}

export function UbuntuImpact() {
  const [impactCategories, setImpactCategories] = useState<ImpactCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAddActivity, setShowAddActivity] = useState(false);

  useEffect(() => {
    // Simulate loading impact data
    const mockCategories: ImpactCategory[] = [
      {
        id: "family-healing",
        name: "Family Healing",
        description: "Improved relationships and family harmony",
        icon: "👨‍👩‍👧‍👦",
        score: 78,
        target: 100,
        color: "from-blue-500 to-blue-600",
        recentActivities: [
          {
            id: "1",
            title: "Family Reconciliation",
            description: "Helped resolve conflict between siblings using Ubuntu principles",
            date: "2024-01-15",
            impactScore: 25,
            verified: true
          },
          {
            id: "2",
            title: "Parent-Child Communication",
            description: "Improved communication patterns with children",
            date: "2024-01-10",
            impactScore: 15,
            verified: true
          }
        ]
      },
      {
        id: "community-leadership",
        name: "Community Leadership",
        description: "Ubuntu-based service and leadership",
        icon: "🌟",
        score: 65,
        target: 100,
        color: "from-purple-500 to-purple-600",
        recentActivities: [
          {
            id: "3",
            title: "Community Workshop",
            description: "Facilitated Ubuntu principles workshop for local community",
            date: "2024-01-12",
            impactScore: 30,
            verified: true
          }
        ]
      },
      {
        id: "cultural-preservation",
        name: "Cultural Preservation",
        description: "Sharing ancestral wisdom and traditions",
        icon: "🏛️",
        score: 92,
        target: 100,
        color: "from-amber-500 to-amber-600",
        recentActivities: [
          {
            id: "4",
            title: "Traditional Storytelling",
            description: "Shared ancestral stories with youth group",
            date: "2024-01-08",
            impactScore: 20,
            verified: true
          },
          {
            id: "5",
            title: "Cultural Workshop",
            description: "Taught traditional cooking methods to community",
            date: "2024-01-05",
            impactScore: 18,
            verified: true
          }
        ]
      },
      {
        id: "economic-empowerment",
        name: "Economic Empowerment",
        description: "Lifting others while rising",
        icon: "💰",
        score: 45,
        target: 100,
        color: "from-green-500 to-green-600",
        recentActivities: [
          {
            id: "6",
            title: "Mentorship Program",
            description: "Mentored young entrepreneur in business development",
            date: "2024-01-14",
            impactScore: 22,
            verified: false
          }
        ]
      },
      {
        id: "spiritual-growth",
        name: "Spiritual Growth",
        description: "Deeper connection to purpose and spirituality",
        icon: "🕊️",
        score: 88,
        target: 100,
        color: "from-indigo-500 to-indigo-600",
        recentActivities: [
          {
            id: "7",
            title: "Meditation Circle",
            description: "Led community meditation and reflection session",
            date: "2024-01-11",
            impactScore: 16,
            verified: true
          }
        ]
      },
      {
        id: "environmental-stewardship",
        name: "Environmental Stewardship",
        description: "Earth care practices and sustainability",
        icon: "🌱",
        score: 72,
        target: 100,
        color: "from-emerald-500 to-emerald-600",
        recentActivities: [
          {
            id: "8",
            title: "Community Garden",
            description: "Initiated sustainable community garden project",
            date: "2024-01-09",
            impactScore: 28,
            verified: true
          }
        ]
      },
      {
        id: "youth-mentorship",
        name: "Youth Mentorship",
        description: "Passing wisdom forward to next generation",
        icon: "👨‍🏫",
        score: 83,
        target: 100,
        color: "from-pink-500 to-pink-600",
        recentActivities: [
          {
            id: "9",
            title: "Youth Leadership",
            description: "Mentored high school students in leadership skills",
            date: "2024-01-13",
            impactScore: 24,
            verified: true
          }
        ]
      },
      {
        id: "global-african-unity",
        name: "Global African Unity",
        description: "Diaspora connection and global community",
        icon: "🌍",
        score: 56,
        target: 100,
        color: "from-red-500 to-red-600",
        recentActivities: [
          {
            id: "10",
            title: "Diaspora Connection",
            description: "Connected with African communities worldwide",
            date: "2024-01-07",
            impactScore: 19,
            verified: false
          }
        ]
      }
    ];
    setImpactCategories(mockCategories);
  }, []);

  const getTotalImpactScore = () => {
    return impactCategories.reduce((total, category) => total + category.score, 0);
  };

  const getAverageImpactScore = () => {
    return Math.round(getTotalImpactScore() / impactCategories.length);
  };

  const getSelectedCategory = () => {
    return impactCategories.find(cat => cat.id === selectedCategory);
  };

  const renderImpactTree = () => {
    return (
      <div className="relative">
        {/* Tree Trunk */}
        <div className="w-4 h-32 bg-gradient-to-t from-amber-800 to-amber-600 mx-auto rounded-full"></div>
        
        {/* Tree Branches */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="grid grid-cols-3 gap-8">
            {impactCategories.slice(0, 6).map((category, index) => (
              <div
                key={category.id}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                  selectedCategory === category.id ? 'ring-4 ring-heritage-gold' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
                title={category.name}
              >
                {category.icon}
              </div>
            ))}
          </div>
        </div>
        
        {/* Tree Roots */}
        <div className="flex justify-center space-x-4 mt-4">
          {impactCategories.slice(6).map((category) => (
            <div
              key={category.id}
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                selectedCategory === category.id ? 'ring-4 ring-heritage-gold' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
              title={category.name}
            >
              {category.icon}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-ubuntu font-bold text-gray-900 mb-2">Ubuntu Impact</h2>
          <p className="text-gray-600 font-ubuntu">
            Measuring how your transformation serves the community
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className="text-2xl font-ubuntu font-bold text-heritage-gold">
              {getAverageImpactScore()}%
            </p>
            <p className="text-sm text-gray-600 font-ubuntu">Overall Impact</p>
          </div>
          <Button
            onClick={() => setShowAddActivity(true)}
            className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu"
          >
            Add Impact Activity
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Impact Tree Visualization */}
        <div className="lg:col-span-1">
          <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
            <CardHeader>
              <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
                Ubuntu Impact Tree
              </CardTitle>
              <CardDescription className="font-ubuntu">
                Your growth branches out to serve the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderImpactTree()}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 font-ubuntu">
                  Click on any branch to see detailed impact
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Categories Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactCategories.map((category) => (
              <Card
                key={category.id}
                className={`bg-white/80 backdrop-blur-sm border-heritage-gold/20 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === category.id ? 'ring-2 ring-heritage-gold' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-lg`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-ubuntu font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-xs text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-ubuntu font-bold text-heritage-gold">
                        {category.score}%
                      </p>
                      <p className="text-xs text-gray-500">of target</p>
                    </div>
                  </div>
                  <Progress value={category.score} className="h-2" />
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-ubuntu">
                      {category.recentActivities.length} recent activities
                    </span>
                    <Badge variant="secondary" className="text-xs bg-heritage-gold/10 text-heritage-gold">
                      {category.recentActivities.filter(a => a.verified).length} verified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Category Details */}
      {selectedCategory && getSelectedCategory() && (
        <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getSelectedCategory()!.color} flex items-center justify-center text-white text-2xl`}>
                  {getSelectedCategory()!.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                    {getSelectedCategory()!.name}
                  </CardTitle>
                  <CardDescription className="font-ubuntu">
                    {getSelectedCategory()!.description}
                  </CardDescription>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-heritage-gold/30 text-heritage-gold"
                onClick={() => setSelectedCategory(null)}
              >
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Progress Overview */}
              <div>
                <h4 className="font-ubuntu font-semibold text-gray-900 mb-4">Progress Overview</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-ubuntu text-gray-600">Current Progress</span>
                      <span className="text-sm font-ubuntu font-semibold text-heritage-gold">
                        {getSelectedCategory()!.score}% / {getSelectedCategory()!.target}%
                      </span>
                    </div>
                    <Progress value={getSelectedCategory()!.score} className="h-3" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-heritage-gold/5 rounded-lg">
                      <p className="text-lg font-ubuntu font-bold text-heritage-gold">
                        {getSelectedCategory()!.recentActivities.length}
                      </p>
                      <p className="text-xs text-gray-600 font-ubuntu">Activities</p>
                    </div>
                    <div className="text-center p-3 bg-heritage-gold/5 rounded-lg">
                      <p className="text-lg font-ubuntu font-bold text-heritage-gold">
                        {getSelectedCategory()!.recentActivities.reduce((sum, activity) => sum + activity.impactScore, 0)}
                      </p>
                      <p className="text-xs text-gray-600 font-ubuntu">Impact Points</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div>
                <h4 className="font-ubuntu font-semibold text-gray-900 mb-4">Recent Activities</h4>
                <div className="space-y-3">
                  {getSelectedCategory()!.recentActivities.map((activity) => (
                    <div key={activity.id} className="p-3 bg-heritage-gold/5 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-ubuntu font-semibold text-sm text-gray-900">
                          {activity.title}
                        </h5>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs bg-heritage-gold/20 text-heritage-gold">
                            {activity.impactScore} pts
                          </Badge>
                          {activity.verified && (
                            <Badge variant="default" className="text-xs">
                              ✓ Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{activity.description}</p>
                      <p className="text-xs text-gray-500 font-ubuntu">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Community Impact Insights */}
      <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
        <CardHeader>
          <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
            Community Impact Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">People Impacted</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">247</p>
              <p className="text-xs text-gray-600 font-ubuntu">Through your actions</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Ripple Effect</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">12x</p>
              <p className="text-xs text-gray-600 font-ubuntu">Multiplier effect</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
              <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">Verified Impact</h3>
              <p className="text-2xl font-ubuntu font-bold text-heritage-gold">85%</p>
              <p className="text-xs text-gray-600 font-ubuntu">Community verified</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 