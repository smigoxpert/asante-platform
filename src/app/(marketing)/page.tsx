import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-amber-600">Asante</span>
              <br />
              <span className="text-2xl md:text-3xl font-medium text-gray-700">
                "I am because we are"
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An African-centered transformational learning platform that connects you with your heritage, 
              wisdom traditions, and community for personal and collective growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              <Link href="/signup">Begin Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Your Ubuntu Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four interconnected pillars that guide your transformational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-600">Ubuntu Dashboard</CardTitle>
                <CardDescription>
                  Your personal space for reflection, growth tracking, and community connection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track your progress, set intentions, and connect with your inner wisdom through guided practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-600">Heritage Discovery</CardTitle>
                <CardDescription>
                  Explore your ancestral roots and cultural traditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with your family history, cultural practices, and the wisdom of your ancestors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-600">Wisdom Paths</CardTitle>
                <CardDescription>
                  Curated learning journeys from African wisdom traditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Embark on transformative learning paths guided by African philosophy, spirituality, and practical wisdom.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-600">Community Circles</CardTitle>
                <CardDescription>
                  Connect with like-minded learners and mentors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join supportive communities, participate in discussions, and learn from experienced mentors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Transformational Journey?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of learners who are discovering their Ubuntu path and creating positive change in their communities.
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg">
            <Link href="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 