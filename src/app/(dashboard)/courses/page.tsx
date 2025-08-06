"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";
import {
  FaSearch,
  FaFilter,
  FaStar,
  FaClock,
  FaUsers,
  FaGraduationCap,
  FaGlobe,
  FaCrown,
  FaHeart,
  FaLeaf,
  FaPrayingHands,
  FaPalette,
  FaShieldAlt,
  FaBalanceScale,
  FaSeedling,
  FaMountain,
  FaWater,
  FaFire,
  FaWind,
  FaTree,
  FaSun,
  FaMoon,
  FaCompass,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { courseTemplates } from "@/lib/course-templates";

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
  const router = useRouter();
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const courses = courseTemplates;
  const coursesPerPage = 4; // Show 4 courses per page
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const currentCourses = filteredCourses.slice(
    currentPage * coursesPerPage,
    (currentPage + 1) * coursesPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(filteredCourses.length / coursesPerPage));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(filteredCourses.length / coursesPerPage)) % Math.ceil(filteredCourses.length / coursesPerPage));
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm, selectedCategory]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cultural Heritage": return <FaGraduationCap className="w-5 h-5" />;
      case "Leadership": return <FaCrown className="w-5 h-5" />;
      case "Relationships": return <FaHeart className="w-5 h-5" />;
      case "Wellness": return <FaLeaf className="w-5 h-5" />;
      case "Arts & Culture": return <FaPalette className="w-5 h-5" />;
      case "Spirituality": return <FaPrayingHands className="w-5 h-5" />;
      default: return <FaGlobe className="w-5 h-5" />;
    }
  };

  const categories = ["all", ...Array.from(new Set(courses.map(course => course.category)))];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      content: "Asante has truly transformed my understanding of my heritage and given me the tools to build stronger community connections. The Ubuntu Leadership course changed how I approach every relationship.",
      author: "Amani Johnson",
      title: "Community Organizer, Detroit",
      avatar: "A",
      rating: 5
    },
    {
      id: "2",
      content: "Through the Ancestral Wisdom course, I discovered stories from my grandmother that I never knew existed. Now I'm passing these traditions to my children and our community.",
      author: "Maya Osei",
      title: "Educator & Storyteller, Atlanta",
      avatar: "M",
      rating: 5
    },
    {
      id: "3",
      content: "The Traditional Healing course helped me reconnect with my roots and find holistic wellness practices that work for my family. It's more than education—it's transformation.",
      author: "Kwame Williams",
      title: "Wellness Coach, Chicago",
      avatar: "K",
      rating: 5
    }
  ];

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "Who are Asante Wisdom Paths for?",
      answer: "Asante Wisdom Paths are designed for anyone seeking to connect with African heritage, wisdom traditions, and community building. Whether you're just beginning your journey or are already deeply involved in cultural practices, our courses offer valuable insights and practical skills."
    },
    {
      id: "2",
      question: "Is any prior knowledge of African culture required?",
      answer: "No prior knowledge is required! Our courses are designed to be accessible to beginners while also providing depth for those with existing knowledge. We welcome learners from all backgrounds and experience levels."
    },
    {
      id: "3",
      question: "How are the Wisdom Paths structured?",
      answer: "Each Wisdom Path is structured as a comprehensive journey with multiple modules and lessons. You'll find a mix of video content, interactive exercises, community discussions, and practical applications designed to help you integrate the wisdom into your daily life."
    },
    {
      id: "4",
      question: "Can I connect with other learners and build community?",
      answer: "Absolutely! Community is at the heart of our platform. You can join discussion forums, participate in live community circles, connect with mentors, and build meaningful relationships with fellow learners who share your interests and goals."
    },
    {
      id: "5",
      question: "Are there opportunities for in-person learning and ceremonies?",
      answer: "Yes! We regularly host in-person events, ceremonies, and community gatherings. These include traditional ceremonies, cultural celebrations, community service projects, and special events that bring our online community together in meaningful ways."
    },
    {
      id: "6",
      question: "How do I know which Wisdom Path is right for me?",
      answer: "Start by exploring the course descriptions and taking our guided assessment. You can also try our free introductory lessons to get a feel for different paths. Many learners find themselves drawn to multiple paths and choose to explore them at their own pace."
    }
  ];

  return (
    <AuthenticatedLayout>
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                Ready to discover your ancestral wisdom?
              </h1>
              <p className="text-xl md:text-2xl font-ubuntu text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                Join Asante Wisdom Paths and gain the cultural knowledge, spiritual practices, and community skills that connect you to your heritage and transform your life.
              </p>
            </div>
          </section>

          {/* Featured Wisdom Courses */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">Featured Wisdom Courses</h2>
              <p className="text-lg text-gray-600 font-ubuntu">Choose your journey of transformation and cultural connection</p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="font-ubuntu"
                  >
                    {category === "all" ? "All" : category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Courses Carousel */}
            <div className="relative">
              {/* Navigation Buttons */}
              {filteredCourses.length > coursesPerPage && (
                <>
                  <Button
                    onClick={goToPreviousPage}
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 bg-white shadow-lg hover:bg-gray-50"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={goToNextPage}
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 bg-white shadow-lg hover:bg-gray-50"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCourses.map((course) => (
                  <Card key={course.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => router.push(`/courses/${course.id}`)}>
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-heritage-gold/20 to-heritage-bronze/20 rounded-t-lg flex items-center justify-center">
                        <div className="text-4xl">
                          {getCategoryIcon(course.category)}
                        </div>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-heritage-gold/90 text-white">
                        {course.category}
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-ubuntu font-bold text-gray-900 group-hover:text-heritage-gold transition-colors">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="font-ubuntu text-gray-600 text-sm">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {renderStars(course.rating)}
                          <span className="text-sm text-gray-500">({course.totalRatings.toLocaleString()})</span>
                        </div>
                        <Badge variant="outline" className="border-heritage-gold/30 text-heritage-gold">
                          {course.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{course.duration}</span>
                        <span>{course.enrollmentCount.toLocaleString()} enrolled</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {course.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-heritage-gold/10 text-heritage-gold">
                            {feature}
                          </Badge>
                        ))}
                        {course.features.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                            +{course.features.length - 2} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-ubuntu font-bold text-heritage-gold">
                          {course.price}
                        </span>
                        <Button className="bg-heritage-gold hover:bg-heritage-bronze text-white font-ubuntu">
                          Start Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Carousel Indicators */}
              {filteredCourses.length > coursesPerPage && (
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentPage ? 'bg-heritage-gold' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Show All Courses Button */}
              <div className="text-center mt-8">
                <Button 
                  onClick={() => router.push('/wisdom-paths')} 
                  variant="outline" 
                  className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu px-8"
                >
                  View All Wisdom Paths
                </Button>
              </div>
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