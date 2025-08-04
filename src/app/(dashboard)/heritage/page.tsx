"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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

  const steps: HeritageStep[] = [
    { id: 1, title: "Welcome", description: "Begin your heritage journey", completed: false },
    { id: 2, title: "Basic Profile", description: "Tell us about yourself", completed: false },
    { id: 3, title: "Physical Traits", description: "Share your characteristics", completed: false },
    { id: 4, title: "Family History", description: "What you know about ancestors", completed: false },
    { id: 5, title: "Cultural Preferences", description: "What resonates with you", completed: false }
  ];

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
    setShowResults(true);
  };

  const progressPercentage = (currentStep / steps.length) * 100;

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
                    <h1 className="text-4xl font-ubuntu font-bold text-gray-900 mb-4">
                      Sankofa Roots Discovery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      "Go back and get it" - Discover your African heritage through advanced genetic and cultural analysis
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Geographic Analysis</h3>
                        <p className="text-sm text-gray-600">Trace your family's journey across Africa using advanced mapping technology</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Historical Connections</h3>
                        <p className="text-sm text-gray-600">Connect with famous historical figures from your ancestral regions</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Cultural Heritage</h3>
                        <p className="text-sm text-gray-600">Discover traditions, languages, and customs from your roots</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-ubuntu font-semibold text-gray-900 mb-2">Privacy Protected</h3>
                        <p className="text-sm text-gray-600">Your data is secure and never shared with third parties</p>
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
              <div className="text-center">
                <h1 className="text-4xl font-ubuntu font-bold text-gray-900 mb-4">Your Heritage Results</h1>
                <p className="text-xl text-gray-600">Discover your African roots and cultural connections</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Ancestry Breakdown Card */}
                <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-ubuntu">Ancestry Breakdown</CardTitle>
                      <Badge className="bg-green-100 text-green-800">95% Confidence</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-ubuntu">West African</span>
                        <span className="font-bold text-heritage-gold">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="font-ubuntu">Central African</span>
                        <span className="font-bold text-heritage-gold">30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="font-ubuntu">European</span>
                        <span className="font-bold text-heritage-gold">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="font-ubuntu">Other</span>
                        <span className="font-bold text-heritage-gold">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/* Historical Connections Card */}
                <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-ubuntu">Historical Connections</CardTitle>
                      <Badge className="bg-blue-100 text-blue-800">87% Match</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-heritage-gold/5 rounded-lg">
                        <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-ubuntu font-semibold">Queen Nzinga</p>
                          <p className="text-sm text-gray-600">Angola, 17th Century</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-heritage-gold/5 rounded-lg">
                        <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-ubuntu font-semibold">Mansa Musa</p>
                          <p className="text-sm text-gray-600">Mali Empire, 14th Century</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cultural Heritage Card */}
                <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-ubuntu">Cultural Heritage</CardTitle>
                      <Badge className="bg-purple-100 text-purple-800">92% Relevance</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <span className="font-ubuntu">Traditional Drumming</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                        <span className="font-ubuntu">Storytelling Traditions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="font-ubuntu">Yoruba Language</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Geographic Origins Card */}
                <Card className="bg-white/80 backdrop-blur-sm border-heritage-gold/20">
                  <CardHeader>
                    <CardTitle className="font-ubuntu">Geographic Origins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                        </svg>
                        <p className="text-sm text-gray-500 font-ubuntu">Interactive Map</p>
                        <p className="text-xs text-gray-400">Premium feature</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="heritage-gradient px-8 py-3">
                  Download Report
                </Button>
                <Button size="lg" variant="outline" className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/5 px-8 py-3">
                  Share Results
                </Button>
                <Button size="lg" variant="outline" className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/5 px-8 py-3">
                  New Analysis
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 