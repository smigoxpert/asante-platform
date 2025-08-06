"use client";

import { useState, useEffect } from "react";
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
  FaSave
} from "react-icons/fa";
import { courseTemplates } from "@/lib/course-templates";

// Define the course template interface locally to avoid import issues
interface CourseLesson {
  id: string;
  title: string;
  description: string;
  contentType: string;
  duration: string;
  keyTopics: string[];
}

interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: CourseLesson[];
}

interface CourseTemplate {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  culturalRegion: string;
  difficulty: string;
  duration: string;
  rating: number;
  totalRatings: number;
  enrollmentCount: number;
  price: string;
  features: string[];
  learningOutcomes: string[];
  prerequisites: string[];
  culturalContext: {
    region: string;
    historicalPeriod: string;
    modernRelevance: string;
  };
  modules: CourseModule[];
}

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  
  const [course, setCourse] = useState<CourseTemplate | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState({
    completedLessons: 0,
    totalLessons: 0,
    overallProgress: 0,
    currentModule: 0,
    currentLesson: 0
  });
  const [notes, setNotes] = useState("");
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  // Hardcoded course data for testing
  const courseData: CourseTemplate = {
    id: "ancestral-wisdom-foundations",
    title: "Ancestral Wisdom Foundations",
    description: "Discover the power of storytelling and oral traditions passed down through generations",
    longDescription: "This comprehensive course explores the rich traditions of ancestral wisdom, focusing on storytelling, oral history, and cultural memory techniques that have been preserved and passed down through generations. You'll learn how to connect with your heritage through traditional practices and modern applications.",
    category: "Cultural Heritage",
    culturalRegion: "West Africa",
    difficulty: "Beginner",
    duration: "32.5 hours",
    rating: 4.8,
    totalRatings: 1247,
    enrollmentCount: 15420,
    price: "Free",
    features: [
      "Storytelling Mastery",
      "Oral History Preservation", 
      "Cultural Memory Techniques",
      "Community Building",
      "Ancestral Connection",
      "Modern Applications"
    ],
    learningOutcomes: [
      "Master traditional storytelling techniques and oral history preservation",
      "Develop skills in cultural memory and heritage documentation",
      "Build stronger connections with ancestral wisdom and traditions",
      "Create community-based cultural preservation projects",
      "Apply traditional wisdom to modern life and challenges",
      "Foster intergenerational knowledge sharing and learning"
    ],
    prerequisites: [
      "Interest in cultural heritage and storytelling",
      "Openness to learning traditional practices",
      "Commitment to community building and knowledge sharing"
    ],
    culturalContext: {
      region: "West Africa (Ghana, Nigeria, Senegal, Mali)",
      historicalPeriod: "Ancient to Contemporary",
      modernRelevance: "Preserves cultural identity while fostering modern community connections and personal growth"
    },
    modules: [
      {
        id: "module-1",
        title: "The Foundation of Ancestral Wisdom",
        description: "Understanding the core principles and importance of ancestral knowledge",
        duration: "6 hours",
        lessons: [
          {
            id: "lesson-1-1",
            title: "What is Ancestral Wisdom?",
            description: "Exploring the definition and significance of ancestral knowledge in African cultures",
            contentType: "video",
            duration: "45 minutes",
            keyTopics: [
              "Definition of ancestral wisdom",
              "Cultural significance",
              "Modern relevance",
              "Personal connection"
            ]
          },
          {
            id: "lesson-1-2", 
            title: "The Role of Storytelling",
            description: "Understanding how storytelling preserves and transmits cultural knowledge",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Oral tradition",
              "Narrative techniques",
              "Cultural preservation",
              "Community engagement"
            ]
          }
        ]
      },
      {
        id: "module-2",
        title: "Traditional Storytelling Techniques",
        description: "Learning the art of traditional African storytelling",
        duration: "8 hours",
        lessons: [
          {
            id: "lesson-2-1",
            title: "Elements of African Storytelling",
            description: "Understanding the key components that make African stories powerful",
            contentType: "video",
            duration: "75 minutes",
            keyTopics: [
              "Character development",
              "Plot structure",
              "Moral lessons",
              "Cultural context"
            ]
          }
        ]
      }
    ]
  };

  useEffect(() => {
    console.log('Component mounted, courseId:', courseId);
    
    // Import course templates dynamically to avoid import issues
    const foundCourse = courseTemplates.find((c: any) => c.id === courseId);
    console.log('Found course:', foundCourse);
    
    if (foundCourse) {
      console.log('Setting course:', foundCourse.title);
      setCourse(foundCourse);
      // Calculate total lessons
      const totalLessons = foundCourse.modules.reduce((acc: number, module: any) => 
        acc + module.lessons.length, 0
      );
      setProgress(prev => ({
        ...prev,
        totalLessons,
        overallProgress: Math.round((prev.completedLessons / totalLessons) * 100)
      }));
    } else {
      console.log('Course not found, falling back to hardcoded data');
      // Fallback to hardcoded course for ancestral-wisdom-foundations
      if (courseId === "ancestral-wisdom-foundations") {
        setCourse(courseData);
        const totalLessons = courseData.modules.reduce((acc, module) => 
          acc + module.lessons.length, 0
        );
        setProgress(prev => ({
          ...prev,
          totalLessons,
          overallProgress: Math.round((prev.completedLessons / totalLessons) * 100)
        }));
      }
    }
  }, [courseId]);

  if (!course) {
    return (
      <AuthenticatedLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-ubuntu font-bold text-gray-900 mb-4">Course Not Found</h2>
            <p className="text-gray-600 mb-4">Course ID: {courseId}</p>
            <Button onClick={() => router.push('/courses')} className="heritage-gradient">
              Back to Courses
            </Button>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  }

  const handleLessonClick = (moduleIndex: number, lessonIndex: number) => {
    const moduleId = course.modules[moduleIndex]?.id;
    if (moduleId) {
      setExpandedModules(new Set([moduleId]));
    }
    setProgress(prev => ({
      ...prev,
      currentModule: moduleIndex,
      currentLesson: lessonIndex
    }));
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
      default: return <FaBook className="w-4 h-4" />;
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen bg-gradient-to-br from-heritage-gold/5 via-white to-terracotta-500/5">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-heritage-gold/20 via-orange-600/20 to-red-600/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Course Info */}
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-heritage-gold/90 text-white">
                  {course.category}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-ubuntu font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 font-ubuntu mb-6">
                  {course.description}
                </p>
                
                {/* Course Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <FaStar className="w-5 h-5 text-heritage-gold" />
                    <span className="font-ubuntu font-semibold">{course.rating}</span>
                    <span className="text-gray-600">({course.totalRatings} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="w-5 h-5 text-heritage-gold" />
                    <span className="font-ubuntu font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="w-5 h-5 text-heritage-gold" />
                    <span className="font-ubuntu font-semibold">{course.enrollmentCount.toLocaleString()}</span>
                    <span className="text-gray-600">enrolled</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-ubuntu font-medium text-gray-700">Your Progress</span>
                    <span className="font-ubuntu font-semibold text-heritage-gold">{progress.overallProgress}%</span>
                  </div>
                  <Progress value={progress.overallProgress} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2">
                    {progress.completedLessons} of {progress.totalLessons} lessons completed
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button className="heritage-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-ubuntu font-semibold">
                    <FaPlay className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                  <Button variant="outline" className="border-2 border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold transition-all duration-300 font-ubuntu">
                    <FaHeart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="border-2 border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold transition-all duration-300 font-ubuntu">
                    <FaShare className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Course Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-heritage-gold/20 to-heritage-bronze/20 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-heritage-gold">
                      <FaGraduationCap />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-heritage-gold/90 text-white">
                      {course.price}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview', icon: FaBook },
                { id: 'curriculum', label: 'Curriculum', icon: FaGraduationCap },
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
                {/* Course Overview */}
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-heritage-gold/20">
                    <CardHeader>
                      <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                        What You'll Learn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.learningOutcomes.map((outcome: string, index: number) => (
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
                        Course Description
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none font-ubuntu text-gray-700">
                        {course.longDescription}
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
                          <p className="text-gray-700">{course.culturalContext.region}</p>
                        </div>
                        <div>
                          <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Historical Period</h4>
                          <p className="text-gray-700">{course.culturalContext.historicalPeriod}</p>
                        </div>
                        <div>
                          <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Modern Relevance</h4>
                          <p className="text-gray-700">{course.culturalContext.modernRelevance}</p>
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
                        Course Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {course.features.map((feature: string, index: number) => (
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
                        {course.prerequisites.map((prereq: string, index: number) => (
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

            {activeTab === 'curriculum' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-ubuntu font-bold text-gray-900">
                    Course Curriculum
                  </h3>
                  <div className="text-sm text-gray-600 font-ubuntu">
                    {course.modules.length} modules • {progress.totalLessons} lessons
                  </div>
                </div>

                <div className="space-y-4">
                  {course.modules.map((module: any, moduleIndex: number) => (
                    <Card key={moduleIndex} className="border-heritage-gold/20">
                      <CardHeader 
                        className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => {
                          const moduleId = module.id;
                          const newExpandedModules = new Set(expandedModules);
                          if (newExpandedModules.has(moduleId)) {
                            newExpandedModules.delete(moduleId);
                          } else {
                            newExpandedModules.add(moduleId);
                          }
                          setExpandedModules(newExpandedModules);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                              <span className="font-ubuntu font-bold text-heritage-gold">{moduleIndex + 1}</span>
                            </div>
                            <div>
                              <CardTitle className="text-lg font-ubuntu font-bold text-gray-900">
                                {module.title}
                              </CardTitle>
                              <CardDescription className="font-ubuntu text-gray-600">
                                {module.lessons.length} lessons • {module.duration}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-600 font-ubuntu">
                              {module.lessons.filter((l: any) => l.completed).length}/{module.lessons.length} completed
                            </div>
                            {expandedModules.has(module.id) ? (
                              <FaChevronLeft className="w-4 h-4 text-gray-500" />
                            ) : (
                              <FaChevronRight className="w-4 h-4 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      
                      {expandedModules.has(module.id) && (
                        <CardContent>
                          <div className="space-y-3">
                            {module.lessons.map((lesson: any, lessonIndex: number) => (
                                                             <div 
                                 key={lessonIndex}
                                 className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                 onClick={() => router.push(`/courses/${courseId}/lesson/${lesson.id}`)}
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
                        </CardContent>
                      )}
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
                      Course Community
                    </CardTitle>
                    <CardDescription className="font-ubuntu">
                      Connect with fellow learners and share insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-gradient-to-br from-heritage-gold/10 to-terracotta-500/10 rounded-lg">
                        <FaUsers className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                        <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Discussion Forums</h4>
                        <p className="text-gray-600 font-ubuntu">Join conversations about course topics</p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-heritage-gold/10 to-terracotta-500/10 rounded-lg">
                        <FaComments className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                        <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Study Groups</h4>
                        <p className="text-gray-600 font-ubuntu">Form study groups with peers</p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-heritage-gold/10 to-terracotta-500/10 rounded-lg">
                        <FaHandsHelping className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                        <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Peer Support</h4>
                        <p className="text-gray-600 font-ubuntu">Help and get help from others</p>
                      </div>
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
                      Course Resources
                    </CardTitle>
                    <CardDescription className="font-ubuntu">
                      Download materials and access additional content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <FaDownload className="w-12 h-12 text-heritage-gold/50 mx-auto mb-4" />
                        <h4 className="font-ubuntu font-semibold text-gray-900 mb-2">Resources Coming Soon</h4>
                        <p className="text-gray-600 font-ubuntu">Course materials and additional resources will be available here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 