"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useStorage, useAnalytics } from "@/hooks/useStorage";
import { storage } from "@/lib/storage";
import { 
  Play, 
  Download, 
  Users, 
  Star, 
  Heart, 
  Globe, 
  BookOpen, 
  Shield,
  Crown,
  Sparkles,
  Calendar,
  Video,
  MessageCircle,
  Award,
  Zap
} from 'lucide-react';

// Mock data for the landing page
const testimonials = [
  {
    id: 1,
    name: "Amina Osei",
    location: "Ghana",
    story: "Through Asante, I discovered my ancestral roots and found my purpose in community leadership.",
    avatar: "/avatars/amina.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Kwame Johnson",
    location: "United States",
    story: "The Ubuntu circles helped me heal generational trauma and build meaningful relationships.",
    avatar: "/avatars/kwame.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Zara Mbeki",
    location: "South Africa",
    story: "I reconnected with my heritage and now teach others about our cultural traditions.",
    avatar: "/avatars/zara.jpg",
    rating: 5
  }
];

const wisdomPaths = [
  {
    id: 1,
    title: "Ubuntu Leadership",
    description: "Lead with heart and community spirit",
    icon: Crown,
    category: "ubuntu_leadership",
    duration: "8 weeks",
    difficulty: 3
  },
  {
    id: 2,
    title: "Ancestral Healing",
    description: "Heal through traditional wisdom and modern understanding",
    icon: Heart,
    category: "ancestral_healing",
    duration: "12 weeks",
    difficulty: 4
  },
  {
    id: 3,
    title: "Sacred Relationships",
    description: "Build connections that honor Ubuntu principles",
    icon: Users,
    category: "sacred_relationships",
    duration: "6 weeks",
    difficulty: 2
  },
  {
    id: 4,
    title: "Purposeful Abundance",
    description: "Create prosperity while lifting your community",
    icon: Sparkles,
    category: "purposeful_abundance",
    duration: "10 weeks",
    difficulty: 3
  },
  {
    id: 5,
    title: "Spiritual Awakening",
    description: "Connect with ancestral spirituality and personal purpose",
    icon: BookOpen,
    category: "spiritual_awakening",
    duration: "14 weeks",
    difficulty: 5
  },
  {
    id: 6,
    title: "Cultural Renaissance",
    description: "Reclaim and celebrate your African identity",
    icon: Globe,
    category: "cultural_renaissance",
    duration: "16 weeks",
    difficulty: 4
  }
];

const subscriptionTiers = [
  {
    tier: "seeker",
    name: "Seeker",
    price: 29,
    features: [
      "Basic heritage discovery",
      "Community access",
      "5 wisdom lessons",
      "Mobile app access",
      "Email support"
    ],
    popular: false
  },
  {
    tier: "ubuntu_connector",
    name: "Ubuntu Connector",
    price: 69,
    features: [
      "Full learning paths",
      "Bi-weekly Ubuntu circles",
      "Elder wisdom sessions",
      "Advanced heritage tools",
      "Priority support"
    ],
    popular: true
  },
  {
    tier: "heritage_guardian",
    name: "Heritage Guardian",
    price: 129,
    features: [
      "Elder guidance",
      "Advanced heritage tools",
      "DNA integration",
      "Family tree building",
      "Cultural mentorship"
    ],
    popular: false
  },
  {
    tier: "wisdom_keeper",
    name: "Wisdom Keeper",
    price: 229,
    features: [
      "Master level access",
      "Teaching opportunities",
      "Elder certification",
      "Community leadership",
      "Lifetime access"
    ],
    popular: false
  }
];

