"use client";

import { WisdomCard } from "@/components/ubuntu/WisdomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

// Mock data for wisdom paths
const wisdomPaths = [
  {
    id: "1",
    title: "Ancestral Wisdom Foundations",
    description: "Discover the timeless wisdom passed down through generations, connecting you with your heritage and cultural roots.",
    category: "ancestral-wisdom",
    difficulty: "beginner" as const,
    duration: 12,
    instructor: "Elder Ama Osei",
    imageUrl: "/images/paths/ancestral-wisdom.jpg",
    tags: ["heritage", "storytelling", "cultural-roots", "family-history"],
    progress: 65,
    isEnrolled: true
  },
  {
    id: "2",
    title: "Ubuntu Leadership Principles",
    description: "Learn to lead with compassion, community-centered values, and the understanding that we are all interconnected.",
    category: "ubuntu-leadership",
    difficulty: "intermediate" as const,
    duration: 8,
    instructor: "Dr. Kwame Nkrumah",
    imageUrl: "/images/paths/ubuntu-leadership.jpg",
    tags: ["leadership", "community", "compassion", "interconnectedness"],
    progress: 23,
    isEnrolled: true
  },
  {
    id: "3",
    title: "Healing Through Traditional Medicine",
    description: "Explore ancient healing practices and their modern applications for physical, emotional, and spiritual wellness.",
    category: "healing-medicine",
    difficulty: "intermediate" as const,
    duration: 10,
    instructor: "Mama Zara",
    imageUrl: "/images/paths/healing-medicine.jpg",
    tags: ["healing", "wellness", "traditional-medicine", "spirituality"],
    progress: undefined,
    isEnrolled: false
  },
  {
    id: "4",
    title: "Creative Expression & Storytelling",
    description: "Unlock your creative potential through traditional storytelling, music, dance, and visual arts.",
    category: "creative-expression",
    difficulty: "beginner" as const,
    duration: 6,
    instructor: "Artist Kofi Addo",
    imageUrl: "/images/paths/creative-expression.jpg",
    tags: ["creativity", "storytelling", "arts", "self-expression"],
    progress: undefined,
    isEnrolled: false
  },
  {
    id: "5",
    title: "Building Resilient Communities",
    description: "Learn the principles of community building, conflict resolution, and sustainable development.",
    category: "community-building",
    difficulty: "advanced" as const,
    duration: 15,
    instructor: "Community Elder Sarah",
    imageUrl: "/images/paths/community-building.jpg",
    tags: ["community", "resilience", "sustainability", "conflict-resolution"],
    progress: undefined,
    isEnrolled: false
  },
  {
    id: "6",
    title: "Spiritual Development & Mindfulness",
    description: "Deepen your spiritual connection through meditation, prayer, and mindfulness practices from African traditions.",
    category: "spiritual-development",
    difficulty: "beginner" as const,
    duration: 8,
    instructor: "Spiritual Guide Amina",
    imageUrl: "/images/paths/spiritual-development.jpg",
    tags: ["spirituality", "mindfulness", "meditation", "inner-peace"],
    progress: undefined,
    isEnrolled: false
  }
];

const categories = [
  { id: "all", name: "All Paths", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )},
  { id: "ancestral-wisdom", name: "Ancestral Wisdom", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
  { id: "ubuntu-leadership", name: "Ubuntu Leadership", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )},
  { id: "healing-medicine", name: "Healing & Medicine", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )},
  { id: "creative-expression", name: "Creative Expression", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
    </svg>
  )},
  { id: "community-building", name: "Community Building", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )},
  { id: "spiritual-development", name: "Spiritual Development", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )}
];

export default function WisdomPathsPage() {
  return (
    <AuthenticatedLayout>
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                Wisdom Paths
              </h1>
              <p className="text-xl md:text-2xl font-ubuntu text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Embark on transformative journeys that connect you with ancestral wisdom, cultural heritage, and spiritual growth through guided learning paths.
              </p>
            </div>
          </section>
          
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Input
                placeholder="Search wisdom paths..."
                className="pl-10 border-heritage-gold/30 focus:border-heritage-gold"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <select className="px-3 py-2 border border-heritage-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold">
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/5"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Path */}
        <div className="mb-12">
          <div className="heritage-gradient rounded-2xl p-8 text-white">
            <div className="max-w-2xl">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Featured Path
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Ancestral Wisdom Foundations
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Begin your journey with this foundational course that connects you with the timeless wisdom 
                of your ancestors and cultural heritage.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Elder Ama Osei</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>12 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Beginner</span>
                </div>
              </div>
              <Button className="bg-white text-heritage-gold hover:bg-gray-100">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Wisdom Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wisdomPaths.map((path) => (
            <WisdomCard
              key={path.id}
              title={path.title}
              description={path.description}
              category={path.category}
              difficulty={path.difficulty}
              duration={path.duration}
              instructor={path.instructor}
              imageUrl={path.imageUrl}
              tags={path.tags}
              progress={path.progress}
              isEnrolled={path.isEnrolled}
              onEnroll={() => console.log(`Enroll in ${path.title}`)}
              onContinue={() => console.log(`Continue ${path.title}`)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-heritage-gold/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Transformational Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who are discovering their Ubuntu path and creating 
              positive change in their communities through African wisdom traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="heritage-gradient px-8 py-3">
                Explore All Paths
              </Button>
              <Button size="lg" variant="outline" className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/5 px-8 py-3">
                Get Personalized Recommendations
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 