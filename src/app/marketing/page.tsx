import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { FaStar, FaMagic } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

export default function MarketingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 african-sunset opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
      
      {/* Floating Cultural Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-heritage-gold/20 rounded-full cultural-float blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-terracotta-500/30 rounded-full cultural-float blur-lg" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-ochre-500/25 rounded-full cultural-float blur-md" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-heritage-bronze/20 rounded-full cultural-float blur-lg" style={{animationDelay: '6s'}}></div>
      
      {/* Traditional Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto text-center">
            {/* Header Icon */}
            <div className="flex justify-center mb-8 group">
              <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Logo size="xl" showText={false} />
              </div>
            </div>

            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-ubuntu font-bold mb-6 text-balance">
                <span className="bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-lg shadow-black/50 ubuntu-pulse font-extrabold">Asante</span>
                <br />
                <span className="text-2xl md:text-3xl font-ubuntu font-light text-white/90">
                  "I am because we are"
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-ubuntu font-light">
                An African-centered transformational learning platform that connects you with your heritage, 
                wisdom traditions, and community for personal and collective growth.
              </p>
            </div>
            
            {/* Inspirational Quote */}
            <div className="mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-2xl mx-auto hover:bg-white/15 hover:border-white/30 transition-all duration-500 group">
              <p className="text-white/80 text-lg italic font-ubuntu group-hover:text-white/90 transition-colors duration-300">
                "The quality of being human shows itself through Ubuntu" - Desmond Tutu
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="heritage-gradient hover:shadow-2xl hover:shadow-heritage-gold/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-ubuntu font-semibold text-white px-8 py-4 text-lg group"
              >
                <Link href="/signup" className="flex items-center space-x-2">
                  <span>Begin Your Journey</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm px-8 py-4 text-lg font-ubuntu font-medium transition-all duration-300 bg-transparent hover:scale-105 hover:-translate-y-1 group"
              >
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-3 text-balance">
                Discover Your Ubuntu Path
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-ubuntu font-light">
                Four interconnected pillars that guide your transformational journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="backdrop-blur-xl bg-white/95 border-white/30 shadow-xl heritage-glow hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-heritage-gold/20 transition-all duration-500 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="inline-block p-2 rounded-full heritage-gradient mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg className="w-5 h-5 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-heritage-gold font-ubuntu font-bold text-lg group-hover:text-heritage-bronze transition-colors duration-300">Ubuntu Dashboard</CardTitle>
                  <CardDescription className="font-ubuntu group-hover:text-gray-600 transition-colors duration-300 text-sm">
                    Your personal space for reflection, growth tracking, and community connection
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 font-ubuntu group-hover:text-gray-800 transition-colors duration-300 text-sm">
                    Track your progress, set intentions, and connect with your inner wisdom through guided practices.
                  </p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full bg-heritage-gold/20 rounded-full h-1">
                      <div className="bg-heritage-gold h-1 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-xl bg-white/95 border-white/30 shadow-xl heritage-glow hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-heritage-gold/20 transition-all duration-500 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="inline-block p-2 rounded-full heritage-gradient mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg className="w-5 h-5 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-heritage-gold font-ubuntu font-bold text-lg group-hover:text-heritage-bronze transition-colors duration-300">Heritage Discovery</CardTitle>
                  <CardDescription className="font-ubuntu group-hover:text-gray-600 transition-colors duration-300 text-sm">
                    Explore your ancestral roots and cultural traditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 font-ubuntu group-hover:text-gray-800 transition-colors duration-300 text-sm">
                    Connect with your family history, cultural practices, and the wisdom of your ancestors.
                  </p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex justify-center space-x-1">
                      <div className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-xl bg-white/95 border-white/30 shadow-xl heritage-glow hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-heritage-gold/20 transition-all duration-500 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="inline-block p-2 rounded-full heritage-gradient mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg className="w-5 h-5 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      <path d="M10 14l-2-2 1.41-1.41L10 11.17l4.59-4.58L16 8l-6 6z" fill="rgba(255,255,255,0.8)"/>
                    </svg>
                  </div>
                  <CardTitle className="text-heritage-gold font-ubuntu font-bold text-lg group-hover:text-heritage-bronze transition-colors duration-300">Wisdom Paths</CardTitle>
                  <CardDescription className="font-ubuntu group-hover:text-gray-600 transition-colors duration-300 text-sm">
                    Curated learning journeys from African wisdom traditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 font-ubuntu group-hover:text-gray-800 transition-colors duration-300 text-sm">
                    Embark on transformative learning paths guided by African philosophy, spirituality, and practical wisdom.
                  </p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex justify-center space-x-2">
                      <div className="w-3 h-3 bg-heritage-gold rounded-full animate-ping"></div>
                      <div className="w-3 h-3 bg-heritage-gold rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-3 h-3 bg-heritage-gold rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-xl bg-white/95 border-white/30 shadow-xl heritage-glow hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-heritage-gold/20 transition-all duration-500 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="inline-block p-2 rounded-full heritage-gradient mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg className="w-5 h-5 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
                      <path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6.5h1.5V22h4z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-heritage-gold font-ubuntu font-bold text-lg group-hover:text-heritage-bronze transition-colors duration-300">Community Circles</CardTitle>
                  <CardDescription className="font-ubuntu group-hover:text-gray-600 transition-colors duration-300 text-sm">
                    Connect with like-minded learners and mentors
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 font-ubuntu group-hover:text-gray-800 transition-colors duration-300 text-sm">
                    Join supportive communities, participate in discussions, and learn from experienced mentors.
                  </p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-heritage-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-12 shadow-2xl hover:bg-white/15 hover:border-white/30 hover:shadow-3xl transition-all duration-500 group">
              <h2 className="text-4xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 text-balance group-hover:scale-105 transition-transform duration-300">
                Ready to Begin Your Transformational Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 font-ubuntu font-light group-hover:text-white transition-colors duration-300">
                Join thousands of learners who are discovering their Ubuntu path and creating positive change in their communities.
              </p>
              <Button 
                size="lg" 
                className="heritage-gradient hover:shadow-2xl hover:shadow-heritage-gold/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-ubuntu font-semibold text-white px-8 py-4 text-lg group"
              >
                <Link href="/signup" className="flex items-center space-x-2">
                  <span>Start Your Free Trial</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer Quote */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/70 text-sm font-ubuntu italic hover:text-white/90 transition-colors duration-300">
              "Ubuntu is the essence of being human. It speaks of the fact that my humanity is caught up and is inextricably bound up in yours." - Archbishop Desmond Tutu
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 