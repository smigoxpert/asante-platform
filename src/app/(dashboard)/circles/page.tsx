"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CulturalCalendar } from "@/components/community/CulturalCalendar";
import { UbuntuImpact } from "@/components/community/UbuntuImpact";
import { CircleGatherings } from "@/components/community/CircleGatherings";
import { ElderGuidance } from "@/components/community/ElderGuidance";
import { User } from "@/types";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

export default function UbuntuCirclesPage() {
  const [user] = useState<User>({
    id: "1",
    email: "user@example.com",
    full_name: "Amani Johnson",
    subscription_tier: "ubuntu_connector",
    ubuntu_values_score: 85,
    created_at: "2024-01-01",
    updated_at: "2024-01-01"
  });
  const [activeTab, setActiveTab] = useState<'calendar' | 'impact' | 'gatherings' | 'elders'>('impact');

  const tabs = [
    
    {
      id: 'impact',
      label: 'Ubuntu Impact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'gatherings',
      label: 'Circle Gatherings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'elders',
      label: 'Elder Guidance',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'calendar',
      label: 'Sacred Calendar',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];



  return (
    <AuthenticatedLayout>
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-5xl md:text-7xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                Ubuntu Circles
              </h1>
              <p className="text-xl md:text-2xl font-ubuntu text-gray-700 max-w-3xl leading-relaxed">
                Connect, grow, and serve through sacred community
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-heritage-gold/10 text-heritage-gold border-heritage-gold/20">
                {user?.ubuntu_values_score || 0} Ubuntu Score
              </Badge>
              <Button className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu">
                Join New Circle
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                    <p className="text-sm text-gray-600 font-ubuntu">Community Impact</p>
                    <p className="text-2xl font-ubuntu font-bold text-heritage-gold">247</p>
                  </div>
                  <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-ubuntu">Upcoming Events</p>
                    <p className="text-2xl font-ubuntu font-bold text-heritage-gold">12</p>
                  </div>
                  <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-ubuntu">Elder Sessions</p>
                    <p className="text-2xl font-ubuntu font-bold text-heritage-gold">5</p>
                  </div>
                  <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-heritage-gold/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-ubuntu font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-heritage-gold text-white shadow-sm"
                    : "text-gray-600 hover:text-heritage-gold hover:bg-heritage-gold/5"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'impact' && <UbuntuImpact />}
          {activeTab === 'gatherings' && <CircleGatherings />}
          {activeTab === 'elders' && <ElderGuidance />}
          {activeTab === 'calendar' && <CulturalCalendar />}
        </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 