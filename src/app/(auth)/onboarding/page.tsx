import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your <span className="text-amber-600">Ubuntu Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let&apos;s personalize your learning experience and connect you with your heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-600">Personal Information</CardTitle>
              <CardDescription>
                Help us understand your background and interests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Where are you located?</Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  className="border-amber-300 focus:border-amber-500"
                  placeholder="City, Country"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age Range</Label>
                <select
                  id="age"
                  name="age"
                  className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Select your age range</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46-55">46-55</option>
                  <option value="56-65">56-65</option>
                  <option value="65+">65+</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">What do you do?</Label>
                <Input
                  id="occupation"
                  name="occupation"
                  type="text"
                  className="border-amber-300 focus:border-amber-500"
                  placeholder="Student, Professional, Entrepreneur, etc."
                />
              </div>
            </CardContent>
          </Card>

          {/* Learning Goals */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-600">Learning Goals</CardTitle>
              <CardDescription>
                What brings you to Asante?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Select your primary interests (choose up to 3):</Label>
                <div className="space-y-2">
                  {[
                    "Connect with African heritage and culture",
                    "Learn traditional wisdom and philosophy",
                    "Build community and relationships",
                    "Personal growth and transformation",
                    "Spiritual development",
                    "Family and ancestral connection",
                    "Leadership and community impact",
                    "Creative expression and storytelling"
                  ].map((interest, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`interest-${index}`}
                        name="interests"
                        type="checkbox"
                        value={interest}
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-gray-900">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Heritage Connection */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-600">Heritage Connection</CardTitle>
              <CardDescription>
                Tell us about your ancestral background
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ancestral-region">Primary Ancestral Region</Label>
                <select
                  id="ancestral-region"
                  name="ancestral-region"
                  className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Select your primary ancestral region</option>
                  <option value="west-africa">West Africa</option>
                  <option value="east-africa">East Africa</option>
                  <option value="south-africa">South Africa</option>
                  <option value="north-africa">North Africa</option>
                  <option value="central-africa">Central Africa</option>
                  <option value="multiple">Multiple regions</option>
                  <option value="unknown">Unknown/Exploring</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="family-traditions">Family Traditions</Label>
                <textarea
                  id="family-traditions"
                  name="family-traditions"
                  rows={3}
                  className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="What traditions or cultural practices are important in your family?"
                />
              </div>
            </CardContent>
          </Card>

          {/* Community Preferences */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-600">Community Preferences</CardTitle>
              <CardDescription>
                How would you like to engage with the community?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Community engagement preferences:</Label>
                <div className="space-y-2">
                  {[
                    "Join discussion circles",
                    "Participate in virtual events",
                    "Connect with mentors",
                    "Share stories and experiences",
                    "Learn from others' journeys",
                    "Contribute to community projects"
                  ].map((preference, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`preference-${index}`}
                        name="preferences"
                        type="checkbox"
                        value={preference}
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`preference-${index}`} className="ml-2 text-sm text-gray-900">
                        {preference}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-3 text-lg">
            Complete Setup & Begin Journey
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            You can always update these preferences later in your profile settings
          </p>
        </div>
      </div>
    </div>
  );
} 