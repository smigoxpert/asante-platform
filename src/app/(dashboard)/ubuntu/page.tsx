import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function UbuntuDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, <span className="text-amber-600">Ubuntu Warrior</span>
          </h1>
          <p className="text-xl text-gray-600">
            "I am because we are" - Continue your transformational journey
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Days on Journey</p>
                  <p className="text-2xl font-bold text-amber-600">42</p>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 text-xl">🌅</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Wisdom Paths</p>
                  <p className="text-2xl font-bold text-amber-600">3</p>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 text-xl">🛤️</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Community Circles</p>
                  <p className="text-2xl font-bold text-amber-600">7</p>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 text-xl">👥</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Impact Score</p>
                  <p className="text-2xl font-bold text-amber-600">89</p>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 text-xl">🌟</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Journey */}
          <div className="lg:col-span-2">
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Your Current Journey</CardTitle>
                <CardDescription>
                  Continue where you left off in your wisdom path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900">Ancestral Wisdom Foundations</h3>
                    <p className="text-gray-600 mb-3">Module 3: The Power of Storytelling</p>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Continue Learning
                    </Button>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900">Ubuntu Leadership</h3>
                    <p className="text-gray-600 mb-3">Module 1: Community-Centered Leadership</p>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                      Resume Path
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Daily Reflection */}
          <div>
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Daily Reflection</CardTitle>
                <CardDescription>
                  Today's wisdom question
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 italic">
                    "How have I contributed to the well-being of my community today?"
                  </p>
                  <textarea
                    placeholder="Share your thoughts..."
                    className="w-full p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    rows={4}
                  />
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Save Reflection
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Community Activity */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-600">Community Activity</CardTitle>
              <CardDescription>
                Recent discussions and connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                  <div className="h-10 w-10 bg-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Amina shared a story</p>
                    <p className="text-sm text-gray-600">in Ancestral Wisdom Circle</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                  <div className="h-10 w-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">K</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Kwame started a discussion</p>
                    <p className="text-sm text-gray-600">in Ubuntu Leadership Circle</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-amber-300 text-amber-600 hover:bg-amber-50">
                  View All Activity
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Paths */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-600">Recommended for You</CardTitle>
              <CardDescription>
                Based on your interests and journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-amber-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Healing Through Ancestral Medicine</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Discover traditional healing practices and their modern applications
                  </p>
                  <Button size="sm" variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
                    Explore Path
                  </Button>
                </div>
                <div className="p-4 border border-amber-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Ubuntu</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Applying Ubuntu principles in the digital age and social media
                  </p>
                  <Button size="sm" variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
                    Explore Path
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 