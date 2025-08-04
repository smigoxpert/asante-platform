"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Animate stats on mount
  useEffect(() => {
    const animateStats = () => {
      const targetStats = {
        users: 50000,
        connections: 10000,
        circles: 500
      };

      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          users: Math.floor(targetStats.users * progress),
          connections: Math.floor(targetStats.connections * progress),
          circles: Math.floor(targetStats.circles * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, increment);

      return () => clearInterval(timer);
    };

    animateStats();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-african-sunset animate-sunset-gradient">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Floating Cultural Symbols */}
        <motion.div 
          className="absolute top-20 left-10 text-4xl text-heritage-gold/30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          ✨
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-3xl text-heritage-gold/30"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🌟
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 text-2xl text-heritage-gold/30"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          💫
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-ubuntu">
              Discover Your <span className="text-heritage-gold">Ubuntu Journey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with your African heritage, transform through community, and live the Ubuntu way
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-heritage-gold hover:bg-heritage-bronze text-white px-8 py-3 text-lg">
                <Link href="/signup">Begin Heritage Discovery</Link>
              </Button>
              <Button size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent">
                <Download className="mr-2" />
                Download Mobile App
              </Button>
            </div>

            {/* Play Video Button */}
            <motion.div 
              className="flex items-center justify-center gap-2 text-lg cursor-pointer hover:text-heritage-gold transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <span>Watch Our Story</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Indicators Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join <span className="text-heritage-gold">{stats.users.toLocaleString()}+</span> Ubuntu Seekers Worldwide
            </motion.h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-heritage-gold mb-2">{stats.connections.toLocaleString()}</div>
                <div className="text-gray-600">Heritage Connections Made</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-heritage-gold mb-2">{stats.circles}</div>
                <div className="text-gray-600">Ubuntu Circles Active</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-heritage-gold mb-2">50+</div>
                <div className="text-gray-600">Cultural Elders</div>
              </motion.div>
            </div>

            {/* Testimonials */}
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-terracotta-50 to-ochre-50 p-8 rounded-heritage border border-terracotta-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-heritage-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-heritage-gold fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg">"{testimonials[currentTestimonial].story}"</p>
              </motion.div>
              
              {/* Testimonial Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-heritage-gold' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Discovery Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-terracotta-50 to-ochre-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Uncover Your <span className="text-heritage-gold">Ancestral Wisdom</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your roots, connect with your heritage, and understand your place in the global African family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-heritage p-8 shadow-heritage">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Heritage Map</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-heritage-gold rounded-full"></div>
                    <span>Explore African regions and cultural connections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-heritage-bronze rounded-full"></div>
                    <span>Discover your ancestral homelands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-heritage-copper rounded-full"></div>
                    <span>Connect with cultural practices and traditions</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-heritage p-8 shadow-heritage">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DNA Integration Preview</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-heritage-gold to-heritage-bronze p-4 rounded-lg text-white">
                    <div className="text-sm mb-2">Sample Ethnicity Breakdown</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>West African</span>
                        <span>45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Central African</span>
                        <span>30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>East African</span>
                        <span>15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Other</span>
                        <span>10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-heritage-gold hover:bg-heritage-bronze text-white px-8 py-3 text-lg">
              Start Your Heritage Journey
            </Button>
          </div>
        </div>
      </section>
      
        {/* Learning Paths Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ubuntu-50 to-ubuntu-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Through <span className="text-ubuntu-600">Ancient Wisdom</span>
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
                <Card className="border-ubuntu-200 hover:shadow-ubuntu transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-ubuntu-100 rounded-full flex items-center justify-center mb-4">
                      <path.icon className="w-6 h-6 text-ubuntu-600" />
                    </div>
                    <CardTitle className="text-ubuntu-600">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
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
                    <Button variant="outline" className="w-full border-ubuntu-300 text-ubuntu-600 hover:bg-ubuntu-50">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience Ubuntu: <span className="text-heritage-gold">I Am Because We Are</span>
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
              <Card className="border-heritage-gold/20 hover:shadow-heritage transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <CardTitle className="text-heritage-gold">Video Testimonials</CardTitle>
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
              <Card className="border-heritage-gold/20 hover:shadow-heritage transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <CardTitle className="text-heritage-gold">Live Community Feed</CardTitle>
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
              <Card className="border-heritage-gold/20 hover:shadow-heritage transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <CardTitle className="text-heritage-gold">Impact Stories</CardTitle>
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
            <Button size="lg" className="bg-heritage-gold hover:bg-heritage-bronze text-white px-8 py-3 text-lg">
              Join Ubuntu Community
            </Button>
          </div>
        </div>
      </section>

    

      {/* Mobile App Download Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Take Your Ubuntu Journey <span className="text-heritage-gold">Everywhere</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Access your heritage discovery, community circles, and wisdom lessons on any device
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-heritage-gold" />
                  <span>Offline Cultural Content</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-heritage-gold" />
                  <span>Ubuntu Circle Video Calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-heritage-gold" />
                  <span>Heritage Photo Capture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-heritage-gold" />
                  <span>Cultural Calendar & Notifications</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  <Download className="mr-2" />
                  App Store
                </Button>
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
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
              <div className="bg-gradient-to-br from-heritage-gold to-heritage-bronze p-8 rounded-heritage text-white">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2">Mobile App Preview</h3>
                <p className="text-heritage-gold/80">Heritage discovery, community circles, and offline learning in your pocket</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-terracotta-50 to-ochre-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-heritage-gold">Ubuntu Path</span>
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
                <Card className={`relative ${tier.popular ? 'border-heritage-gold shadow-heritage' : 'border-gray-200'}`}>
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-heritage-gold text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-heritage-gold">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900">
                      ${tier.price}
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-heritage-gold rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${tier.popular ? 'bg-heritage-gold hover:bg-heritage-bronze text-white' : 'bg-white border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-white'}`}
                    >
                      Choose {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-heritage-gold hover:bg-heritage-bronze text-white px-8 py-3 text-lg">
              Start Free Heritage Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Elder Wisdom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learn from Our <span className="text-heritage-gold">Elders</span>
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
                <Card className="border-heritage-gold/20 hover:shadow-heritage transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      {elder.name.charAt(0)}
                    </div>
                    <CardTitle className="text-heritage-gold">{elder.name}</CardTitle>
                    <CardDescription>{elder.background}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                      <p className="text-sm text-gray-600">{elder.expertise}</p>
                    </div>
                    <blockquote className="italic text-gray-700 border-l-4 border-heritage-gold pl-4">
                      "{elder.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-heritage-gold hover:bg-heritage-bronze text-white px-8 py-3 text-lg">
              Meet Your Cultural Mentors
            </Button>
          </div>
        </div>
      </section>

      {/* Cultural Events Calendar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ubuntu-50 to-ubuntu-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Global <span className="text-ubuntu-600">Ubuntu Celebrations</span>
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
              <Card className="border-ubuntu-200">
                <CardHeader>
                  <CardTitle className="text-ubuntu-600">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-ubuntu-200">
                      <Calendar className="w-8 h-8 text-ubuntu-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Kwanzaa Celebration</h4>
                        <p className="text-sm text-gray-600">December 26, 2024 • Virtual</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-ubuntu-200">
                      <Calendar className="w-8 h-8 text-ubuntu-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ancestral Healing Workshop</h4>
                        <p className="text-sm text-gray-600">January 15, 2024 • Hybrid</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-ubuntu-200">
                      <Calendar className="w-8 h-8 text-ubuntu-600" />
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
              <Card className="border-ubuntu-200">
                <CardHeader>
                  <CardTitle className="text-ubuntu-600">Virtual Ceremonies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-ubuntu-500 to-ubuntu-600 p-6 rounded-lg text-white">
                      <h4 className="font-semibold mb-2">Traditional Welcome Ceremony</h4>
                      <p className="text-ubuntu-100 mb-4">Experience the warmth of African hospitality and community connection</p>
                      <Button className="border-white text-white hover:bg-white hover:text-ubuntu-600 bg-transparent">
                        Join Ceremony
                      </Button>
                    </div>
                    <div className="bg-gradient-to-r from-heritage-gold to-heritage-bronze p-6 rounded-lg text-white">
                      <h4 className="font-semibold mb-2">Elder Wisdom Circle</h4>
                      <p className="text-heritage-gold/80 mb-4">Learn from traditional wisdom keepers and cultural mentors</p>
                      <Button className="border-white text-white hover:bg-white hover:text-heritage-bronze bg-transparent">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-ubuntu-600 hover:bg-ubuntu-700 text-white px-8 py-3 text-lg">
              Join Next Ceremony
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Ubuntu Values */}
      <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-heritage-gold mb-4">Asante</h3>
              <p className="text-gray-300 mb-6">
                "I am because we are" - Join the global Ubuntu community and discover your ancestral wisdom.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-heritage-gold" />
                </div>
                <div className="w-10 h-10 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-heritage-gold" />
                </div>
                <div className="w-10 h-10 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-heritage-gold" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-heritage-gold mb-4">Ubuntu Values</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Community Unity</li>
                <li>Collective Responsibility</li>
                <li>Interconnectedness</li>
                <li>Cultural Respect</li>
                <li>Ancestral Honor</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-heritage-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-heritage-gold transition-colors">About Asante</Link></li>
                <li><Link href="/heritage" className="hover:text-heritage-gold transition-colors">Heritage Discovery</Link></li>
                <li><Link href="/circles" className="hover:text-heritage-gold transition-colors">Ubuntu Circles</Link></li>
                <li><Link href="/wisdom-paths" className="hover:text-heritage-gold transition-colors">Wisdom Paths</Link></li>
                <li><Link href="/contact" className="hover:text-heritage-gold transition-colors">Contact</Link></li>
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