const elders = [
  {
    id: 1,
    name: "Elder Ama Osei",
    background: "Ghanaian Traditional Healer",
    expertise: "Ancestral Healing & Community Leadership",
    quote: "The wisdom of our ancestors flows through us like a river. We must honor it and share it with the next generation.",
    image: "/elders/elder-ama.jpg"
  },
  {
    id: 2,
    name: "Elder Kwame Nkrumah",
    background: "Nigerian Cultural Scholar",
    expertise: "Ubuntu Philosophy & African History",
    quote: "Ubuntu is not just a philosophy, it's a way of being that connects us all to our shared humanity.",
    image: "/elders/elder-kwame.jpg"
  },
  {
    id: 3,
    name: "Elder Zara Mbeki",
    background: "South African Community Leader",
    expertise: "Cultural Renaissance & Youth Empowerment",
    quote: "Our cultural heritage is our greatest strength. Let us reclaim it with pride and purpose.",
    image: "/elders/elder-zara.jpg"
  }
];

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    users: 0,
    connections: 0,
    circles: 0
  });

  // Storage hooks for performance optimization
  const { value: cachedStats, setValue: setCachedStats } = useStorage({
    key: 'landing_stats',
    defaultValue: { users: 0, connections: 0, circles: 0 },
    ttl: 5 * 60 * 1000, // 5 minutes cache
  });

  const { value: cachedTestimonial, setValue: setCachedTestimonial } = useStorage({
    key: 'landing_testimonial',
    defaultValue: 0,
    type: 'session',
  });

  const { addEvent } = useAnalytics();

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Animate stats on mount with caching
  useEffect(() => {
    const targetStats = {
      users: 50000,
      connections: 10000,
      circles: 500
    };

    // Use cached stats if available and not expired
    if (cachedStats && cachedStats.users > 0) {
      setStats(cachedStats);
      return;
    }

    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        const newStats = {
          users: Math.floor(targetStats.users * progress),
          connections: Math.floor(targetStats.connections * progress),
          circles: Math.floor(targetStats.circles * progress)
        };
        
        setStats(newStats);

        if (currentStep >= steps) {
          clearInterval(timer);
          // Cache the final stats
          setCachedStats(targetStats);
        }
      }, increment);

      return () => clearInterval(timer);
    };

    animateStats();
  }, [cachedStats, setCachedStats]);

  // Auto-rotate testimonials with caching
  useEffect(() => {
    // Use cached testimonial index if available
    if (cachedTestimonial !== null) {
      setCurrentTestimonial(cachedTestimonial);
    }

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = (prev + 1) % testimonials.length;
        setCachedTestimonial(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [cachedTestimonial, setCachedTestimonial]);

  // Track page view analytics
  useEffect(() => {
    addEvent({
      type: 'page_view',
      page: 'landing',
      timestamp: Date.now(),
    });
  }, [addEvent]);

  return (
    <div className="min-h-screen">




      {/* Trust Indicators Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden glassmorphism-bg-dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-particle w-2 h-2" style={{ left: '10%', top: '15%', animationDelay: '0s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '20%', top: '35%', animationDelay: '1s' }}></div>
          <div className="floating-particle w-3 h-3" style={{ left: '30%', top: '55%', animationDelay: '2s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '40%', top: '25%', animationDelay: '0.5s' }}></div>
          <div className="floating-particle w-2 h-2" style={{ left: '50%', top: '65%', animationDelay: '1.5s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '60%', top: '15%', animationDelay: '2.5s' }}></div>
          <div className="floating-particle w-3 h-3" style={{ left: '70%', top: '45%', animationDelay: '0.8s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '80%', top: '75%', animationDelay: '1.8s' }}></div>
          <div className="floating-particle w-2 h-2" style={{ left: '90%', top: '35%', animationDelay: '2.2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Join <span className="gradient-text-gold animate-pulse">{stats.users.toLocaleString()}+</span> Ubuntu Seekers Worldwide
            </motion.h2>
            
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Discover your roots, connect with your heritage, and understand your place in the global African family
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="glass-button text-white px-10 py-4 text-lg hover-lift">
                <Link href="/signup">Begin Heritage Discovery</Link>
              </Button>
              <Button size="lg" className="glass-button text-white px-10 py-4 text-lg hover-lift">
                <Download className="mr-2" />
                Download Mobile App
              </Button>
            </motion.div>
            
            {/* Stats Grid with Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="text-center glass-card p-6 parallax-element"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text-gold mb-2">{stats.connections.toLocaleString()}</div>
                <div className="text-white/70">Heritage Connections Made</div>
              </motion.div>
              <motion.div 
                className="text-center glass-card p-6 parallax-element"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold gradient-text-gold mb-2">{stats.circles}</div>
                <div className="text-white/70">Ubuntu Circles Active</div>
              </motion.div>
              <motion.div 
                className="text-center glass-card p-6 parallax-element"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold gradient-text-gold mb-2">50+</div>
                <div className="text-white/70">Cultural Elders</div>
              </motion.div>
            </div>

            {/* Enhanced Testimonials with Glassmorphism */}
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card-dark p-8 hover-lift"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-heritage-gold to-yellow-300 rounded-full flex items-center justify-center text-black font-bold mr-6 text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-heritage-gold/80">{testimonials[currentTestimonial].location}</div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-heritage-gold fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-white/90 italic text-lg leading-relaxed">"{testimonials[currentTestimonial].story}"</p>
              </motion.div>
              
              {/* Enhanced Testimonial Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-heritage-gold scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Discovery Preview */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden glassmorphism-bg bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-particle w-2 h-2" style={{ left: '15%', top: '20%', animationDelay: '0.5s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '25%', top: '40%', animationDelay: '1.5s' }}></div>
          <div className="floating-particle w-3 h-3" style={{ left: '35%', top: '60%', animationDelay: '0.8s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '45%', top: '30%', animationDelay: '2.2s' }}></div>
          <div className="floating-particle w-2 h-2" style={{ left: '55%', top: '70%', animationDelay: '1.2s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '65%', top: '20%', animationDelay: '0.3s' }}></div>
          <div className="floating-particle w-3 h-3" style={{ left: '75%', top: '50%', animationDelay: '1.8s' }}></div>
          <div className="floating-particle w-1 h-1" style={{ left: '85%', top: '80%', animationDelay: '2.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-gold">
              Uncover Your <span className="gradient-text animate-pulse">Ancestral Wisdom</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover your roots, connect with your heritage, and understand your place in the global African family through cutting-edge DNA analysis and cultural mapping
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card p-8 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-xl flex items-center justify-center mr-4 text-xl">
                    🗺️
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Interactive Heritage Map</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-heritage-gold rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">✨ Explore African regions and cultural connections</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-heritage-bronze rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">✨ Discover your ancestral homelands</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-heritage-copper rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">✨ Connect with cultural practices and traditions</span>
                  </div>
                </div>
                
                {/* Simple interactive map visualization */}
                <div className="mt-8 text-center">
                  <svg width="200" height="120" viewBox="0 0 200 120" className="opacity-80 mx-auto">
                    <path className="map-region" d="M20,30 L60,20 L100,35 L80,60 L40,65 Z" data-region="West Africa"></path>
                    <path className="map-region" d="M100,35 L140,25 L170,40 L160,70 L120,75 L100,60 Z" data-region="Central Africa"></path>
                    <path className="map-region" d="M120,75 L160,70 L180,90 L170,110 L130,105 Z" data-region="East Africa"></path>
                    <circle cx="90" cy="50" r="3" fill="#d4af37" className="animate-pulse"></circle>
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-card p-8 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-xl flex items-center justify-center mr-4 text-xl">
                    🧬
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">DNA Integration Preview</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-heritage-gold to-yellow-400 p-6 rounded-2xl text-white shadow-lg">
                    <div className="text-sm mb-4 font-semibold uppercase tracking-wide">Sample Ethnicity Breakdown</div>
                    <div className="space-y-4">
                      <div className="chart-item">
                        <span className="region-name">West African</span>
                        <span className="percentage">45%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '45%' }}></div>
                      </div>
                      
                      <div className="chart-item">
                        <span className="region-name">Central African</span>
                        <span className="percentage">30%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '30%' }}></div>
                      </div>
                      
                      <div className="chart-item">
                        <span className="region-name">East African</span>
                        <span className="percentage">15%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '15%' }}></div>
                      </div>
                      
                      <div className="chart-item">
                        <span className="region-name">Other</span>
                        <span className="percentage">10%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="glass-button text-black font-bold px-10 py-4 text-lg hover-lift"
            >
              Start Your Heritage Journey
            </Button>
          </motion.div>
        </div>
      </section>
      
        {/* Learning Paths Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-bg bg-gradient-to-br from-ubuntu-50 to-ubuntu-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text-gold">
              Transform Through <span className="gradient-text">Ancient Wisdom</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six transformative paths guided by African wisdom traditions and Ubuntu philosophy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wisdomPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card hover-lift border-ubuntu-200/30">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-ubuntu-400 to-ubuntu-600 rounded-full flex items-center justify-center mb-4">
                      <path.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-ubuntu-600 gradient-text-gold">{path.title}</CardTitle>
                    <CardDescription className="text-gray-600">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>{path.duration}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < path.difficulty ? 'bg-ubuntu-400' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <Button className="glass-button w-full text-ubuntu-600 hover:text-white">
                      Explore Path
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ubuntu Community Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-bg bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text-gold">
              Experience Ubuntu: <span className="gradient-text">I Am Because We Are</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a global community of seekers, learners, and wisdom keepers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="glass-card hover-lift border-heritage-gold/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-heritage-gold gradient-text-gold">Video Testimonials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hear from Ubuntu Circle members about their transformative journeys and community connections.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card hover-lift border-heritage-gold/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-heritage-gold gradient-text-gold">Live Community Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    See real-time heritage discoveries and transformations happening in our global community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass-card hover-lift border-heritage-gold/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-heritage-gold gradient-text-gold">Impact Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Discover how our community is creating positive change through Ubuntu principles.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="glass-button text-white px-10 py-4 text-lg hover-lift">
              Join Ubuntu Community
            </Button>
          </div>
        </div>
      </section>

    

      {/* Mobile App Download Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-bg bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text-gold">
                Take Your Ubuntu Journey <span className="gradient-text">Everywhere</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Access your heritage discovery, community circles, and wisdom lessons on any device
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="group-hover:text-heritage-gold transition-colors duration-300">Offline Cultural Content</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <span className="group-hover:text-heritage-gold transition-colors duration-300">Ubuntu Circle Video Calls</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span className="group-hover:text-heritage-gold transition-colors duration-300">Heritage Photo Capture</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="group-hover:text-heritage-gold transition-colors duration-300">Cultural Calendar & Notifications</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glass-button text-black hover-lift">
                  <Download className="mr-2" />
                  App Store
                </Button>
                <Button size="lg" className="glass-button text-black hover-lift">
                  <Download className="mr-2" />
                  Google Play
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="glass-card p-8 hover-lift">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2 gradient-text-gold">Mobile App Preview</h3>
                <p className="text-gray-600">Heritage discovery, community circles, and offline learning in your pocket</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-bg bg-gradient-to-br from-terracotta-50 to-ochre-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text-gold">
              Choose Your <span className="gradient-text">Ubuntu Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your journey with a free heritage assessment and choose the path that resonates with your soul
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriptionTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`relative glass-card hover-lift ${tier.popular ? 'border-heritage-gold/50' : 'border-white/20'}`}>
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-heritage-gold to-yellow-400 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="gradient-text-gold">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900">
                      ${tier.price}
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full glass-button ${tier.popular ? 'text-white' : 'text-heritage-gold'}`}
                    >
                      Choose {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="glass-button text-white px-10 py-4 text-lg hover-lift">
              Start Free Heritage Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Elder Wisdom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-bg bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text-gold">
              Learn from Our <span className="gradient-text">Elders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with cultural mentors who carry the wisdom of generations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elders.map((elder, index) => (
              <motion.div
                key={elder.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card hover-lift border-heritage-gold/20">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-heritage-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                      {elder.name.charAt(0)}
                    </div>
                    <CardTitle className="gradient-text-gold">{elder.name}</CardTitle>
                    <CardDescription className="text-gray-600">{elder.background}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                      <p className="text-sm text-gray-600">{elder.expertise}</p>
                    </div>
                    <blockquote className="italic text-gray-700 border-l-4 border-gradient-to-b from-heritage-gold to-yellow-400 pl-4">
                      "{elder.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="glass-button text-white px-10 py-4 text-lg hover-lift">
              Meet Your Cultural Mentors
            </Button>
          </div>
        </div>
      </section>

      {/* Cultural Events Calendar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-bg bg-gradient-to-br from-ubuntu-50 to-ubuntu-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text-gold">
              Join Global <span className="gradient-text">Ubuntu Celebrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participate in cultural ceremonies, workshops, and community gatherings from around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card border-ubuntu-200/30">
                <CardHeader>
                  <CardTitle className="gradient-text-gold">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover-lift">
                      <div className="w-8 h-8 bg-gradient-to-r from-ubuntu-400 to-ubuntu-600 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Kwanzaa Celebration</h4>
                        <p className="text-sm text-gray-600">December 26, 2024 • Virtual</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover-lift">
                      <div className="w-8 h-8 bg-gradient-to-r from-ubuntu-400 to-ubuntu-600 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ancestral Healing Workshop</h4>
                        <p className="text-sm text-gray-600">January 15, 2024 • Hybrid</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover-lift">
                      <div className="w-8 h-8 bg-gradient-to-r from-ubuntu-400 to-ubuntu-600 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ubuntu Leadership Summit</h4>
                        <p className="text-sm text-gray-600">February 8, 2024 • In-Person</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card border-ubuntu-200/30">
                <CardHeader>
                  <CardTitle className="gradient-text-gold">Virtual Ceremonies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="glass-card p-6 rounded-lg hover-lift">
                      <h4 className="font-semibold mb-2 gradient-text-gold">Traditional Welcome Ceremony</h4>
                      <p className="text-gray-600 mb-4">Experience the warmth of African hospitality and community connection</p>
                      <Button className="glass-button text-ubuntu-600 hover:text-white">
                        Join Ceremony
                      </Button>
                    </div>
                    <div className="glass-card p-6 rounded-lg hover-lift">
                      <h4 className="font-semibold mb-2 gradient-text-gold">Elder Wisdom Circle</h4>
                      <p className="text-gray-600 mb-4">Learn from traditional wisdom keepers and cultural mentors</p>
                      <Button className="glass-button text-heritage-gold hover:text-white">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="glass-button text-white px-10 py-4 text-lg hover-lift">
              Join Next Ceremony
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Ubuntu Values */}
      <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 glassmorphism-bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text-gold mb-4">Asante</h3>
              <p className="text-gray-300 mb-6">
                "I am because we are" - Join the global Ubuntu community and discover your ancestral wisdom.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift">
                  <Globe className="w-5 h-5 text-heritage-gold" />
                </div>
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift">
                  <Users className="w-5 h-5 text-heritage-gold" />
                </div>
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift">
                  <Heart className="w-5 h-5 text-heritage-gold" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold gradient-text-gold mb-4">Ubuntu Values</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-heritage-gold transition-colors duration-300">Community Unity</li>
                <li className="hover:text-heritage-gold transition-colors duration-300">Collective Responsibility</li>
                <li className="hover:text-heritage-gold transition-colors duration-300">Interconnectedness</li>
                <li className="hover:text-heritage-gold transition-colors duration-300">Cultural Respect</li>
                <li className="hover:text-heritage-gold transition-colors duration-300">Ancestral Honor</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold gradient-text-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-heritage-gold transition-colors duration-300">About Asante</Link></li>
                <li><Link href="/heritage" className="hover:text-heritage-gold transition-colors duration-300">Heritage Discovery</Link></li>
                <li><Link href="/circles" className="hover:text-heritage-gold transition-colors duration-300">Ubuntu Circles</Link></li>
                <li><Link href="/wisdom-paths" className="hover:text-heritage-gold transition-colors duration-300">Wisdom Paths</Link></li>
                <li><Link href="/contact" className="hover:text-heritage-gold transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Asante Platform. All rights reserved. Built with Ubuntu philosophy.</p>
            <p className="mt-2 text-sm">
              We acknowledge and honor the traditional custodians of the lands on which we gather and learn.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
