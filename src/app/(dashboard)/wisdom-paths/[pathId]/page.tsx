"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";
import { 
  FaPlay, 
  FaBook, 
  FaUsers, 
  FaStar, 
  FaClock, 
  FaGraduationCap,
  FaChevronRight,
  FaChevronLeft,
  FaCheck,
  FaLock,
  FaHeart,
  FaShare,
  FaDownload,
  FaComments,
  FaVideo,
  FaHeadphones,
  FaFileAlt,
  FaHandsHelping,
  FaLightbulb,
  FaQuestionCircle,
  FaEdit,
  FaSave,
  FaCompass,
  FaHistory
} from "react-icons/fa";
import { wisdomPaths, getWisdomPathById } from "@/lib/wisdom-paths";

interface PathProgress {
  completedPhases: number;
  totalPhases: number;
  currentPhase: number;
  currentLesson: number;
  overallProgress: number;
  milestones: string[];
}

export default function WisdomPathDetailPage() {
  const params = useParams();
  const router = useRouter();
  const pathId = params.pathId as string;
  
  const [path, setPath] = useState<any>(null);
  const [progress, setProgress] = useState<PathProgress>({
    completedPhases: 0,
    totalPhases: 0,
    currentPhase: 0,
    currentLesson: 0,
    overallProgress: 0,
    milestones: []
  });
  const [activeTab, setActiveTab] = useState<'overview' | 'journey' | 'figures' | 'community' | 'resources'>('overview');
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  useEffect(() => {
    // Find the path from templates
    const foundPath = wisdomPaths.find(p => p.id === pathId);
    if (foundPath) {
      setPath(foundPath);
      // Calculate total phases
      const totalPhases = foundPath.journey.length;
      setProgress(prev => ({
        ...prev,
        totalPhases,
        overallProgress: Math.round((prev.completedPhases / totalPhases) * 100)
      }));
    }
  }, [pathId]);

  if (!path) {
    return (
      <AuthenticatedLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-ubuntu font-bold text-gray-900 mb-4">Wisdom Path Not Found</h2>
            <Button onClick={() => router.push('/wisdom-paths')} className="heritage-gradient">
              Back to Wisdom Paths
            </Button>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  }

  const handlePhaseClick = (phaseIndex: number) => {
    setExpandedPhase(expandedPhase === phaseIndex ? null : phaseIndex);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <FaVideo className="w-4 h-4" />;
      case 'audio': return <FaHeadphones className="w-4 h-4" />;
      case 'text': return <FaFileAlt className="w-4 h-4" />;
      case 'interactive': return <FaHandsHelping className="w-4 h-4" />;
      case 'meditation': return <FaLightbulb className="w-4 h-4" />; // Changed from FaPrayingHands
      case 'ceremony': return <FaGraduationCap className="w-4 h-4" />; // Changed from FaCrown
      case 'storytelling': return <FaBook className="w-4 h-4" />;
      default: return <FaBook className="w-4 h-4" />;
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen" style={{ background: path.theme.background }}>
        {/* Hero Section */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Path Info */}
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-white/90 text-gray-900">
                  {path.category.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-ubuntu font-bold text-white mb-4">
                  {path.title}
                </h1>
                <p className="text-xl text-white/90 font-ubuntu mb-2">
                  {path.subtitle}
                </p>
                <p className="text-lg text-white/80 font-ubuntu mb-6">
                  {path.description}
                </p>
                
                {/* Path Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <FaStar className="w-5 h-5 text-white" />
                    <span className="font-ubuntu font-semibold text-white">{path.rating}</span>
                    <span className="text-white/80">({path.totalRatings} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="w-5 h-5 text-white" />
                    <span className="font-ubuntu font-semibold text-white">{path.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="w-5 h-5 text-white" />
                    <span className="font-ubuntu font-semibold text-white">{path.enrollmentCount.toLocaleString()}</span>
                    <span className="text-white/80">journeying</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getDifficultyColor(path.difficulty)}>
                      {path.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-ubuntu font-medium text-white">Your Journey Progress</span>
                    <span className="font-ubuntu font-semibold text-white">{progress.overallProgress}%</span>
                  </div>
                  <Progress value={progress.overallProgress} className="h-3 bg-white/20" />
                  <p className="text-sm text-white/80 mt-2">
                    {progress.completedPhases} of {progress.totalPhases} phases completed
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-gray-900 hover:bg-white/90 transform hover:scale-105 transition-all duration-300 font-ubuntu font-semibold">
                    <FaPlay className="w-4 h-4 mr-2" />
                    Begin Journey
                  </Button>
                  <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 font-ubuntu">
                    <FaHeart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 font-ubuntu">
                    <FaShare className="w-4 h-4 mr-2" />
                    Share Journey
                  </Button>
                </div>
              </div>

              {/* Path Icon */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <div className="text-8xl text-white">
                      {React.createElement(path.icon)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">
                      {path.price}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview', icon: FaBook },
                  { id: 'journey', label: 'Journey', icon: FaCompass },
                  { id: 'figures', label: 'Historical Figures', icon: FaHistory },
                  { id: 'community', label: 'Community', icon: FaUsers },
                  { id: 'resources', label: 'Resources', icon: FaDownload }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-ubuntu font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-heritage-gold text-heritage-gold'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'overview' && (
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Path Overview */}
                  <div className="lg:col-span-2 space-y-8">
                    <Card className="border-heritage-gold/20">
                      <CardHeader>
                        <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                          What You'll Discover
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {path.learningOutcomes.map((outcome: string, index: number) => (
                            <div key={index} className="flex items-start space-x-3">
                              <FaCheck className="w-5 h-5 text-heritage-gold mt-0.5 flex-shrink-0" />
                              <span className="font-ubuntu text-gray-700">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-heritage-gold/20">
                      <CardHeader>
                        <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                          Journey Description
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-lg max-w-none font-ubuntu text-gray-700">
                          {path.longDescription}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-heritage-gold/20">
                      <CardHeader>
                        <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                          Cultural Context
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Cultural Region</h4>
                            <p className="text-gray-700">{path.culturalContext.region}</p>
                          </div>
                          <div>
                            <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Historical Period</h4>
                            <p className="text-gray-700">{path.culturalContext.historicalPeriod}</p>
                          </div>
                          <div>
                            <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Modern Relevance</h4>
                            <p className="text-gray-700">{path.culturalContext.modernRelevance}</p>
                          </div>
                          <div>
                            <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Ancient Civilizations</h4>
                            <div className="flex flex-wrap gap-2">
                              {path.culturalContext.civilizations.map((civilization: string, index: number) => (
                                <Badge key={index} className="bg-heritage-gold/20 text-heritage-gold">
                                  {civilization}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card className="border-heritage-gold/20">
                      <CardHeader>
                        <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                          Journey Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {path.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-center space-x-3">
                              <FaCheck className="w-4 h-4 text-heritage-gold" />
                              <span className="font-ubuntu text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-heritage-gold/20">
                      <CardHeader>
                        <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                          Prerequisites
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {path.prerequisites.map((prereq: string, index: number) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-heritage-gold rounded-full"></div>
                              <span className="font-ubuntu text-gray-700">{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'journey' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-ubuntu font-bold text-gray-900">
                      Your Journey Phases
                    </h3>
                    <div className="text-sm text-gray-600 font-ubuntu">
                      {path.journey.length} phases • {path.journey.reduce((acc: number, phase: any) => 
                        acc + phase.lessons.length, 0
                      )} lessons
                    </div>
                  </div>

                  <div className="space-y-4">
                    {path.journey.map((phase: any, phaseIndex: number) => (
                      <Card key={phaseIndex} className="border-heritage-gold/20">
                        <CardHeader 
                          className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => handlePhaseClick(phaseIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                                <span className="font-ubuntu font-bold text-heritage-gold">{phaseIndex + 1}</span>
                              </div>
                              <div>
                                <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
                                  {phase.title}
                                </CardTitle>
                                <CardDescription className="font-ubuntu text-gray-600">
                                  {phase.lessons.length} lessons • {phase.duration}
                                </CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="text-sm text-gray-600 font-ubuntu">
                                {phase.lessons.filter((l: any) => l.completed).length}/{phase.lessons.length} completed
                              </div>
                              {expandedPhase === phaseIndex ? (
                                <FaChevronLeft className="w-4 h-4 text-gray-500" />
                              ) : (
                                <FaChevronRight className="w-4 h-4 text-gray-500" />
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        
                        {expandedPhase === phaseIndex && (
                          <CardContent>
                            <div className="space-y-6">
                              {/* Phase Description */}
                              <div>
                                <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Phase Theme</h4>
                                <p className="text-gray-600 font-ubuntu">{phase.description}</p>
                              </div>

                              {/* Lessons */}
                              <div>
                                <h4 className="font-ubuntu font-semibold text-gray-900 mb-3">Lessons</h4>
                                <div className="space-y-3">
                                  {phase.lessons.map((lesson: any, lessonIndex: number) => (
                                    <div 
                                      key={lessonIndex}
                                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                      onClick={() => router.push(`/wisdom-paths/${pathId}/lesson/${lesson.id}`)}
                                    >
                                      <div className="flex items-center space-x-3">
                                        <div className="flex items-center space-x-2">
                                          {lesson.completed ? (
                                            <FaCheck className="w-4 h-4 text-green-600" />
                                          ) : lesson.locked ? (
                                            <FaLock className="w-4 h-4 text-gray-400" />
                                          ) : (
                                            <FaPlay className="w-4 h-4 text-heritage-gold" />
                                          )}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          {getContentTypeIcon(lesson.contentType)}
                                          <span className="font-ubuntu font-medium text-gray-900">
                                            {lesson.title}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-4">
                                        <span className="text-sm text-gray-600 font-ubuntu">
                                          {lesson.duration}
                                        </span>
                                        {lesson.isPreview && (
                                          <Badge className="bg-heritage-gold/20 text-heritage-gold">
                                            Preview
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Milestones */}
                              {phase.milestones && phase.milestones.length > 0 && (
                                <div>
                                  <h4 className="font-ubuntu font-semibold text-gray-900 mb-3">Milestones</h4>
                                  <div className="space-y-3">
                                    {phase.milestones.map((milestone: any, index: number) => (
                                      <div key={index} className="flex items-start space-x-3 p-3 bg-heritage-gold/5 rounded-lg">
                                        <FaGraduationCap className="w-5 h-5 text-heritage-gold mt-0.5" /> {/* Changed from FaMedal */}
                                        <div>
                                          <h5 className="font-ubuntu font-semibold text-gray-900">{milestone.title}</h5>
                                          <p className="text-sm text-gray-600 font-ubuntu">{milestone.description}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Cultural Practices */}
                              {phase.culturalPractices && phase.culturalPractices.length > 0 && (
                                <div>
                                  <h4 className="font-ubuntu font-semibold text-gray-900 mb-3">Cultural Practices</h4>
                                  <div className="space-y-3">
                                    {phase.culturalPractices.map((practice: any, index: number) => (
                                      <div key={index} className="p-3 border border-heritage-gold/20 rounded-lg">
                                        <h5 className="font-ubuntu font-semibold text-gray-900 mb-1">{practice.name}</h5>
                                        <p className="text-sm text-gray-600 font-ubuntu mb-2">{practice.description}</p>
                                        <div className="text-xs text-heritage-gold font-ubuntu">
                                          Origin: {practice.origin}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'figures' && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">
                      Historical Figures
                    </h3>
                    <p className="text-lg text-gray-600 font-ubuntu max-w-2xl mx-auto">
                      Meet the legendary leaders and visionaries whose wisdom and teachings guide this journey
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {path.culturalContext.keyFigures.map((figure: any, index: number) => (
                      <Card key={index} className="border-heritage-gold/20">
                        <CardContent className="p-6">
                          <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FaGraduationCap className="w-8 h-8 text-heritage-gold" /> {/* Changed from FaCrown */}
                            </div>
                            <h4 className="text-xl font-ubuntu font-bold text-gray-900 mb-1">
                              {figure.name}
                            </h4>
                            <p className="text-heritage-gold font-ubuntu mb-2">{figure.title}</p>
                            <div className="text-sm text-gray-600 font-ubuntu">
                              {figure.period} • {figure.region}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h5 className="font-ubuntu font-semibold text-gray-900 mb-2">Key Contributions</h5>
                              <ul className="space-y-1">
                                {figure.contributions.map((contribution: string, idx: number) => (
                                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700 font-ubuntu">
                                    <div className="w-1 h-1 bg-heritage-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{contribution}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-ubuntu font-semibold text-gray-900 mb-2">Wisdom Quotes</h5>
                              <div className="space-y-3">
                                {figure.wisdomQuotes.map((quote: string, idx: number) => (
                                  <div key={idx} className="bg-heritage-gold/5 p-3 rounded-lg">
                                    <div className="flex items-start space-x-2">
                                      <FaQuestionCircle className="w-4 h-4 text-heritage-gold mt-0.5 flex-shrink-0" />
                                      <p className="text-sm text-gray-700 font-ubuntu italic">"{quote}"</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 className="font-ubuntu font-semibold text-gray-900 mb-2">Biography</h5>
                              <p className="text-sm text-gray-700 font-ubuntu leading-relaxed">
                                {figure.biography}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'community' && (
                <div className="space-y-8">
                  <Card className="border-heritage-gold/20">
                    <CardHeader>
                      <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                        Community Features
                      </CardTitle>
                      <CardDescription className="font-ubuntu">
                        Connect with fellow journeyers and share insights
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {path.communityFeatures.map((feature: any, index: number) => (
                          <div key={index} className="text-center p-6 bg-gradient-to-br from-heritage-gold/10 to-terracotta-500/10 rounded-lg">
                            <FaUsers className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                            <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 font-ubuntu mb-3">{feature.description}</p>
                            <div className="text-sm text-heritage-gold font-ubuntu">
                              {feature.frequency} • {feature.participants}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'resources' && (
                <div className="space-y-8">
                  <Card className="border-heritage-gold/20">
                    <CardHeader>
                      <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                        Journey Resources
                      </CardTitle>
                      <CardDescription className="font-ubuntu">
                        Download materials and access additional content
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {path.resources?.map((resource: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FaDownload className="w-5 h-5 text-heritage-gold" />
                              <div>
                                <h4 className="font-ubuntu font-semibold text-gray-900">{resource.title}</h4>
                                <p className="text-sm text-gray-600 font-ubuntu">{resource.description}</p>
                                <p className="text-xs text-heritage-gold font-ubuntu">{resource.culturalContext}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-gray-600 font-ubuntu">{resource.fileSize}</span>
                              <Button variant="outline" size="sm" className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10">
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 