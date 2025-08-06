"use client";

import React, { useState } from "react";
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
  FaCompass
} from "react-icons/fa";
import { wisdomPaths, WisdomPathCategory } from "@/lib/wisdom-paths";

export default function WisdomPathsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<WisdomPathCategory | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Paths", icon: FaCompass },
    { id: "ubuntu_leadership", label: "Ubuntu Leadership", icon: FaCrown },
    { id: "ancestral_healing", label: "Ancestral Healing", icon: FaLeaf },
    { id: "sacred_relationships", label: "Sacred Relationships", icon: FaHeart },
    { id: "purposeful_abundance", label: "Purposeful Abundance", icon: FaBalanceScale },
    { id: "spiritual_awakening", label: "Spiritual Awakening", icon: FaPrayingHands },
    { id: "cultural_renaissance", label: "Cultural Renaissance", icon: FaPalette },
    { id: "community_building", label: "Community Building", icon: FaUsers },
    { id: "creative_expression", label: "Creative Expression", icon: FaPalette },
    { id: "environmental_wisdom", label: "Environmental Wisdom", icon: FaTree },
    { id: "intergenerational_connection", label: "Intergenerational Connection", icon: FaSeedling }
  ];

  const difficulties = [
    { id: "all", label: "All Levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" }
  ];

  const regions = [
    { id: "all", label: "All Regions" },
    { id: "pan-african", label: "Pan-African" },
    { id: "west-africa", label: "West Africa" },
    { id: "east-africa", label: "East Africa" },
    { id: "southern-africa", label: "Southern Africa" },
    { id: "central-africa", label: "Central Africa" },
    { id: "north-africa", label: "North Africa" }
  ];

  const filteredPaths = wisdomPaths.filter(path => {
    const matchesSearch = path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         path.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         path.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || path.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || path.difficulty.toLowerCase() === selectedDifficulty;
    const matchesRegion = selectedRegion === "all" || path.culturalRegion.toLowerCase().includes(selectedRegion);

    return matchesSearch && matchesCategory && matchesDifficulty && matchesRegion;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.icon : FaCompass;
  };

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen bg-gradient-to-br from-heritage-gold/5 via-white to-terracotta-500/5">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-heritage-gold/20 via-orange-600/20 to-red-600/20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-ubuntu font-bold text-gray-900 mb-6">
                Wisdom <span className="bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent">Paths</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-ubuntu mb-8 max-w-3xl mx-auto">
                Embark on transformative journeys through the lives and teachings of legendary African leaders, 
                exploring ancient wisdom and modern applications
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <FaStar className="w-5 h-5 text-heritage-gold" />
                  <span className="font-ubuntu font-semibold text-gray-900">Historical Figures</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <FaGlobe className="w-5 h-5 text-heritage-gold" />
                  <span className="font-ubuntu font-semibold text-gray-900">Cultural Heritage</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <FaUsers className="w-5 h-5 text-heritage-gold" />
                  <span className="font-ubuntu font-semibold text-gray-900">Community Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-heritage-gold/20 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search wisdom paths, historical figures, or themes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-2 border-heritage-gold/30 focus:border-heritage-gold focus:ring-heritage-gold/20 transition-all duration-300 font-ubuntu"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as WisdomPathCategory | "all")}
                  className="w-full px-3 py-2 border-2 border-heritage-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold/20 focus:border-heritage-gold transition-all duration-300 font-ubuntu"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-heritage-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold/20 focus:border-heritage-gold transition-all duration-300 font-ubuntu"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Region Filter */}
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-4 py-2 rounded-full text-sm font-ubuntu transition-all duration-300 ${
                      selectedRegion === region.id
                        ? 'bg-heritage-gold text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-heritage-gold/10'
                    }`}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-ubuntu font-bold text-gray-900">
              {filteredPaths.length} Wisdom Path{filteredPaths.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="text-sm text-gray-600 font-ubuntu">
              Explore at your own pace
            </div>
          </div>

          {/* Wisdom Paths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPaths.map((path) => (
              <Card 
                key={path.id} 
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-heritage-gold/20"
                onClick={() => router.push(`/wisdom-paths/${path.id}`)}
              >
                {/* Path Header */}
                <div className="relative">
                  <div 
                    className="aspect-video rounded-t-lg flex items-center justify-center"
                    style={{ background: path.theme.background }}
                  >
                    <div className="text-6xl text-white">
                      {React.createElement(path.icon)}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 space-y-2">
                    <Badge className="bg-white/90 text-gray-900 font-ubuntu">
                      {path.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                    <Badge className={getDifficultyColor(path.difficulty)}>
                      {path.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-heritage-gold/90 text-white">
                      {path.price}
                    </Badge>
                  </div>
                </div>

                {/* Path Content */}
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-2 group-hover:text-heritage-gold transition-colors duration-300">
                      {path.title}
                    </h3>
                    <p className="text-sm font-ubuntu text-heritage-gold mb-2">
                      {path.subtitle}
                    </p>
                    <p className="text-gray-600 font-ubuntu text-sm leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  {/* Historical Figures */}
                  {path.culturalContext.keyFigures && path.culturalContext.keyFigures.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-ubuntu font-semibold text-gray-900 mb-2">
                        Featured Historical Figures:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {path.culturalContext.keyFigures.slice(0, 2).map((figure, index) => (
                          <Badge key={index} className="bg-gray-100 text-gray-700 text-xs font-ubuntu">
                            {figure.name}
                          </Badge>
                        ))}
                        {path.culturalContext.keyFigures.length > 2 && (
                          <Badge className="bg-gray-100 text-gray-700 text-xs font-ubuntu">
                            +{path.culturalContext.keyFigures.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Path Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 font-ubuntu mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FaStar className="w-4 h-4 text-heritage-gold" />
                        <span>{path.rating}</span>
                        <span>({path.totalRatings})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaClock className="w-4 h-4 text-heritage-gold" />
                        <span>{path.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUsers className="w-4 h-4 text-heritage-gold" />
                      <span>{path.enrollmentCount.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-ubuntu font-semibold text-gray-900 mb-2">
                      Journey Highlights:
                    </h4>
                    <div className="space-y-1">
                      {path.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-gray-600 font-ubuntu">
                          <div className="w-1 h-1 bg-heritage-gold rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {path.features.length > 3 && (
                        <div className="text-xs text-heritage-gold font-ubuntu">
                          +{path.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full heritage-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-ubuntu font-semibold"
                  >
                    Begin Journey
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredPaths.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl text-heritage-gold mb-4">
                <FaCompass />
              </div>
              <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-2">
                No Wisdom Paths Found
              </h3>
              <p className="text-gray-600 font-ubuntu mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedDifficulty("all");
                  setSelectedRegion("all");
                }}
                className="heritage-gradient"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 