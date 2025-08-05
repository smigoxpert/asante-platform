"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SubscriptionModal } from "@/components/ui/subscription-modal";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

interface HeritageStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface HeritageData {
  fullName: string;
  birthPlace: string;
  age: string;
  gender: string;
  height: string;
  skinTone: number;
  hairTexture: string;
  eyeColor: string;
  familyOrigins: string;
  specificOrigins: string;
  africanConnections: string[];
  traditions: string[];
  musicPreferences: string[];
  spiceLevel: string;
  languages: string[];
  otherLanguages: string;
}

interface SampleResults {
  ancestryBreakdown: {
    region: string;
    percentage: number;
    confidence: string;
  }[];
  historicalConnections: {
    name: string;
    period: string;
    region: string;
    match: string;
  }[];
  culturalHeritage: {
    traditions: string[];
    languages: string[];
    music: string[];
  };
  geographicOrigins: {
    primary: string;
    secondary: string[];
    migration: string;
  };
}

export default function HeritagePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [heritageData, setHeritageData] = useState<HeritageData>({
    fullName: "",
    birthPlace: "",
    age: "",
    gender: "",
    height: "",
    skinTone: 0,
    hairTexture: "",
    eyeColor: "",
    familyOrigins: "",
    specificOrigins: "",
    africanConnections: [],
    traditions: [],
    musicPreferences: [],
    spiceLevel: "",
    languages: [],
    otherLanguages: ""
  });
  const [showResults, setShowResults] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showSampleResults, setShowSampleResults] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const steps: HeritageStep[] = [
    { id: 1, title: "Welcome", description: "Begin your heritage journey", completed: false },
    { id: 2, title: "Basic Profile", description: "Tell us about yourself", completed: false },
    { id: 3, title: "Physical Traits", description: "Share your characteristics", completed: false },
    { id: 4, title: "Family History", description: "What you know about ancestors", completed: false },
    { id: 5, title: "Cultural Preferences", description: "What resonates with you", completed: false }
  ];

  // Generate sample results based on user data or show placeholder
  const generateSampleResults = (): SampleResults => {
    const hasUserData = heritageData.fullName || heritageData.familyOrigins || heritageData.musicPreferences.length > 0;
    
    if (hasUserData) {
      // Generate personalized results based on user data
      return {
        ancestryBreakdown: [
          { region: "West African", percentage: 45, confidence: "95%" },
          { region: "Central African", percentage: 30, confidence: "87%" },
          { region: "European", percentage: 15, confidence: "78%" },
          { region: "Other", percentage: 10, confidence: "65%" }
        ],
        historicalConnections: [
          { name: "Queen Nzinga", period: "17th Century", region: "Angola", match: "87%" },
          { name: "Mansa Musa", period: "14th Century", region: "Mali Empire", match: "92%" },
          { name: "Shaka Zulu", period: "19th Century", region: "South Africa", match: "76%" }
        ],
        culturalHeritage: {
          traditions: heritageData.africanConnections.length > 0 ? heritageData.africanConnections : ["Traditional Drumming", "Storytelling", "Ancestral Worship"],
          languages: ["Yoruba", "Swahili", "Zulu"],
          music: heritageData.musicPreferences.length > 0 ? heritageData.musicPreferences : ["Afrobeats", "Gospel", "Blues/Soul"]
        },
        geographicOrigins: {
          primary: heritageData.familyOrigins || "West Africa",
          secondary: ["Central Africa", "East Africa"],
          migration: "Transatlantic migration patterns suggest connections to multiple African regions"
        }
      };
    } else {
      // Show placeholder results
      return {
        ancestryBreakdown: [
          { region: "West African", percentage: 35, confidence: "Sample" },
          { region: "Central African", percentage: 25, confidence: "Sample" },
          { region: "East African", percentage: 20, confidence: "Sample" },
          { region: "Other", percentage: 20, confidence: "Sample" }
        ],
        historicalConnections: [
          { name: "Sample Historical Figure", period: "Various Periods", region: "Multiple Regions", match: "Sample" },
          { name: "Sample Cultural Leader", period: "Various Periods", region: "Multiple Regions", match: "Sample" }
        ],
        culturalHeritage: {
          traditions: ["Traditional Drumming", "Storytelling", "Ancestral Worship", "Community Gatherings"],
          languages: ["Multiple African Languages", "Creole Languages", "Indigenous Dialects"],
          music: ["Afrobeats", "Gospel", "Blues/Soul", "Traditional Rhythms"]
        },
        geographicOrigins: {
          primary: "Multiple African Regions",
          secondary: ["West Africa", "Central Africa", "East Africa"],
          migration: "Your ancestors' journey spans complex migration patterns across the African continent and diaspora, representing resilience, adaptation, and the preservation of cultural identity through generations."
        }
      };
    }
  };

  const updateHeritageData = (field: keyof HeritageData, value: any) => {
    setHeritageData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const beginJourney = () => {
    setCurrentStep(2);
  };

  const discoverJourney = () => {
    // Show subscription modal instead of results
    setShowSubscriptionModal(true);
  };

  const viewSampleResults = () => {
    setShowSampleResults(true);
  };

  const handleSubscribe = async (plan: string) => {
    setIsProcessing(true);
    // Simulate subscription process
    setTimeout(() => {
      setIsProcessing(false);
      setShowSubscriptionModal(false);
      setShowResults(true);
    }, 2000);
  };

  const handlePurchaseResults = async () => {
    setIsProcessing(true);
    // Simulate purchase process
    setTimeout(() => {
      setIsProcessing(false);
      setShowSubscriptionModal(false);
      setShowResults(true);
    }, 2000);
  };

  const progressPercentage = (currentStep / steps.length) * 100;
  const sampleResults = generateSampleResults();
  const hasUserData = heritageData.fullName || heritageData.familyOrigins || heritageData.musicPreferences.length > 0;

  return (
    <AuthenticatedLayout>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-ubuntu text-gray-600">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm font-ubuntu text-heritage-gold">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {!showResults ? (
            <div className="space-y-8">
              {/* Step 1: Welcome */}
              {currentStep === 1 && (
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                      African Roots Discovery
                    </h1>
                    <p className="text-xl md:text-2xl font-ubuntu text-gray-700 max-w-3xl mx-auto leading-relaxed">
                      "Go back and get it" - Discover your African heritage through advanced genetic and cultural analysis
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20 group hover:bg-white/95 hover:border-heritage-gold/40 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-gold/20 group-hover:scale-110 transition-all duration-500">
                          <svg className="w-6 h-6 text-heritage-gold group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2 group-hover:text-heritage-gold transition-colors duration-300">Geographic Analysis</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Trace your family's journey across Africa using advanced mapping technology</p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-full bg-heritage-gold/10 rounded-full h-1">
                            <div className="bg-heritage-gold h-1 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20 group hover:bg-white/95 hover:border-heritage-gold/40 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-gold/20 group-hover:scale-110 transition-all duration-500">
                          <svg className="w-6 h-6 text-heritage-gold group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2 group-hover:text-heritage-gold transition-colors duration-300">Historical Connections</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Connect with famous historical figures from your ancestral regions</p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex justify-center space-x-1">
                            <div className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20 group hover:bg-white/95 hover:border-heritage-gold/40 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-gold/20 group-hover:scale-110 transition-all duration-500">
                          <svg className="w-6 h-6 text-heritage-gold group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2 group-hover:text-heritage-gold transition-colors duration-300">Cultural Heritage</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Discover traditions, languages, and customs from your roots</p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex justify-center space-x-2">
                            <div className="w-3 h-3 bg-heritage-gold rounded-full animate-ping"></div>
                            <div className="w-3 h-3 bg-heritage-gold rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                            <div className="w-3 h-3 bg-heritage-gold rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20 group hover:bg-white/95 hover:border-heritage-gold/40 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-gold/20 group-hover:scale-110 transition-all duration-500">
                          <svg className="w-6 h-6 text-heritage-gold group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2 group-hover:text-heritage-gold transition-colors duration-300">Privacy Protected</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Your data is secure and never shared with third parties</p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex justify-center">
                            <div className="w-8 h-8 border-2 border-heritage-gold border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="heritage-gradient px-8 py-3"
                      onClick={beginJourney}
                    >
                      Begin Your Journey
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/5 px-8 py-3"
                      onClick={viewSampleResults}
                    >
                      View Sample Results
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Basic Profile */}
              {currentStep === 2 && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-2">Basic Profile</h2>
                    <p className="text-gray-600">Tell us about yourself to personalize your heritage journey</p>
                  </div>

                  <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <Input
                            placeholder="Enter your full name"
                            value={heritageData.fullName}
                            onChange={(e) => updateHeritageData('fullName', e.target.value)}
                            className="border-heritage-gold/30 focus:border-heritage-gold"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Birthplace
                          </label>
                          <Input
                            placeholder="City, Country"
                            value={heritageData.birthPlace}
                            onChange={(e) => updateHeritageData('birthPlace', e.target.value)}
                            className="border-heritage-gold/30 focus:border-heritage-gold"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Age Range
                          </label>
                          <select
                            value={heritageData.age}
                            onChange={(e) => updateHeritageData('age', e.target.value)}
                            className="w-full px-3 py-2 border border-heritage-gold/30 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold"
                          >
                            <option value="">Select age range</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46-55">46-55</option>
                            <option value="56-65">56-65</option>
                            <option value="65+">65+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Gender
                          </label>
                          <select
                            value={heritageData.gender}
                            onChange={(e) => updateHeritageData('gender', e.target.value)}
                            className="w-full px-3 py-2 border border-heritage-gold/30 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold"
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not">Prefer not to say</option>
                          </select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={previousStep}>
                      Back
                    </Button>
                    <Button className="heritage-gradient" onClick={nextStep}>
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Physical Traits */}
              {currentStep === 3 && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-2">Physical Characteristics</h2>
                    <p className="text-gray-600">Share your physical traits to help refine your ancestry analysis</p>
                  </div>

                  <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Height
                          </label>
                          <select
                            value={heritageData.height}
                            onChange={(e) => updateHeritageData('height', e.target.value)}
                            className="w-full px-3 py-2 border border-heritage-gold/30 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold"
                          >
                            <option value="">Select height range</option>
                            <option value="under-5">Under 5'0"</option>
                            <option value="5-0-to-5-5">5'0" - 5'5"</option>
                            <option value="5-6-to-5-11">5'6" - 5'11"</option>
                            <option value="6-0-to-6-5">6'0" - 6'5"</option>
                            <option value="over-6-5">Over 6'5"</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Hair Texture
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['straight', 'wavy', 'coily', 'kinky'].map((texture) => (
                              <button
                                key={texture}
                                onClick={() => updateHeritageData('hairTexture', texture)}
                                className={`p-3 border rounded-[2rem] text-sm font-ubuntu transition-all ${
                                  heritageData.hairTexture === texture
                                    ? 'border-heritage-gold bg-heritage-gold/10 text-heritage-gold'
                                    : 'border-gray-300 hover:border-heritage-gold/50'
                                }`}
                              >
                                {texture.charAt(0).toUpperCase() + texture.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Eye Color
                          </label>
                          <select
                            value={heritageData.eyeColor}
                            onChange={(e) => updateHeritageData('eyeColor', e.target.value)}
                            className="w-full px-3 py-2 border border-heritage-gold/30 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold"
                          >
                            <option value="">Select eye color</option>
                            <option value="brown">Brown</option>
                            <option value="hazel">Hazel</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="gray">Gray</option>
                            <option value="amber">Amber</option>
                          </select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={previousStep}>
                      Back
                    </Button>
                    <Button className="heritage-gradient" onClick={nextStep}>
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Family History */}
              {currentStep === 4 && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-2">Family History</h2>
                    <p className="text-gray-600">Share what you know about your ancestors</p>
                  </div>

                  <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Family Origins (if known)
                          </label>
                          <select
                            value={heritageData.familyOrigins}
                            onChange={(e) => updateHeritageData('familyOrigins', e.target.value)}
                            className="w-full px-3 py-2 border border-heritage-gold/30 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold"
                          >
                            <option value="">Select region...</option>
                            <option value="west-africa">West Africa</option>
                            <option value="east-africa">East Africa</option>
                            <option value="central-africa">Central Africa</option>
                            <option value="north-africa">North Africa</option>
                            <option value="south-africa">Southern Africa</option>
                            <option value="caribbean">Caribbean</option>
                            <option value="south-america">South America</option>
                            <option value="north-america">North America</option>
                            <option value="europe">Europe</option>
                            <option value="unknown">Unknown</option>
                          </select>
                        </div>

                        {heritageData.familyOrigins && heritageData.familyOrigins !== 'unknown' && (
                          <div>
                            <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                              Specific Countries or Regions
                            </label>
                            <Input
                              placeholder="Specific countries or regions..."
                              value={heritageData.specificOrigins}
                              onChange={(e) => updateHeritageData('specificOrigins', e.target.value)}
                              className="border-heritage-gold/30 focus:border-heritage-gold"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Any known African connections?
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Family Stories', 'African Names', 'Traditions', 'Food/Cooking', 'Music/Dance', 'None Known'].map((connection) => (
                              <button
                                key={connection}
                                onClick={() => {
                                  const connections = heritageData.africanConnections;
                                  const newConnections = connections.includes(connection)
                                    ? connections.filter(c => c !== connection)
                                    : [...connections, connection];
                                  updateHeritageData('africanConnections', newConnections);
                                }}
                                className={`p-3 border rounded-[2rem] text-sm font-ubuntu transition-all ${
                                  heritageData.africanConnections.includes(connection)
                                    ? 'border-heritage-gold bg-heritage-gold/10 text-heritage-gold'
                                    : 'border-gray-300 hover:border-heritage-gold/50'
                                }`}
                              >
                                {connection}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={previousStep}>
                      Back
                    </Button>
                    <Button className="heritage-gradient" onClick={nextStep}>
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 5: Cultural Preferences */}
              {currentStep === 5 && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-ubuntu font-bold text-gray-900 mb-2">Cultural Preferences</h2>
                    <p className="text-gray-600">What resonates with you?</p>
                  </div>

                  <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Which music styles do you connect with?
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Blues/Soul', 'Jazz', 'Afrobeats', 'Gospel', 'Reggae', 'Hip Hop'].map((music) => (
                              <button
                                key={music}
                                onClick={() => {
                                  const preferences = heritageData.musicPreferences;
                                  const newPreferences = preferences.includes(music)
                                    ? preferences.filter(m => m !== music)
                                    : [...preferences, music];
                                  updateHeritageData('musicPreferences', newPreferences);
                                }}
                                className={`p-3 border rounded-[2rem] text-sm font-ubuntu transition-all ${
                                  heritageData.musicPreferences.includes(music)
                                    ? 'border-heritage-gold bg-heritage-gold/10 text-heritage-gold'
                                    : 'border-gray-300 hover:border-heritage-gold/50'
                                }`}
                              >
                                {music}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-ubuntu font-medium text-gray-700 mb-2">
                            Preferred spice level in food?
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['Mild', 'Medium', 'Spicy', 'Very Spicy'].map((spice) => (
                              <button
                                key={spice}
                                onClick={() => updateHeritageData('spiceLevel', spice)}
                                className={`p-3 border rounded-[2rem] text-sm font-ubuntu transition-all ${
                                  heritageData.spiceLevel === spice
                                    ? 'border-heritage-gold bg-heritage-gold/10 text-heritage-gold'
                                    : 'border-gray-300 hover:border-heritage-gold/50'
                                }`}
                              >
                                {spice}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={previousStep}>
                      Back
                    </Button>
                    <Button className="heritage-gradient" onClick={discoverJourney}>
                      Discover My Journey
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Section */
            <div className="space-y-8">
              {/* Animated Stars Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-heritage-gold/30 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <Badge className="bg-gradient-to-r from-heritage-gold to-heritage-bronze text-white border-0 px-6 py-2 font-semibold">
                      Your Complete Heritage Analysis
                    </Badge>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                    Your African Heritage Journey
                  </h1>
                  <p className="text-xl text-gray-600 font-ubuntu max-w-3xl mx-auto leading-relaxed">
                    Discover the rich tapestry of your ancestral story, connecting you to centuries of culture, tradition, and legacy across the African continent
                  </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Ancestry Breakdown Card */}
                  <div className="bg-white/80 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/90 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        🧬
                      </div>
                      <div className="flex items-center justify-between flex-1">
                        <h3 className="text-2xl font-ubuntu font-bold text-gray-900">Ancestry Breakdown</h3>
                        <Badge className="bg-green-100 text-green-800 border-0">95% Confidence</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-ubuntu font-medium text-gray-900">West African</span>
                          <span className="text-xl font-bold text-heritage-gold">45%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-heritage-gold to-heritage-bronze rounded-full transition-all duration-1000 ease-out" style={{ width: '45%' }} />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-ubuntu font-medium text-gray-900">Central African</span>
                          <span className="text-xl font-bold text-heritage-gold">30%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-heritage-gold to-heritage-bronze rounded-full transition-all duration-1000 ease-out" style={{ width: '30%' }} />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-ubuntu font-medium text-gray-900">European</span>
                          <span className="text-xl font-bold text-heritage-gold">15%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-heritage-gold to-heritage-bronze rounded-full transition-all duration-1000 ease-out" style={{ width: '15%' }} />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-ubuntu font-medium text-gray-900">Other</span>
                          <span className="text-xl font-bold text-heritage-gold">10%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-heritage-gold to-heritage-bronze rounded-full transition-all duration-1000 ease-out" style={{ width: '10%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Historical Connections Card */}
                  <div className="bg-white/80 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/90 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        👑
                      </div>
                      <div className="flex items-center justify-between flex-1">
                        <h3 className="text-2xl font-ubuntu font-bold text-gray-900">Historical Connections</h3>
                        <Badge className="bg-blue-100 text-blue-800 border-0">87% Match</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-5 bg-heritage-gold/10 border border-heritage-gold/20 rounded-2xl hover:bg-heritage-gold/15 hover:border-heritage-gold/30 transition-all duration-300 group/item cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center text-white font-bold text-lg">
                          Q
                        </div>
                        <div className="flex-1">
                          <h4 className="font-ubuntu font-semibold text-gray-900 mb-1">Queen Nzinga</h4>
                          <p className="text-gray-600 text-sm">Angola, 17th Century</p>
                        </div>
                        <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-heritage-gold rounded-full animate-ping" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-5 bg-heritage-gold/10 border border-heritage-gold/20 rounded-2xl hover:bg-heritage-gold/15 hover:border-heritage-gold/30 transition-all duration-300 group/item cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center text-white font-bold text-lg">
                          M
                        </div>
                        <div className="flex-1">
                          <h4 className="font-ubuntu font-semibold text-gray-900 mb-1">Mansa Musa</h4>
                          <p className="text-gray-600 text-sm">Mali Empire, 14th Century</p>
                        </div>
                        <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-heritage-gold rounded-full animate-ping" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-5 bg-heritage-gold/10 border border-heritage-gold/20 rounded-2xl hover:bg-heritage-gold/15 hover:border-heritage-gold/30 transition-all duration-300 group/item cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center text-white font-bold text-lg">
                          S
                        </div>
                        <div className="flex-1">
                          <h4 className="font-ubuntu font-semibold text-gray-900 mb-1">Shaka Zulu</h4>
                          <p className="text-gray-600 text-sm">South Africa, 19th Century</p>
                        </div>
                        <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-heritage-gold rounded-full animate-ping" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Cultural Heritage Card */}
                  <div className="bg-white/80 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/90 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        🎭
                      </div>
                      <div className="flex items-center justify-between flex-1">
                        <h3 className="text-2xl font-ubuntu font-bold text-gray-900">Cultural Heritage</h3>
                        <Badge className="bg-purple-100 text-purple-800 border-0">92% Relevance</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-heritage-gold font-semibold mb-4">Traditions</h4>
                        <div className="flex flex-wrap gap-3">
                          {['Traditional Drumming', 'Storytelling', 'Ancestral Worship', 'Community Gatherings'].map((tradition, index) => (
                            <span 
                              key={index}
                              className="px-4 py-2 bg-heritage-gold/20 border border-heritage-gold/30 rounded-full text-sm font-medium text-heritage-gold hover:bg-heritage-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                              {tradition}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-heritage-gold font-semibold mb-4">Languages</h4>
                        <div className="flex flex-wrap gap-3">
                          {['Yoruba', 'Swahili', 'Zulu', 'Hausa'].map((language, index) => (
                            <span 
                              key={index}
                              className="px-4 py-2 bg-heritage-gold/20 border border-heritage-gold/30 rounded-full text-sm font-medium text-heritage-gold hover:bg-heritage-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Geographic Origins Card */}
                  <div className="bg-white/80 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/90 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        🌍
                      </div>
                      <h3 className="text-2xl font-ubuntu font-bold text-gray-900">Geographic Origins</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className="text-heritage-gold font-semibold mb-2">Primary Region</h4>
                        <div className="text-3xl font-bold bg-gradient-to-r from-heritage-gold to-heritage-bronze bg-clip-text text-transparent">
                          West Africa
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-heritage-gold font-semibold mb-4">Secondary Regions</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {['Central Africa', 'East Africa', 'North Africa'].map((region, index) => (
                            <div 
                              key={index}
                              className="text-center p-4 bg-heritage-gold/10 border border-heritage-gold/20 rounded-2xl hover:bg-heritage-gold/15 transition-all duration-300 cursor-pointer"
                            >
                              <h5 className="text-heritage-gold font-semibold mb-1">{region}</h5>
                              <p className="text-gray-600 text-sm">
                                {index === 0 ? "Strong Connections" : index === 1 ? "Cultural Links" : "Historical Ties"}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-heritage-gold/10 to-heritage-bronze/10 p-6 rounded-2xl border border-heritage-gold/30">
                        <h4 className="text-heritage-gold font-semibold mb-3">Migration Pattern</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Transatlantic migration patterns suggest connections to multiple African regions, with strong ties to West African coastal communities and inland trade routes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Placeholder */}
                <div className="bg-white/80 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/90 hover:shadow-xl hover:shadow-heritage-gold/20 transition-all duration-500 group mb-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      🗺️
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <h3 className="text-2xl font-ubuntu font-bold text-gray-900">Interactive Heritage Map</h3>
                      <Badge className="bg-orange-100 text-orange-800 border-0">Premium Feature</Badge>
                    </div>
                  </div>
                  
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-heritage-gold/30 group-hover:border-heritage-gold/50 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-600 font-ubuntu mb-2">Explore Your Ancestral Journey</p>
                      <p className="text-sm text-gray-500 font-ubuntu">Interactive map showing migration patterns and cultural connections</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-heritage-gold to-heritage-bronze text-white hover:from-heritage-bronze hover:to-heritage-gold px-8 py-4 font-semibold shadow-lg hover:shadow-xl hover:shadow-heritage-gold/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Download Report
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold px-8 py-4 font-semibold transition-all duration-300"
                  >
                    Share Results
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold px-8 py-4 font-semibold transition-all duration-300"
                  >
                    New Analysis
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sample Results Modal */}
      {showSampleResults && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto relative">
            {/* Animated Stars Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-heritage-gold rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 p-8">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <Badge className="bg-gradient-to-r from-heritage-gold to-heritage-bronze text-gray-900 border-0 px-6 py-2 font-semibold">
                    {hasUserData ? "Your Complete Heritage Analysis" : "Sample Heritage Analysis"}
                  </Badge>
                </div>
                <h2 className="text-5xl md:text-6xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-400 to-heritage-bronze bg-clip-text text-transparent mb-6">
                  Your African Heritage Journey
                </h2>
                <p className="text-xl text-gray-300 font-ubuntu max-w-3xl mx-auto leading-relaxed">
                  {hasUserData 
                    ? "Discover the rich tapestry of your ancestral story, connecting you to centuries of culture, tradition, and legacy across the African continent"
                    : "See what your heritage analysis could reveal about your African roots and cultural connections"
                  }
                </p>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Ancestry Breakdown Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-gray-900 font-bold text-xl">
                      🧬
                    </div>
                    <h3 className="text-2xl font-ubuntu font-bold text-white">Ancestry Breakdown</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {sampleResults.ancestryBreakdown.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-ubuntu font-medium text-white">{item.region}</span>
                          <span className="text-xl font-bold text-heritage-gold">{item.percentage}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-heritage-gold to-heritage-bronze rounded-full transition-all duration-1000 ease-out"
                            style={{ width: '0%' }}
                            onAnimationStart={(e) => {
                              setTimeout(() => {
                                e.currentTarget.style.width = `${item.percentage}%`;
                              }, index * 200);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Historical Connections Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-gray-900 font-bold text-xl">
                      👑
                    </div>
                    <h3 className="text-2xl font-ubuntu font-bold text-white">Historical Connections</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {sampleResults.historicalConnections.map((connection, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-5 bg-heritage-gold/10 border border-heritage-gold/20 rounded-2xl hover:bg-heritage-gold/15 hover:border-heritage-gold/30 transition-all duration-300 group/item"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                          {connection.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-ubuntu font-semibold text-white mb-1">{connection.name}</h4>
                          <p className="text-gray-300 text-sm">{connection.region} • {connection.period}</p>
                        </div>
                        <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-heritage-gold rounded-full animate-ping" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cultural Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Cultural Heritage Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-gray-900 font-bold text-xl">
                      🎭
                    </div>
                    <h3 className="text-2xl font-ubuntu font-bold text-white">Cultural Heritage</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-heritage-gold font-semibold mb-4">Traditions</h4>
                      <div className="flex flex-wrap gap-3">
                        {sampleResults.culturalHeritage.traditions.map((tradition, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-heritage-gold/20 border border-heritage-gold/30 rounded-full text-sm font-medium text-heritage-gold hover:bg-heritage-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                          >
                            {tradition}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-heritage-gold font-semibold mb-4">Music Styles</h4>
                      <div className="flex flex-wrap gap-3">
                        {sampleResults.culturalHeritage.music.map((music, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-heritage-gold/20 border border-heritage-gold/30 rounded-full text-sm font-medium text-heritage-gold hover:bg-heritage-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                          >
                            {music}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Geographic Origins Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-heritage-gold/20 rounded-3xl p-8 hover:border-heritage-gold/40 hover:bg-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-xl flex items-center justify-center text-gray-900 font-bold text-xl">
                      🌍
                    </div>
                    <h3 className="text-2xl font-ubuntu font-bold text-white">Geographic Origins</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-heritage-gold font-semibold mb-2">Primary Region</h4>
                      <div className="text-3xl font-bold bg-gradient-to-r from-heritage-gold to-heritage-bronze bg-clip-text text-transparent">
                        {sampleResults.geographicOrigins.primary}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-heritage-gold font-semibold mb-4">Secondary Regions</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sampleResults.geographicOrigins.secondary.map((region, index) => (
                          <div 
                            key={index}
                            className="text-center p-4 bg-heritage-gold/10 border border-heritage-gold/20 rounded-2xl hover:bg-heritage-gold/15 transition-all duration-300"
                          >
                            <h5 className="text-heritage-gold font-semibold mb-1">{region}</h5>
                            <p className="text-white text-sm">
                              {index === 0 ? "Primary Heritage" : index === 1 ? "Strong Connections" : "Cultural Links"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-heritage-gold/10 to-heritage-bronze/10 p-6 rounded-2xl border border-heritage-gold/30">
                      <h4 className="text-heritage-gold font-semibold mb-3">Migration Pattern</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {sampleResults.geographicOrigins.migration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-heritage-gold to-heritage-bronze text-gray-900 hover:from-heritage-bronze hover:to-heritage-gold px-8 py-4 font-semibold shadow-lg hover:shadow-xl hover:shadow-heritage-gold/25 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    setShowSampleResults(false);
                    if (!hasUserData) {
                      setCurrentStep(2);
                    } else {
                      setShowSubscriptionModal(true);
                    }
                  }}
                >
                  {hasUserData ? "Explore Your Heritage Tree" : "Start Your Journey"}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold px-8 py-4 font-semibold transition-all duration-300"
                  onClick={() => setShowSampleResults(false)}
                >
                  Close Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        onSubscribe={handleSubscribe}
        onPurchaseResults={handlePurchaseResults}
        featureName="Heritage Analysis"
        isLoading={isProcessing}
      />
    </AuthenticatedLayout>
  );
} 