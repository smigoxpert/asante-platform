"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authService } from "@/lib/auth";
import { User } from "@/types";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

// Adinkra symbols for cultural elements
const ADINKRA_SYMBOLS = {
  sankofa: "🔄", // Return and get it
  gyeNyame: "🌟", // Except God
  akoma: "💝", // Heart
  adinkrahene: "👑", // Chief of adinkra symbols
  denkyem: "🐊", // Crocodile
  akofena: "⚔️", // Sword of war
  akomaNtoso: "💕", // Linked hearts
  nkonsonkonson: "🔗", // Chain link
  oheneAniwa: "👁️", // King's eyes
  akokonan: "🦅", // Eagle's talons
};

export default function DonatePage() {
  const [user, setUser] = useState<User | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [donationProgress, setDonationProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [recentDonations, setRecentDonations] = useState<any[]>([]);
  const [totalRaised, setTotalRaised] = useState(125000);
  const [goalAmount, setGoalAmount] = useState(200000);
  const [donorCount, setDonorCount] = useState(2847);
  const [showConfetti, setShowConfetti] = useState(false);

  // Dummy donation data similar to GoFundMe
  const dummyDonations = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      amount: 250,
      date: "2024-01-15T10:30:00Z",
      message: "Education is the key to unlocking potential. Happy to support this cause!",
      isAnonymous: false,
      tier: "supporter"
    },
    {
      id: 2,
      name: "Anonymous",
      avatar: "A",
      amount: 100,
      date: "2024-01-15T09:15:00Z",
      message: "Keep up the amazing work!",
      isAnonymous: true,
      tier: "supporter"
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "MC",
      amount: 500,
      date: "2024-01-15T08:45:00Z",
      message: "This is such an important mission. Proud to be part of this community.",
      isAnonymous: false,
      tier: "champion"
    },
    {
      id: 4,
      name: "Aisha Patel",
      avatar: "AP",
      amount: 75,
      date: "2024-01-15T07:20:00Z",
      message: "Every child deserves access to quality education. Thank you for making this possible!",
      isAnonymous: false,
      tier: "supporter"
    },
    {
      id: 5,
      name: "David Rodriguez",
      avatar: "DR",
      amount: 1000,
      date: "2024-01-14T22:10:00Z",
      message: "Inspired by the impact you're making. This donation is in honor of my grandmother who was a teacher.",
      isAnonymous: false,
      tier: "hero"
    },
    {
      id: 6,
      name: "Anonymous",
      avatar: "A",
      amount: 50,
      date: "2024-01-14T21:30:00Z",
      message: "Small contribution, big impact!",
      isAnonymous: true,
      tier: "supporter"
    },
    {
      id: 7,
      name: "Emma Thompson",
      avatar: "ET",
      amount: 300,
      date: "2024-01-14T20:15:00Z",
      message: "As a former teacher, I know how crucial education is. Keep inspiring the next generation!",
      isAnonymous: false,
      tier: "champion"
    },
    {
      id: 8,
      name: "Kwame Osei",
      avatar: "KO",
      amount: 150,
      date: "2024-01-14T19:45:00Z",
      message: "Supporting our future leaders. Ubuntu!",
      isAnonymous: false,
      tier: "supporter"
    },
    {
      id: 9,
      name: "Lisa Wang",
      avatar: "LW",
      amount: 200,
      date: "2024-01-14T18:20:00Z",
      message: "Education transforms lives. Happy to contribute to this meaningful cause.",
      isAnonymous: false,
      tier: "supporter"
    },
    {
      id: 10,
      name: "Anonymous",
      avatar: "A",
      amount: 25,
      date: "2024-01-14T17:55:00Z",
      message: "Every little bit helps!",
      isAnonymous: true,
      tier: "supporter"
    },
    {
      id: 11,
      name: "Robert Williams",
      avatar: "RW",
      amount: 750,
      date: "2024-01-14T16:30:00Z",
      message: "This is exactly the kind of initiative the world needs more of. Keep building bridges through education.",
      isAnonymous: false,
      tier: "hero"
    },
    {
      id: 12,
      name: "Fatima Hassan",
      avatar: "FH",
      amount: 125,
      date: "2024-01-14T15:45:00Z",
      message: "Education is a right, not a privilege. Thank you for making it accessible.",
      isAnonymous: false,
      tier: "supporter"
    },
    {
      id: 13,
      name: "James Anderson",
      avatar: "JA",
      amount: 400,
      date: "2024-01-14T14:20:00Z",
      message: "Inspired by the cultural heritage focus. This is how we preserve our stories for future generations.",
      isAnonymous: false,
      tier: "champion"
    },
    {
      id: 14,
      name: "Anonymous",
      avatar: "A",
      amount: 80,
      date: "2024-01-14T13:10:00Z",
      message: "Supporting from afar!",
      isAnonymous: true,
      tier: "supporter"
    },
    {
      id: 15,
      name: "Maria Garcia",
      avatar: "MG",
      amount: 600,
      date: "2024-01-14T12:35:00Z",
      message: "As an immigrant, I know the power of education. This work is changing lives.",
      isAnonymous: false,
      tier: "hero"
    },
    {
      id: 16,
      name: "Tyler Brown",
      avatar: "TB",
      amount: 90,
      date: "2024-01-14T11:50:00Z",
      message: "Great cause! Keep up the amazing work.",
      isAnonymous: false,
      tier: "supporter"
    },
    {
      id: 17,
      name: "Anonymous",
      avatar: "A",
      amount: 35,
      date: "2024-01-14T10:25:00Z",
      message: "Small donation, big heart!",
      isAnonymous: true,
      tier: "supporter"
    },
    {
      id: 18,
      name: "Nina Singh",
      avatar: "NS",
      amount: 275,
      date: "2024-01-14T09:40:00Z",
      message: "Education is the foundation of progress. Proud to support this initiative.",
      isAnonymous: false,
      tier: "champion"
    },
    {
      id: 19,
      name: "Carlos Mendez",
      avatar: "CM",
      amount: 120,
      date: "2024-01-14T08:15:00Z",
      message: "Building a better future, one student at a time.",
      isAnonymous: false,
      tier: "supporter"
    },
    {
      id: 20,
      name: "Anonymous",
      avatar: "A",
      amount: 45,
      date: "2024-01-14T07:30:00Z",
      message: "Keep inspiring!",
      isAnonymous: true,
      tier: "supporter"
    }
  ];
  
  const progressRef = useRef<HTMLDivElement>(null);
  const amountButtonsRef = useRef<HTMLDivElement>(null);

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };
    loadUser();

    // Initialize with dummy donations
    setRecentDonations(dummyDonations.slice(0, 10));

    // Animate progress bar on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBar();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getDonorTierColor = (tier: string) => {
    switch (tier) {
      case 'hero': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'champion': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'supporter': return 'bg-gradient-to-r from-heritage-gold to-orange-500';
      default: return 'bg-gradient-to-r from-heritage-gold to-orange-500';
    }
  };

  const animateProgressBar = () => {
    const progress = (totalRaised / goalAmount) * 100;
    setDonationProgress(progress);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    
    // Add haptic feedback animation
    const button = document.querySelector(`[data-amount="${amount}"]`);
    if (button) {
      button.classList.add("scale-105", "shadow-lg");
      setTimeout(() => {
        button.classList.remove("scale-105", "shadow-lg");
      }, 150);
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const calculateImpact = (amount: number) => {
    return {
      students: Math.floor(amount / 50),
      books: Math.floor(amount / 25),
      meals: Math.floor(amount / 10),
      uniforms: Math.floor(amount / 75),
    };
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) return;
    
    setShowPaymentModal(true);
  };

  const processDonation = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setShowPaymentModal(false);
    setShowSuccess(true);
    setShowConfetti(true);
    
    // Update totals
    const amount = selectedAmount || parseFloat(customAmount);
    setTotalRaised(prev => prev + amount);
    setDonorCount(prev => prev + 1);
    
    // Add to recent donations
    const newDonation = {
      id: Date.now(),
      name: user?.full_name || "Anonymous",
      amount,
      avatar: user?.full_name?.charAt(0) || "A",
      date: new Date().toISOString(),
      message: "Thank you for supporting education!",
      isAnonymous: false,
      tier: amount >= 500 ? 'hero' : amount >= 200 ? 'champion' : 'supporter'
    };
    
    setRecentDonations(prev => [newDonation, ...prev.slice(0, 9)]);
    
    // Reset form
    setSelectedAmount(null);
    setCustomAmount("");
    
    setTimeout(() => setShowConfetti(false), 5000);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const currentAmount = selectedAmount || parseFloat(customAmount) || 0;
  const impact = calculateImpact(currentAmount);

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* African Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl transform rotate-12">{ADINKRA_SYMBOLS.sankofa}</div>
          <div className="absolute top-32 right-20 text-4xl transform -rotate-12">{ADINKRA_SYMBOLS.gyeNyame}</div>
          <div className="absolute bottom-20 left-1/4 text-5xl transform rotate-45">{ADINKRA_SYMBOLS.akoma}</div>
          <div className="absolute bottom-40 right-1/3 text-3xl transform -rotate-30">{ADINKRA_SYMBOLS.adinkrahene}</div>
        </div>

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                {["🎉", "✨", "💫", "🌟", "💝"][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        )}

        <div className="relative z-10 px-6 py-8">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Hero Section */}
            <section className="text-center space-y-8">
              <div className="space-y-4 animate-in fade-in duration-1000">
                <h1 className="text-5xl md:text-7xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Support Education
                </h1>
                <p className="text-xl md:text-2xl font-ubuntu text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Join our mission to provide quality education and cultural heritage programs to communities across Africa. 
                  Every donation creates lasting impact.
                </p>
              </div>

              {/* Progress Bar */}
              <div ref={progressRef} className="max-w-4xl mx-auto space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-ubuntu font-semibold text-gray-700">
                    Raised: ${totalRaised.toLocaleString()}
                  </span>
                  <span className="text-lg font-ubuntu font-semibold text-gray-700">
                    Goal: ${goalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="relative">
                  <div className="h-4 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div 
                      className="h-full bg-gradient-to-r from-heritage-gold to-orange-600 rounded-full transition-all duration-2000 ease-out relative"
                      style={{ width: `${donationProgress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 right-0 bg-heritage-gold text-white px-3 py-1 rounded-full text-sm font-ubuntu font-semibold transform translate-x-1/2">
                    {Math.round((totalRaised / goalAmount) * 100)}%
                  </div>
                </div>
              </div>

              {/* Donor Statistics */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-heritage-gold/20 shadow-lg">
                    <div className="text-2xl font-ubuntu font-bold text-heritage-gold">
                      {donorCount.toLocaleString()}
                    </div>
                    <div className="text-sm font-ubuntu text-gray-600">
                      Donors
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-heritage-gold/20 shadow-lg">
                    <div className="text-2xl font-ubuntu font-bold text-heritage-gold">
                      ${Math.round(totalRaised / donorCount).toLocaleString()}
                    </div>
                    <div className="text-sm font-ubuntu text-gray-600">
                      Avg. Donation
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-heritage-gold/20 shadow-lg">
                    <div className="text-2xl font-ubuntu font-bold text-heritage-gold">
                      {Math.round((totalRaised / goalAmount) * 100)}%
                    </div>
                    <div className="text-sm font-ubuntu text-gray-600">
                      of Goal
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-heritage-gold/20 shadow-lg">
                    <div className="text-2xl font-ubuntu font-bold text-heritage-gold">
                      {Math.ceil((goalAmount - totalRaised) / (totalRaised / donorCount))}
                    </div>
                    <div className="text-sm font-ubuntu text-gray-600">
                      More Donors Needed
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Donation Amount Selection */}
            <section className="max-w-4xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-md border-heritage-gold/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">
                    Choose Your Impact
                  </CardTitle>
                  <CardDescription className="text-lg font-ubuntu text-gray-600">
                    Select an amount or enter a custom donation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Preset Amount Buttons */}
                  <div ref={amountButtonsRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {presetAmounts.map((amount, index) => (
                      <button
                        key={amount}
                        data-amount={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                          selectedAmount === amount
                            ? "border-heritage-gold bg-gradient-to-br from-heritage-gold/10 to-orange-100/50 shadow-lg scale-105"
                            : "border-gray-200 bg-white/50 hover:border-heritage-gold/50"
                        } animate-in fade-in slide-in-from-bottom duration-500`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-center space-y-2">
                          <div className="text-2xl font-ubuntu font-bold text-gray-900">
                            ${amount}
                          </div>
                          <div className="text-sm font-ubuntu text-gray-600">
                            {amount >= 100 ? "Major Impact" : amount >= 50 ? "Significant Impact" : "Meaningful Impact"}
                          </div>
                        </div>
                        {selectedAmount === amount && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-heritage-gold rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount Input */}
                  <div className="space-y-4">
                    <Label className="text-lg font-ubuntu font-semibold text-gray-900">
                      Or enter a custom amount
                    </Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-ubuntu font-bold text-gray-400">
                        $
                      </span>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="pl-12 pr-4 py-4 text-xl font-ubuntu border-2 border-gray-200 focus:border-heritage-gold focus:ring-heritage-gold/20 rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Impact Calculator */}
                  {currentAmount > 0 && (
                    <div className="bg-gradient-to-r from-heritage-gold/10 to-orange-100/30 rounded-2xl p-6 border border-heritage-gold/20 animate-in fade-in slide-in-from-bottom duration-500">
                      <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-4 text-center">
                        Your ${currentAmount} donation will provide:
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center space-y-2">
                          <div className="text-3xl font-ubuntu font-bold text-heritage-gold">
                            {impact.students}
                          </div>
                          <div className="text-sm font-ubuntu text-gray-600">
                            Students with supplies
                          </div>
                        </div>
                        <div className="text-center space-y-2">
                          <div className="text-3xl font-ubuntu font-bold text-heritage-gold">
                            {impact.books}
                          </div>
                          <div className="text-sm font-ubuntu text-gray-600">
                            Educational books
                          </div>
                        </div>
                        <div className="text-center space-y-2">
                          <div className="text-3xl font-ubuntu font-bold text-heritage-gold">
                            {impact.meals}
                          </div>
                          <div className="text-sm font-ubuntu text-gray-600">
                            Nutritious meals
                          </div>
                        </div>
                        <div className="text-center space-y-2">
                          <div className="text-3xl font-ubuntu font-bold text-heritage-gold">
                            {impact.uniforms}
                          </div>
                          <div className="text-sm font-ubuntu text-gray-600">
                            School uniforms
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Donate Button */}
                  <Button
                    onClick={handleDonate}
                    disabled={!currentAmount || currentAmount <= 0}
                    className="w-full py-6 text-xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold to-orange-600 hover:from-heritage-gold/90 hover:to-orange-600/90 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center space-x-3">
                      <span>💝</span>
                      <span>Make Your Donation</span>
                      <span>💝</span>
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Recent Donations Feed */}
            <section className="max-w-4xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-md border-heritage-gold/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-ubuntu font-bold text-gray-900 flex items-center space-x-3">
                    <span>🌟</span>
                    <span>Recent Donations</span>
                    <span>🌟</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {recentDonations.length > 0 ? (
                      recentDonations.map((donation, index) => (
                        <div
                          key={donation.id}
                          className="flex items-center space-x-4 p-4 bg-gradient-to-r from-heritage-gold/5 to-orange-100/30 rounded-xl border border-heritage-gold/10 animate-in fade-in slide-in-from-right duration-500 hover:shadow-md transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="relative">
                            <Avatar className="w-12 h-12 border-2 border-heritage-gold/20">
                              <AvatarFallback className={`${getDonorTierColor(donation.tier)} text-white font-ubuntu font-semibold`}>
                                {donation.avatar}
                              </AvatarFallback>
                            </Avatar>
                            {donation.tier === 'hero' && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-xs">👑</span>
                              </div>
                            )}
                            {donation.tier === 'champion' && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-xs">⭐</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-ubuntu font-semibold text-gray-900">
                                  {donation.isAnonymous ? "Anonymous" : donation.name}
                                </h4>
                                {donation.tier === 'hero' && (
                                  <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs font-ubuntu">
                                    Hero
                                  </Badge>
                                )}
                                {donation.tier === 'champion' && (
                                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs font-ubuntu">
                                    Champion
                                  </Badge>
                                )}
                              </div>
                              <span className="text-lg font-ubuntu font-bold text-heritage-gold">
                                ${donation.amount.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-sm font-ubuntu text-gray-600 mb-1">
                              {donation.message}
                            </p>
                            <p className="text-xs font-ubuntu text-gray-500">
                              {formatTimeAgo(donation.date)}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500 font-ubuntu">
                        Be the first to make a donation! 🌟
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Impact Stories */}
            <section className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-ubuntu font-bold text-gray-900 text-center mb-8">
                Stories of Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sarah's Journey",
                    description: "From struggling student to confident learner",
                    image: "📚",
                    impact: "Improved reading skills by 300%",
                  },
                  {
                    title: "Community School",
                    description: "Building dreams in rural villages",
                    image: "🏫",
                    impact: "500+ students enrolled",
                  },
                  {
                    title: "Cultural Heritage",
                    description: "Preserving traditions for future generations",
                    image: "🌍",
                    impact: "15 cultural programs launched",
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 backdrop-blur-md border-heritage-gold/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="text-6xl mb-4">{story.image}</div>
                      <h3 className="text-xl font-ubuntu font-bold text-gray-900">
                        {story.title}
                      </h3>
                      <p className="font-ubuntu text-gray-600">
                        {story.description}
                      </p>
                      <Badge className="bg-heritage-gold/10 text-heritage-gold border-heritage-gold/20 font-ubuntu">
                        {story.impact}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in duration-300">
              <div className="text-center space-y-6">
                <div className="text-6xl">💳</div>
                <h2 className="text-2xl font-ubuntu font-bold text-gray-900">
                  Complete Your Donation
                </h2>
                <p className="text-lg font-ubuntu text-gray-600">
                  Amount: ${currentAmount}
                </p>
                
                {isProcessing ? (
                  <div className="space-y-4">
                    <div className="animate-spin w-12 h-12 border-4 border-heritage-gold border-t-transparent rounded-full mx-auto"></div>
                    <p className="font-ubuntu text-gray-600">Processing your donation...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button
                      onClick={processDonation}
                      className="w-full py-4 bg-gradient-to-r from-heritage-gold to-orange-600 text-white font-ubuntu font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Confirm Donation
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowPaymentModal(false)}
                      className="w-full py-4 border-heritage-gold/30 text-heritage-gold font-ubuntu rounded-xl"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in duration-300">
              <div className="text-center space-y-6">
                <div className="text-6xl animate-bounce">🎉</div>
                <h2 className="text-2xl font-ubuntu font-bold text-gray-900">
                  Thank You!
                </h2>
                <p className="font-ubuntu text-gray-600">
                  Your donation of ${currentAmount} has been processed successfully. 
                  You're making a real difference in someone's life.
                </p>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-gradient-to-r from-heritage-gold to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </Button>
        </div>
      </div>
    </AuthenticatedLayout>
  );
} 