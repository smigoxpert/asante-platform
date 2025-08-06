"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, Users, Heart, BookOpen, Star, Crown } from "lucide-react";
import Link from "next/link";
import { useAsanteClasses } from "@/lib/asante-classes";
import { heroImagePlaceholders } from "@/lib/placeholder-images";

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    desktop: string;
    mobile: string;
    alt: string;
    isPremium?: boolean;
  };
  cta: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  badge?: {
    text: string;
    variant?: 'default' | 'secondary' | 'destructive';
    icon?: React.ComponentType<{ className?: string }>;
  };
  features?: string[];
  culturalTheme: 'ubuntu' | 'heritage' | 'community' | 'wisdom' | 'healing';
}

const heroSlides: HeroSlide[] = [
  {
    id: "ubuntu-journey",
    title: "Begin Your Ubuntu Journey",
    subtitle: "I am because we are",
    description: "Discover the timeless wisdom of Ubuntu philosophy and transform your life through community connection and ancestral wisdom.",
    image: heroImagePlaceholders["ubuntu-journey"],
    cta: {
      text: "Start Your Journey",
      href: "/signup",
      variant: 'primary'
    },
    badge: {
      text: "Most Popular",
      variant: 'secondary'
    },
    features: [
      "Personalized learning paths",
      "Community circles",
      "Elder guidance",
      "Cultural practices"
    ],
    culturalTheme: 'ubuntu'
  },
  {
    id: "heritage-discovery",
    title: "Discover Your Ancestral Roots",
    subtitle: "Connect with your heritage",
    description: "Explore your family history, DNA origins, and cultural traditions to build a deeper connection with your ancestral wisdom.",
    image: heroImagePlaceholders["heritage-discovery"],
    cta: {
      text: "Explore Heritage",
      href: "/heritage",
      variant: 'primary'
    },
                                        badge: {
                                      text: "Premium",
                                      variant: 'default',
                                      icon: Crown
                                    },
    features: [
      "Family tree building",
      "DNA analysis integration",
      "Cultural traditions",
      "Ancestral stories"
    ],
    culturalTheme: 'heritage'
  },
  {
    id: "community-circles",
    title: "Join Sacred Community Circles",
    subtitle: "Build meaningful connections",
    description: "Connect with like-minded individuals in supportive Ubuntu circles where wisdom is shared and community thrives.",
    image: heroImagePlaceholders["community-circles"],
    cta: {
      text: "Join Circles",
      href: "/circles",
      variant: 'primary'
    },
    badge: {
      text: "New Feature",
      variant: 'default'
    },
    features: [
      "Virtual gatherings",
      "Elder mentorship",
      "Cultural celebrations",
      "Community impact"
    ],
    culturalTheme: 'community'
  },
  {
    id: "wisdom-paths",
    title: "Follow Ancient Wisdom Paths",
    subtitle: "Learn from traditional knowledge",
    description: "Embark on curated learning journeys that combine ancient African wisdom with modern applications for personal growth.",
    image: heroImagePlaceholders["wisdom-paths"],
    cta: {
      text: "Explore Paths",
      href: "/wisdom-paths",
      variant: 'primary'
    },
    features: [
      "Curated learning journeys",
      "Traditional practices",
      "Modern applications",
      "Progress tracking"
    ],
    culturalTheme: 'wisdom'
  },
  {
    id: "healing-practices",
    title: "Traditional Healing & Wellness",
    subtitle: "Holistic well-being through tradition",
    description: "Discover ancient healing practices, spiritual wellness, and traditional medicine that promote holistic health and balance.",
    image: heroImagePlaceholders["healing-practices"],
    cta: {
      text: "Learn Healing",
      href: "/courses?category=healing",
      variant: 'primary'
    },
    features: [
      "Traditional medicine",
      "Spiritual practices",
      "Holistic wellness",
      "Mind-body balance"
    ],
    culturalTheme: 'healing'
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { page, component, cultural, combine } = useAsanteClasses();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % heroSlides.length;
        return nextSlide;
      });
    }, 5000);

    autoPlayIntervalRef.current = interval;

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const getCulturalThemeClasses = (theme: string) => {
    const themeClasses = {
      ubuntu: 'bg-gradient-to-br from-heritage-gold via-orange-500 to-red-600',
      heritage: 'bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-600',
      community: 'bg-gradient-to-br from-purple-600 via-pink-500 to-rose-600',
      wisdom: 'bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-600',
      healing: 'bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600'
    };
    return themeClasses[theme as keyof typeof themeClasses] || themeClasses.ubuntu;
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="asante-hero-carousel relative w-full overflow-hidden mx-auto">
      {/* Main Carousel Container */}
      <div 
        className="relative w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slide Container */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
                                        {/* Background Image */}
                          <div className="absolute inset-0">
                            {/* Fallback gradient background */}
                            <div className={`absolute inset-0 ${getCulturalThemeClasses(slide.culturalTheme)} opacity-20`}></div>
                            <picture>
                              <source
                                media="(max-width: 768px)"
                                srcSet={slide.image.mobile}
                              />
                              <img
                                src={slide.image.desktop}
                                alt={slide.image.alt}
                                className="w-full h-full object-cover relative z-10"
                                loading={index === currentSlide ? "eager" : "lazy"}
                                onError={(e) => {
                                  // Hide the image if it fails to load, gradient background will show
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </picture>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Cultural Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                  }}></div>
                </div>
              </div>

                                        {/* Content */}
                          <div className="relative z-10 h-full flex items-center">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="max-w-6xl">
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                      {/* Text Content */}
                                                        <div className="text-white space-y-4">
                                    {slide.badge && (
                                      <Badge
                                        variant={slide.badge.variant}
                                        className={`mb-4 font-ubuntu ${
                                          slide.badge.text === "Premium" 
                                            ? "premium-badge" 
                                            : "bg-white/20 text-white border-white/30"
                                        }`}
                                      >
                                        {slide.badge.icon && (
                                          <slide.badge.icon className="w-4 h-4 mr-1" />
                                        )}
                                        {slide.badge.text}
                                      </Badge>
                                    )}

                                    <div className="space-y-3">
                                      <h1 className="text-3xl md:text-4xl font-ubuntu font-bold leading-tight text-white drop-shadow-lg">
                                        {slide.title}
                                      </h1>
                                      <p className="text-lg font-ubuntu font-light text-white/90 drop-shadow-md">
                                        {slide.subtitle}
                                      </p>
                                      <p className="text-sm md:text-base text-white/80 font-ubuntu leading-relaxed drop-shadow-sm">
                                        {slide.description}
                                      </p>
                                    </div>

                                                            {/* Features List */}
                                    {slide.features && (
                                      <div className="grid grid-cols-2 gap-2 mt-6">
                                        {slide.features.map((feature, idx) => (
                                          <div key={idx} className="flex items-center space-x-2 text-white/90">
                                            <Star className="w-4 h-4 text-heritage-gold" />
                                            <span className="text-sm font-ubuntu drop-shadow-sm">{feature}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                                            {/* CTA Button */}
                                    <div className="pt-3">
                                      <Link href={slide.cta.href}>
                                        <Button
                                          size="lg"
                                          variant={slide.cta.variant}
                                          className="btn-primary-glass font-ubuntu text-base px-6 py-2 hover:scale-105 transition-transform duration-200"
                                        >
                                          {slide.cta.text}
                                        </Button>
                                      </Link>
                                    </div>
                      </div>

                                                        {/* Visual Element */}
                                  <div className="hidden md:block">
                                    <div className="relative">
                                      {/* Floating Cultural Elements */}
                                      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${getCulturalThemeClasses(slide.culturalTheme)} opacity-20 blur-xl animate-pulse`}></div>
                                      <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full ${getCulturalThemeClasses(slide.culturalTheme)} opacity-30 blur-lg animate-pulse`} style={{animationDelay: '1s'}}></div>

                                      {/* Cultural Icons */}
                                      <div className="relative z-10 flex justify-center">
                                        <div className="glass-element w-40 h-40 flex items-center justify-center">
                                          <div className="text-white text-5xl">
                                            {slide.culturalTheme === 'ubuntu' && <Users className="w-14 h-14" />}
                                            {slide.culturalTheme === 'heritage' && <Heart className="w-14 h-14" />}
                                            {slide.culturalTheme === 'community' && <Users className="w-14 h-14" />}
                                            {slide.culturalTheme === 'wisdom' && <BookOpen className="w-14 h-14" />}
                                            {slide.culturalTheme === 'healing' && <Heart className="w-14 h-14" />}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

                            {/* Navigation Buttons */}
                    <button
                      onClick={goToPrevious}
                      className="hero-nav-button absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={goToNext}
                      className="hero-nav-button absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                            {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                      {heroSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`hero-indicator w-3 h-3 ${
                            index === currentSlide ? 'active' : ''
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="hero-progress-bar absolute bottom-0 left-0 right-0 h-1">
                      <div
                        className="hero-progress-fill h-full"
                        style={{
                          width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
                        }}
                      />
                    </div>

                    {/* Auto-play Status Indicator */}
                    <div className="absolute top-4 right-4 z-20">
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-red-400'} hover:scale-125 transition-transform`} 
                        title={isAutoPlaying ? 'Auto-play active (click to pause)' : 'Auto-play paused (click to resume)'} />
                    </div>

                    {/* Current Slide Indicator */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {currentSlide + 1} / {heroSlides.length}
                      </div>
                    </div>
      </div>
    </div>
  );
} 