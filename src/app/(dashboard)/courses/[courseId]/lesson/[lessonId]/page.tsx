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
  FaPause, 
  FaStepForward, 
  FaStepBackward,
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

interface LessonProgress {
  completed: boolean;
  timeSpent: number;
  notes: string;
  reflections: string[];
}

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;
  
  const [course, setCourse] = useState<any>(null);
  const [lesson, setLesson] = useState<any>(null);
  const [module, setModule] = useState<any>(null);
  const [progress, setProgress] = useState<LessonProgress>({
    completed: false,
    timeSpent: 0,
    notes: "",
    reflections: []
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionText, setReflectionText] = useState("");

  useEffect(() => {
    // Find the course and lesson
    const foundCourse = courseTemplates.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      
      // Find the lesson
      for (const courseModule of foundCourse.modules) {
        const foundLesson = courseModule.lessons.find((l: any) => l.id === lessonId);
        if (foundLesson) {
          setLesson(foundLesson);
          setModule(courseModule);
          break;
        }
      }
    }
  }, [courseId, lessonId]);

  if (!course || !lesson || !module) {
    return (
      <AuthenticatedLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-ubuntu font-bold text-gray-900 mb-4">Lesson Not Found</h2>
            <Button onClick={() => router.push(`/courses/${courseId}`)} className="heritage-gradient">
              Back to Course
            </Button>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  }

  const handleComplete = () => {
    setProgress(prev => ({
      ...prev,
      completed: true
    }));
  };

  const handleSaveNotes = () => {
    setProgress(prev => ({
      ...prev,
      notes: reflectionText
    }));
    setShowReflection(false);
  };

  const handleAddReflection = () => {
    if (reflectionText.trim()) {
      setProgress(prev => ({
        ...prev,
        reflections: [...prev.reflections, reflectionText]
      }));
      setReflectionText("");
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

  const getInteractiveElementIcon = (type: string) => {
    switch (type) {
      case 'quiz': return <FaQuestionCircle className="w-4 h-4" />;
      case 'discussion': return <FaComments className="w-4 h-4" />;
      case 'reflection': return <FaEdit className="w-4 h-4" />;
      case 'practice': return <FaHandsHelping className="w-4 h-4" />;
      default: return <FaLightbulb className="w-4 h-4" />;
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen bg-gradient-to-br from-heritage-gold/5 via-white to-terracotta-500/5">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm font-ubuntu">
              <button 
                onClick={() => router.push('/courses')}
                className="text-heritage-gold hover:text-heritage-gold/80 transition-colors"
              >
                Courses
              </button>
              <FaChevronRight className="w-3 h-3 text-gray-400" />
              <button 
                onClick={() => router.push(`/courses/${courseId}`)}
                className="text-heritage-gold hover:text-heritage-gold/80 transition-colors"
              >
                {course.title}
              </button>
              <FaChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-gray-600">{module.title}</span>
              <FaChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-gray-900 font-semibold">{lesson.title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Lesson Header */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-heritage-gold/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getContentTypeIcon(lesson.contentType)}
                    <Badge className="bg-heritage-gold/20 text-heritage-gold">
                      {lesson.contentType}
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-700">
                      {lesson.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    {progress.completed ? (
                      <Badge className="bg-green-100 text-green-800">
                        <FaCheck className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        In Progress
                      </Badge>
                    )}
                  </div>
                </div>

                <h1 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">
                  {lesson.title}
                </h1>
                <p className="text-lg text-gray-600 font-ubuntu mb-6">
                  {lesson.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-ubuntu font-medium text-gray-700">Lesson Progress</span>
                    <span className="font-ubuntu font-semibold text-heritage-gold">
                      {progress.completed ? '100%' : '0%'}
                    </span>
                  </div>
                  <Progress value={progress.completed ? 100 : 0} className="h-3" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="heritage-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-ubuntu font-semibold"
                    onClick={handleComplete}
                    disabled={progress.completed}
                  >
                    <FaCheck className="w-4 h-4 mr-2" />
                    {progress.completed ? 'Completed' : 'Mark as Complete'}
                  </Button>
                  <Button variant="outline" className="border-2 border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold transition-all duration-300 font-ubuntu">
                    <FaShare className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Lesson Content */}
              <Card className="border-heritage-gold/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                    Lesson Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Content Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-heritage-gold/10 to-terracotta-500/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="text-6xl text-heritage-gold mb-4">
                        {getContentTypeIcon(lesson.contentType)}
                      </div>
                      <h3 className="text-xl font-ubuntu font-semibold text-gray-900 mb-2">
                        {lesson.contentType === 'video' ? 'Video Lesson' :
                         lesson.contentType === 'audio' ? 'Audio Lesson' :
                         lesson.contentType === 'text' ? 'Text Lesson' :
                         'Interactive Lesson'}
                      </h3>
                      <p className="text-gray-600 font-ubuntu">
                        Content will be displayed here
                      </p>
                    </div>
                  </div>

                  {/* Key Topics */}
                  <div className="mb-6">
                    <h4 className="text-lg font-ubuntu font-semibold text-gray-900 mb-3">
                      Key Topics Covered
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {lesson.keyTopics.map((topic: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-heritage-gold rounded-full"></div>
                          <span className="font-ubuntu text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  {lesson.interactiveElements && lesson.interactiveElements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-ubuntu font-semibold text-gray-900 mb-3">
                        Interactive Elements
                      </h4>
                      <div className="space-y-3">
                        {lesson.interactiveElements.map((element: any, index: number) => (
                          <Card key={index} className="border-heritage-gold/20">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-3 mb-2">
                                {getInteractiveElementIcon(element.type)}
                                <Badge className="bg-heritage-gold/20 text-heritage-gold">
                                  {element.type}
                                </Badge>
                              </div>
                              <h5 className="font-ubuntu font-semibold text-gray-900 mb-1">
                                {element.title}
                              </h5>
                              <p className="text-gray-600 font-ubuntu text-sm">
                                {element.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Elder Wisdom */}
                  {lesson.elderWisdom && (
                    <div className="bg-gradient-to-br from-heritage-gold/10 to-terracotta-500/10 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                          <FaLightbulb className="w-6 h-6 text-heritage-gold" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-ubuntu font-semibold text-gray-900 mb-2">
                            Elder Wisdom
                          </h4>
                          <p className="text-gray-700 font-ubuntu italic mb-3">
                            "{lesson.elderWisdom.wisdomQuote}"
                          </p>
                          <div className="text-sm text-gray-600 font-ubuntu">
                            <p><strong>{lesson.elderWisdom.elderName}</strong> - {lesson.elderWisdom.culturalBackground}</p>
                            <p className="mt-1">{lesson.elderWisdom.context}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Notes and Reflections */}
              <Card className="border-heritage-gold/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900">
                    Your Notes & Reflections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Notes */}
                    <div>
                      <h4 className="text-lg font-ubuntu font-semibold text-gray-900 mb-3">
                        Personal Notes
                      </h4>
                      <textarea
                        value={progress.notes}
                        onChange={(e) => setProgress(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="Write your notes and insights here..."
                        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold/20 focus:border-heritage-gold transition-all duration-300 font-ubuntu resize-none"
                      />
                      <Button 
                        className="mt-2 heritage-gradient"
                        onClick={() => {/* Save notes */}}
                      >
                        <FaSave className="w-4 h-4 mr-2" />
                        Save Notes
                      </Button>
                    </div>

                    {/* Reflections */}
                    <div>
                      <h4 className="text-lg font-ubuntu font-semibold text-gray-900 mb-3">
                        Reflections
                      </h4>
                      {progress.reflections.map((reflection, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 mb-3">
                          <p className="font-ubuntu text-gray-700">{reflection}</p>
                        </div>
                      ))}
                      
                      {showReflection ? (
                        <div className="space-y-3">
                          <textarea
                            value={reflectionText}
                            onChange={(e) => setReflectionText(e.target.value)}
                            placeholder="Share your reflection on this lesson..."
                            className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold/20 focus:border-heritage-gold transition-all duration-300 font-ubuntu resize-none"
                          />
                          <div className="flex space-x-2">
                            <Button 
                              className="heritage-gradient"
                              onClick={handleAddReflection}
                            >
                              <FaEdit className="w-4 h-4 mr-2" />
                              Add Reflection
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => setShowReflection(false)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Button 
                          variant="outline"
                          className="border-2 border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold transition-all duration-300 font-ubuntu"
                          onClick={() => setShowReflection(true)}
                        >
                          <FaEdit className="w-4 h-4 mr-2" />
                          Add Reflection
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info */}
              <Card className="border-heritage-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                    Course Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-ubuntu font-semibold text-gray-900 mb-1">Course</h5>
                      <p className="text-gray-600 font-ubuntu">{course.title}</p>
                    </div>
                    <div>
                      <h5 className="font-ubuntu font-semibold text-gray-900 mb-1">Module</h5>
                      <p className="text-gray-600 font-ubuntu">{module.title}</p>
                    </div>
                    <div>
                      <h5 className="font-ubuntu font-semibold text-gray-900 mb-1">Duration</h5>
                      <p className="text-gray-600 font-ubuntu">{lesson.duration}</p>
                    </div>
                    <div>
                      <h5 className="font-ubuntu font-semibold text-gray-900 mb-1">Type</h5>
                      <Badge className="bg-heritage-gold/20 text-heritage-gold">
                        {lesson.contentType}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <Card className="border-heritage-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                    Lesson Navigation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 hover:border-heritage-gold transition-all duration-300 font-ubuntu"
                      onClick={() => {/* Navigate to previous lesson */}}
                    >
                      <FaStepBackward className="w-4 h-4 mr-2" />
                      Previous Lesson
                    </Button>
                    <Button 
                      className="w-full heritage-gradient"
                      onClick={() => {/* Navigate to next lesson */}}
                    >
                      Next Lesson
                      <FaStepForward className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              {course.resources && course.resources.length > 0 && (
                <Card className="border-heritage-gold/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                      Course Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {course.resources.map((resource: any) => (
                        <div key={resource.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FaDownload className="w-4 h-4 text-heritage-gold" />
                            <div>
                              <h5 className="font-ubuntu font-semibold text-gray-900 text-sm">{resource.title}</h5>
                              <p className="text-xs text-gray-600 font-ubuntu">{resource.fileSize}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 