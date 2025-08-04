"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

interface WisdomPath {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  totalRatings: number;
  duration: string;
  category: string;
  culturalRegion: string;
  difficulty: string;
  enrollmentCount: number;
  price: string;
  features: string[];
}

interface Testimonial {
  id: string;
  content: string;
  author: string;
  title: string;
  avatar: string;
  rating: number;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function CoursesPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const wisdomPaths: WisdomPath[] = [
    {
      id: "1",
      title: "Ancestral Wisdom Foundations",
      description: "Discover the power of storytelling and oral traditions passed down through generations",
      image: "/images/paths/ancestral-wisdom.jpg",
      rating: 4.8,
      totalRatings: 1247,
      duration: "32.5 hours",
      category: "Cultural Heritage",
      culturalRegion: "Pan-African",
      difficulty: "Beginner",
      enrollmentCount: 15420,
      price: "Free",
      features: ["Storytelling Mastery", "Oral History", "Cultural Preservation", "Community Building"]
    },
    {
      id: "2",
      title: "Ubuntu Leadership",
      description: "Master community-centered leadership principles that serve the collective good",
      image: "/images/paths/ubuntu-leadership.jpg",
      rating: 4.9,
      totalRatings: 892,
      duration: "28.3 hours",
      category: "Leadership",
      culturalRegion: "Southern Africa",
      difficulty: "Intermediate",
      enrollmentCount: 8930,
      price: "$49",
      features: ["Community Leadership", "Conflict Resolution", "Collective Decision Making", "Service Leadership"]
    },
    {
      id: "3",
      title: "Sacred Relationships",
      description: "Build meaningful connections through Ubuntu principles and ancestral wisdom",
      image: "/images/paths/sacred-relationships.jpg",
      rating: 4.7,
      totalRatings: 1567,
      duration: "24.1 hours",
      category: "Relationships",
      culturalRegion: "West Africa",
      difficulty: "Beginner",
      enrollmentCount: 12340,
      price: "$39",
      features: ["Family Harmony", "Community Bonds", "Intergenerational Connection", "Spiritual Relationships"]
    },
    {
      id: "4",
      title: "Traditional Healing & Medicine",
      description: "Learn ancient African healing practices and holistic wellness approaches",
      image: "/images/paths/healing-medicine.jpg",
      rating: 4.6,
      totalRatings: 2341,
      duration: "45.2 hours",
      category: "Wellness",
      culturalRegion: "East Africa",
      difficulty: "Advanced",
      enrollmentCount: 6780,
      price: "$79",
      features: ["Herbal Medicine", "Energy Healing", "Spiritual Wellness", "Community Health"]
    },
    {
      id: "5",
      title: "Creative Expression & Arts",
      description: "Express your soul through traditional African arts, music, and creative practices",
      image: "/images/paths/creative-expression.jpg",
      rating: 4.8,
      totalRatings: 987,
      duration: "38.7 hours",
      category: "Arts & Culture",
      culturalRegion: "Central Africa",
      difficulty: "Intermediate",
      enrollmentCount: 5670,
      price: "$59",
      features: ["Traditional Arts", "Music & Rhythm", "Dance & Movement", "Creative Storytelling"]
    },
    {
      id: "6",
      title: "Spiritual Awakening",
      description: "Deepen your spiritual connection through traditional African spirituality",
      image: "/images/paths/spiritual-development.jpg",
      rating: 4.9,
      totalRatings: 1456,
      duration: "52.4 hours",
      category: "Spirituality",
      culturalRegion: "North Africa",
      difficulty: "Advanced",
      enrollmentCount: 4320,
      price: "$89",
      features: ["Ancestral Connection", "Meditation Practices", "Ritual & Ceremony", "Spiritual Growth"]
    },
    {
      id: "7",
      title: "Community Building",
      description: "Learn to create and sustain vibrant, supportive communities",
      image: "/images/paths/community-building.jpg",
      rating: 4.7,
      totalRatings: 1123,
      duration: "29.8 hours",
      category: "Community",
      culturalRegion: "Pan-African",
      difficulty: "Intermediate",
      enrollmentCount: 7890,
      price: "$49",
      features: ["Community Organization", "Event Planning", "Conflict Resolution", "Sustainable Development"]
    },
    {
      id: "8",
      title: "Economic Empowerment",
      description: "Build wealth and financial independence through community-based economics",
      image: "/images/paths/economic-empowerment.jpg",
      rating: 4.6,
      totalRatings: 2341,
      duration: "41.3 hours",
      category: "Economics",
      culturalRegion: "West Africa",
      difficulty: "Intermediate",
      enrollmentCount: 6540,
      price: "$69",
      features: ["Cooperative Economics", "Entrepreneurship", "Wealth Building", "Community Investment"]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      content: "Asante has truly transformed my understanding of my heritage and given me the tools to build stronger community connections. The Ubuntu Leadership course changed how I approach every relationship.",
      author: "Amani Johnson",
      title: "Community Organizer, Detroit",
      avatar: "/images/testimonials/amani.jpg",
      rating: 5
    },
    {
      id: "2",
      content: "Through the Ancestral Wisdom course, I discovered stories from my grandmother that I never knew existed. Now I'm passing these traditions to my children and our community.",
      author: "Maya Osei",
      title: "Educator & Storyteller, Atlanta",
      avatar: "/images/testimonials/maya.jpg",
      rating: 5
    },
    {
      id: "3",
      content: "The Traditional Healing course helped me reconnect with my roots and find holistic wellness practices that work for my family. It's more than education—it's transformation.",
      author: "Kwame Williams",
      title: "Wellness Coach, Chicago",
      avatar: "/images/testimonials/kwame.jpg",
      rating: 5
    }
  ];

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "Who are Asante Wisdom Paths for?",
      answer: "Asante Wisdom Paths are designed for anyone seeking to connect with African heritage, build stronger communities, and develop leadership skills rooted in Ubuntu principles. Whether you're exploring your ancestry, looking to serve your community, or seeking personal transformation, our courses provide the guidance and tools you need."
    },
    {
      id: "2",
      question: "Is any prior knowledge of African culture required?",
      answer: "No prior knowledge is required. Our courses are designed to be accessible to learners of all backgrounds and experience levels. We welcome everyone who is curious about African wisdom and committed to personal and community growth."
    },
    {
      id: "3",
      question: "How are the Wisdom Paths structured?",
      answer: "Each Wisdom Path combines traditional African knowledge with modern applications. Courses include video lessons, interactive exercises, community discussions, and practical projects. You'll learn from elders, cultural practitioners, and community leaders who bring authentic wisdom and real-world experience."
    },
    {
      id: "4",
      question: "Can I connect with other learners and build community?",
      answer: "Absolutely! Community is at the heart of Asante. Each course includes access to discussion forums, virtual circle gatherings, and opportunities to connect with fellow learners. You'll also have access to our global network of Ubuntu practitioners and cultural leaders."
    },
    {
      id: "5",
      question: "Are there opportunities for in-person learning and ceremonies?",
      answer: "Yes! We offer both virtual and in-person learning experiences. Many courses include optional in-person gatherings, ceremonies, and community events. We also partner with local cultural organizations to provide authentic, immersive learning experiences."
    },
    {
      id: "6",
      question: "How do I know which Wisdom Path is right for me?",
      answer: "Start with our Heritage Discovery assessment to understand your interests and goals. You can also explore our free introductory courses to get a feel for different paths. Our community advisors are available to help you choose the right journey for your personal and spiritual growth."
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm font-semibold text-gray-700 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <AuthenticatedLayout>
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-ubuntu font-bold text-gray-900 mb-6">
                Ready to discover your ancestral wisdom?
              </h1>
              <p className="text-xl text-gray-600 font-ubuntu mb-8">
                Join Asante Wisdom Paths and gain the cultural knowledge, spiritual practices, and community skills that connect you to your heritage and transform your life.
              </p>
            </div>
          </section>

          {/* Wisdom Paths Grid */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">Featured Wisdom Courses</h2>
              <p className="text-lg text-gray-600 font-ubuntu">
                Choose your journey of transformation and cultural connection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wisdomPaths.map((path) => (
                <Card key={path.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-heritage-gold/20 to-heritage-bronze/20 rounded-t-lg flex items-center justify-center">
                      <div className="text-4xl">{path.image.includes('ancestral') ? '🏛️' : 
                        path.image.includes('ubuntu') ? '👑' :
                        path.image.includes('relationships') ? '💝' :
                        path.image.includes('healing') ? '🌿' :
                        path.image.includes('creative') ? '🎨' :
                        path.image.includes('spiritual') ? '⭐' :
                        path.image.includes('community') ? '👥' : '💰'}</div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-heritage-gold/90 text-white">
                      {path.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-ubuntu font-bold text-gray-900 group-hover:text-heritage-gold transition-colors">
                      {path.title}
                    </CardTitle>
                    <CardDescription className="font-ubuntu text-gray-600 text-sm">
                      {path.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {renderStars(path.rating)}
                        <span className="text-sm text-gray-500">({path.totalRatings.toLocaleString()})</span>
                      </div>
                      <Badge variant="outline" className="border-heritage-gold/30 text-heritage-gold">
                        {path.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{path.duration}</span>
                      <span>{path.enrollmentCount.toLocaleString()} enrolled</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {path.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-heritage-gold/10 text-heritage-gold">
                          {feature}
                        </Badge>
                      ))}
                      {path.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          +{path.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-ubuntu font-bold text-heritage-gold">
                        {path.price}
                      </span>
                      <Button className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu">
                        Start Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                size="lg"
                variant="outline"
                className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu px-8"
              >
                View All Wisdom Paths
              </Button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-gradient-to-br from-heritage-gold/5 to-heritage-bronze/5 py-16 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">
                What our community is saying
              </h2>
              <p className="text-lg text-gray-600 font-ubuntu">
                Real stories from learners who have transformed their lives through Asante
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center text-white font-ubuntu font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-ubuntu font-semibold text-gray-900">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-gray-600 font-ubuntu">
                          {testimonial.title}
                        </p>
                        <div className="flex items-center mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="w-8 h-8 text-heritage-gold/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      <p className="text-gray-700 font-ubuntu italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600 font-ubuntu">
                Everything you need to know about your Asante journey
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.id} className="bg-white border-heritage-gold/20">
                  <CardHeader 
                    className="cursor-pointer hover:bg-heritage-gold/5 transition-colors"
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-ubuntu font-semibold text-gray-900">
                        {faq.question}
                      </CardTitle>
                      <svg
                        className={`w-6 h-6 text-heritage-gold transition-transform ${
                          expandedFAQ === faq.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardHeader>
                  {expandedFAQ === faq.id && (
                    <CardContent className="pt-0">
                      <p className="text-gray-700 font-ubuntu leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-br from-heritage-gold/10 to-heritage-bronze/10 py-16 rounded-2xl">
            <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">
              Begin your transformation today
            </h2>
            <p className="text-lg text-gray-600 font-ubuntu mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are discovering their heritage, building stronger communities, and creating meaningful change through Ubuntu principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu px-8 py-3"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu px-8 py-3"
              >
                Explore Free Courses
              </Button>
            </div>
          </section>
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 