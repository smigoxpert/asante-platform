"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Globe, Sparkles, BookOpen, Target, Star } from 'lucide-react';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (email: string) => Promise<void>;
}

export function NewsletterPopup({ isOpen, onClose, onSubscribe }: NewsletterPopupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowPopup(true);
      // Reset states when opening
      setEmail('');
      setIsSubmitting(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubscribe(email);
      setIsSuccess(true);
      
      // Auto close after success
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      // You could show an error message here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 transition-all duration-300 ${
        showPopup 
          ? 'opacity-100' 
          : 'opacity-0'
      }`}
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Popup Container */}
      <div className={`relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
        showPopup 
          ? 'scale-100 translate-y-0' 
          : 'scale-95 translate-y-5'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 bg-white/90 border border-black/10 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-200 z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-8 md:px-12 py-8 md:py-12 text-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-heritage-gold/10 to-transparent animate-spin" style={{ animationDuration: '20s' }} />
          
          {/* Logo Section */}
          <div className="relative z-10 mb-6">
            <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-heritage-gold to-yellow-300 bg-clip-text text-transparent mb-2 tracking-tight">
              ASANTE
            </div>
            <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
              Ancestral Wisdom
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 mx-auto mb-5 rounded-full bg-gradient-to-br from-heritage-gold to-yellow-300 flex items-center justify-center text-5xl text-[#1a1a2e] shadow-lg">
            <Globe className="w-12 h-12 md:w-16 md:h-16" />
          </div>
        </div>

        {/* Content Section */}
        {!isSuccess ? (
          <div className="px-8 md:px-12 py-8 md:py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3 leading-tight">
              Join the Heritage Journey
            </h2>
            <p className="text-lg md:text-xl font-semibold bg-gradient-to-br from-heritage-gold to-amber-700 bg-clip-text text-transparent mb-5">
              Discover Your Roots. Connect Your Story. Shape Your Legacy.
            </p>
            
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Be the first to experience Asante&apos;s revolutionary approach to African heritage discovery. Get exclusive early access, cultural insights, and DNA integration updates.
            </p>

            {/* Benefits List */}
            <div className="text-left mb-8 space-y-4">
              <div className="flex items-center text-gray-600 text-base">
                <div className="w-5 h-5 bg-gradient-to-br from-heritage-gold to-yellow-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Sparkles className="w-3 h-3 text-[#1a1a2e]" />
                </div>
                <span>Early access to beta features and DNA integration</span>
              </div>
              <div className="flex items-center text-gray-600 text-base">
                <div className="w-5 h-5 bg-gradient-to-br from-heritage-gold to-yellow-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <BookOpen className="w-3 h-3 text-[#1a1a2e]" />
                </div>
                <span>Weekly cultural stories and ancestral wisdom</span>
              </div>
              <div className="flex items-center text-gray-600 text-base">
                <div className="w-5 h-5 bg-gradient-to-br from-heritage-gold to-yellow-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Target className="w-3 h-3 text-[#1a1a2e]" />
                </div>
                <span>Personalized heritage insights and recommendations</span>
              </div>
              <div className="flex items-center text-gray-600 text-base">
                <div className="w-5 h-5 bg-gradient-to-br from-heritage-gold to-yellow-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Star className="w-3 h-3 text-[#1a1a2e]" />
                </div>
                <span>Exclusive founder updates and behind-the-scenes content</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 bg-gray-50 focus:border-heritage-gold focus:bg-white focus:ring-4 focus:ring-heritage-gold/10"
              />
              <Button
                type="submit"
                disabled={isSubmitting || !email.includes('@')}
                className="w-full px-5 py-4 bg-gradient-to-r from-heritage-gold to-yellow-300 text-[#1a1a2e] font-bold rounded-xl text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Joining Your Journey...' : 'Start My Heritage Journey'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
              </Button>
            </form>

            <p className="text-gray-500 text-xs mt-4">
              Your heritage data is sacred to us. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          /* Success State */
          <div className="px-8 md:px-12 py-8 md:py-12 text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 animate-bounce">
              <span className="text-3xl md:text-4xl text-white font-bold">✓</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-3">
              Welcome to the Journey!
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Thank you for joining the Asante community. Check your email for a special welcome message and your first cultural insight. Your heritage discovery begins now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 