"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Globe, 
  ArrowLeft
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Logo size="lg" />
              <Link href="/" className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/login">
                <Button variant="ghost" className="font-ubuntu">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="font-ubuntu">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-heritage-gold/5 via-orange-500/5 to-red-600/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 font-ubuntu">
                About Asante
              </Badge>
              <h1 className="text-5xl md:text-6xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                Our Mission & Vision
              </h1>
              <p className="text-xl text-muted-foreground font-ubuntu leading-relaxed">
                Asante is more than a platform—it&apos;s a movement to reconnect people with their African heritage, 
                Ubuntu philosophy, and the wisdom of their ancestors.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-ubuntu font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 font-ubuntu">
                  To create a global community where individuals can discover their ancestral roots, 
                  learn from traditional African wisdom, and build meaningful connections that honor 
                  the Ubuntu principle: &ldquo;I am because we are.&rdquo;
                </p>
                <p className="text-lg text-muted-foreground mb-8 font-ubuntu">
                  We believe that understanding our heritage is essential to personal growth, 
                  community building, and creating positive change in the world.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="font-ubuntu">
                    <Heart className="w-4 h-4 mr-2" />
                    Community First
                  </Badge>
                  <Badge variant="outline" className="font-ubuntu">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Wisdom Sharing
                  </Badge>
                  <Badge variant="outline" className="font-ubuntu">
                    <Globe className="w-4 h-4 mr-2" />
                    Global Reach
                  </Badge>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-heritage-gold/20 via-orange-500/20 to-red-600/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌍</div>
                    <p className="text-lg font-ubuntu text-muted-foreground">
                      Connecting the African Diaspora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-background to-background/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-ubuntu font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-ubuntu">
                These principles guide everything we do at Asante
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-heritage-gold/20 hover:border-heritage-gold/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-heritage-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <CardTitle className="font-ubuntu">Ubuntu</CardTitle>
                  <CardDescription className="font-ubuntu">
                    We believe in the interconnectedness of all people
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-ubuntu">
                    &ldquo;I am because we are&rdquo; - this ancient African philosophy guides our approach 
                    to community building and personal growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-heritage-gold/20 hover:border-heritage-gold/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-heritage-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <CardTitle className="font-ubuntu">Wisdom</CardTitle>
                  <CardDescription className="font-ubuntu">
                    Honoring traditional knowledge and ancestral wisdom
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-ubuntu">
                    We preserve and share the wisdom of African traditions, 
                    making ancient knowledge accessible to modern seekers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-heritage-gold/20 hover:border-heritage-gold/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-heritage-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <CardTitle className="font-ubuntu">Community</CardTitle>
                  <CardDescription className="font-ubuntu">
                    Building supportive, inclusive spaces for growth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-ubuntu">
                    We create safe spaces where people can connect, learn, 
                    and grow together in authentic community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-ubuntu font-bold mb-6">
                Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-ubuntu">
                Passionate individuals dedicated to reconnecting people with their heritage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-heritage-gold/20">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-heritage-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-ubuntu font-semibold mb-2">Kwame Osei</h3>
                  <p className="text-muted-foreground font-ubuntu mb-4">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground font-ubuntu">
                    Passionate about connecting the African diaspora through technology and culture.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-heritage-gold/20">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-heritage-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👩‍💻</span>
                  </div>
                  <h3 className="text-xl font-ubuntu font-semibold mb-2">Amina Johnson</h3>
                  <p className="text-muted-foreground font-ubuntu mb-4">Head of Community</p>
                  <p className="text-sm text-muted-foreground font-ubuntu">
                    Building meaningful connections and fostering Ubuntu circles worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-heritage-gold/20">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-heritage-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍🎓</span>
                  </div>
                  <h3 className="text-xl font-ubuntu font-semibold mb-2">Dr. Zara Mbeki</h3>
                  <p className="text-muted-foreground font-ubuntu mb-4">Cultural Director</p>
                  <p className="text-sm text-muted-foreground font-ubuntu">
                    Ensuring authentic representation of African cultures and traditions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-ubuntu font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-ubuntu">
              Be part of a global movement to reconnect people with their heritage 
              and build stronger, more connected communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="font-ubuntu text-lg px-8 py-3">
                  Start Your Journey
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-ubuntu text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border/40 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Logo size="lg" />
            <p className="text-muted-foreground mt-4 font-ubuntu">
              © 2024 Asante Platform. All rights reserved. &ldquo;I am because we are&rdquo; - Ubuntu Philosophy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 