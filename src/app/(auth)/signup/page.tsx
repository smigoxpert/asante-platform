import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join <span className="text-amber-600">Asante</span>
          </h1>
          <p className="text-gray-600">
            Begin your Ubuntu journey today
          </p>
        </div>

        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-center text-amber-600">Create Your Account</CardTitle>
            <CardDescription className="text-center">
              Start your transformational learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="border-amber-300 focus:border-amber-500"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="border-amber-300 focus:border-amber-500"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="border-amber-300 focus:border-amber-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="border-amber-300 focus:border-amber-500"
                  placeholder="Create a password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="border-amber-300 focus:border-amber-500"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="heritage">Heritage Background (Optional)</Label>
                <select
                  id="heritage"
                  name="heritage"
                  className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Select your heritage background</option>
                  <option value="west-african">West African</option>
                  <option value="east-african">East African</option>
                  <option value="south-african">South African</option>
                  <option value="north-african">North African</option>
                  <option value="central-african">Central African</option>
                  <option value="diaspora">African Diaspora</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <Link href="/terms" className="font-medium text-amber-600 hover:text-amber-500">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="font-medium text-amber-600 hover:text-amber-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                  I would like to receive updates about new wisdom paths and community events
                </label>
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Create Account
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
                  Google
                </Button>
                <Button variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
                  Apple
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-amber-600 hover:text-amber-500">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 