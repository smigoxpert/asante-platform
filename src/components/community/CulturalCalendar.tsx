"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CulturalCalendarEvent } from "@/types";

export function CulturalCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<CulturalCalendarEvent[]>([]);
  const [view, setView] = useState<'month' | 'week' | 'list'>('month');

  useEffect(() => {
    // Simulate loading cultural events
    const mockEvents: CulturalCalendarEvent[] = [
      {
        id: "1",
        title: "Kwanzaa Celebration",
        description: "Honoring African heritage and culture through the seven principles",
        date: "2024-12-26",
        type: "celebration",
        cultural_significance: "Celebration of African heritage and community values",
        user_relevance: "high",
        rsvp_required: true,
        rsvp_status: "attending"
      },
      {
        id: "2",
        title: "New Moon Ceremony",
        description: "Sacred gathering under the new moon for intention setting",
        date: "2024-01-11",
        type: "moon_phase",
        cultural_significance: "New beginnings and spiritual renewal",
        user_relevance: "high",
        rsvp_required: false
      },
      {
        id: "3",
        title: "Ancestor Honoring Ritual",
        description: "Traditional ceremony to honor and connect with ancestors",
        date: "2024-01-15",
        type: "ceremony",
        cultural_significance: "Deepening connection to ancestral wisdom",
        user_relevance: "medium",
        rsvp_required: true
      },
      {
        id: "4",
        title: "Ubuntu Circle Gathering",
        description: "Monthly community gathering to share wisdom and support",
        date: "2024-01-20",
        type: "ceremony",
        cultural_significance: "Community building and mutual support",
        user_relevance: "high",
        rsvp_required: true,
        rsvp_status: "attending"
      },
      {
        id: "5",
        title: "Spring Equinox Ceremony",
        description: "Celebrating the balance of light and dark, renewal and growth",
        date: "2024-03-20",
        type: "seasonal",
        cultural_significance: "Seasonal transition and spiritual alignment",
        user_relevance: "medium",
        rsvp_required: false
      }
    ];
    setEvents(mockEvents);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getLunarPhase = (date: Date) => {
    // Simplified lunar phase calculation
    const phases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return phases[dayOfYear % 8];
  };

  const renderCalendarGrid = () => {
    const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();
      
      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`h-24 border border-gray-200 p-2 cursor-pointer transition-all duration-200 ${
            isToday ? 'bg-heritage-gold/10 border-heritage-gold' : ''
          } ${
            isSelected ? 'ring-2 ring-heritage-gold' : ''
          } hover:bg-heritage-gold/5`}
        >
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium ${
              isToday ? 'text-heritage-gold font-bold' : 'text-gray-900'
            }`}>
              {day}
            </span>
            {dayEvents.length > 0 && (
              <Badge variant="secondary" className="text-xs bg-heritage-gold/20 text-heritage-gold">
                {dayEvents.length}
              </Badge>
            )}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className="text-xs p-1 rounded bg-heritage-gold/10 text-heritage-gold truncate"
                title={event.title}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return days;
  };

  const renderEventList = () => {
    const selectedDateEvents = getEventsForDate(selectedDate);
    
    return (
      <div className="space-y-4">
        {selectedDateEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="font-ubuntu">No events scheduled for this date</p>
            <p className="text-sm">This is a perfect time for personal reflection and intention setting</p>
          </div>
        ) : (
          selectedDateEvents.map((event) => (
            <Card key={event.id} className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="bg-heritage-gold/10 text-heritage-gold">
                        {event.type.replace('_', ' ')}
                      </Badge>
                      {event.rsvp_required && (
                        <Badge variant={event.rsvp_status === 'attending' ? 'default' : 'secondary'}>
                          {event.rsvp_status || 'RSVP Required'}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-ubuntu font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                    <p className="text-xs text-heritage-gold font-ubuntu">
                      Cultural Significance: {event.cultural_significance}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button size="sm" className="bg-heritage-gold hover:bg-heritage-bronze text-white">
                      {event.rsvp_required ? 'RSVP' : 'Learn More'}
                    </Button>
                    {event.rsvp_required && (
                      <Button size="sm" variant="outline" className="border-heritage-gold/30 text-heritage-gold">
                        Add to Calendar
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-ubuntu font-bold text-gray-900 mb-2">Sacred Calendar</h2>
          <p className="text-gray-600 font-ubuntu">
            Honoring African cultural traditions and personal transformation
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-heritage-gold/20">
            {['month', 'week', 'list'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v as any)}
                className={`px-3 py-1 rounded text-sm font-ubuntu ${
                  view === v
                    ? "bg-heritage-gold text-white"
                    : "text-gray-600 hover:text-heritage-gold"
                }`}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
          <Button
            onClick={() => {
              const newDate = new Date(currentDate);
              newDate.setMonth(newDate.getMonth() - 1);
              setCurrentDate(newDate);
            }}
            variant="outline"
            size="sm"
            className="border-heritage-gold/30 text-heritage-gold"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentDate(new Date())}
            size="sm"
            className="bg-heritage-gold hover:bg-heritage-bronze text-white"
          >
            Today
          </Button>
          <Button
            onClick={() => {
              const newDate = new Date(currentDate);
              newDate.setMonth(newDate.getMonth() + 1);
              setCurrentDate(newDate);
            }}
            variant="outline"
            size="sm"
            className="border-heritage-gold/30 text-heritage-gold"
          >
            Next
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Calendar */}
        <div className="lg:col-span-3">
          <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
            <CardHeader>
              <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                {formatDate(currentDate)}
              </CardTitle>
              <CardDescription className="font-ubuntu">
                Current Lunar Phase: {getLunarPhase(currentDate)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {view === 'month' && (
                <div className="grid grid-cols-7 gap-1">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="h-12 flex items-center justify-center font-ubuntu font-semibold text-gray-600 bg-heritage-gold/5 rounded-lg">
                      {day}
                    </div>
                  ))}
                  {renderCalendarGrid()}
                </div>
              )}
              {view === 'list' && renderEventList()}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected Date Info */}
          <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
            <CardHeader>
              <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Lunar Phase</h4>
                <p className="text-sm text-heritage-gold font-ubuntu">
                  {getLunarPhase(selectedDate)}
                </p>
              </div>
              <div>
                <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Cultural Significance</h4>
                <p className="text-sm text-gray-600">
                  This day holds special meaning in many African traditions for reflection and community connection.
                </p>
              </div>
              <Button className="w-full bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu">
                Add Personal Event
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
            <CardHeader>
              <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
                Upcoming Sacred Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {events.slice(0, 3).map((event) => (
                  <div key={event.id} className="p-3 bg-heritage-gold/5 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="secondary" className="text-xs bg-heritage-gold/20 text-heritage-gold">
                        {event.type.replace('_', ' ')}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-ubuntu font-semibold text-sm text-gray-900 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cultural Insights */}
          <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
            <CardHeader>
              <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
                Cultural Wisdom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 rounded-lg">
                <p className="text-sm text-gray-700 font-ubuntu italic">
                  "The calendar is not just a measure of time, but a sacred map of our connection to ancestors, community, and the rhythms of nature."
                </p>
                <p className="text-xs text-heritage-gold mt-2 font-ubuntu">
                  — Elder Wisdom
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 