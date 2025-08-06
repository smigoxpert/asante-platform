/**
 * Placeholder image utilities for Asante hero carousel
 * These generate placeholder images until real cultural images are available
 */

export const heroImagePlaceholders = {
  "ubuntu-journey": {
    desktop: "/images/placeholders/hero/ubuntu-journey-desktop.svg",
    mobile: "/images/placeholders/hero/ubuntu-journey-mobile.svg",
    alt: "Diverse community members in a circle sharing wisdom",
    isPremium: false
  },
  "heritage-discovery": {
    desktop: "/images/placeholders/hero/heritage-discovery-desktop.svg",
    mobile: "/images/placeholders/hero/heritage-discovery-mobile.svg",
    alt: "Family tree with cultural symbols and traditional patterns",
    isPremium: true
  },
  "community-circles": {
    desktop: "/images/placeholders/hero/community-circles-desktop.svg",
    mobile: "/images/placeholders/hero/community-circles-mobile.svg",
    alt: "Diverse group of people in a circle sharing stories and wisdom",
    isPremium: false
  },
  "wisdom-paths": {
    desktop: "/images/placeholders/hero/wisdom-paths-desktop.svg",
    mobile: "/images/placeholders/hero/wisdom-paths-mobile.svg",
    alt: "Traditional symbols and modern learning elements combined",
    isPremium: false
  },
  "healing-practices": {
    desktop: "/images/placeholders/hero/healing-practices-desktop.svg",
    mobile: "/images/placeholders/hero/healing-practices-mobile.svg",
    alt: "Traditional healing practices and wellness elements",
    isPremium: false
  }
};

export const testimonialImagePlaceholders = {
  "amani": "/images/placeholders/testimonials/amani.svg",
  "zara": "/images/placeholders/testimonials/zara.svg",
  "kwame": "/images/placeholders/testimonials/kwame.svg"
};

// Wisdom Paths Grid Placeholders
export const wisdomPathsGridPlaceholders = {
  "ubuntu-leadership": "/images/placeholders/grids/wisdom-paths/ubuntu-leadership.svg",
  "ancestral-healing": "/images/placeholders/grids/wisdom-paths/ancestral-healing.svg",
  "sacred-relationships": "/images/placeholders/grids/wisdom-paths/sacred-relationships.svg",
  "purposeful-abundance": "/images/placeholders/grids/wisdom-paths/purposeful-abundance.svg",
  "spiritual-awakening": "/images/placeholders/grids/wisdom-paths/spiritual-awakening.svg",
  "cultural-renaissance": "/images/placeholders/grids/wisdom-paths/cultural-renaissance.svg"
};

// Community Features Grid Placeholders
export const communityGridPlaceholders = {
  "video-testimonials": "/images/placeholders/grids/community/video-testimonials.svg",
  "live-community-feed": "/images/placeholders/grids/community/live-community-feed.svg",
  "impact-stories": "/images/placeholders/grids/community/impact-stories.svg"
};

// Mobile App Features Grid Placeholders
export const mobileFeaturesGridPlaceholders = {
  "offline-cultural-content": "/images/placeholders/grids/features/offline-cultural-content.svg",
  "ubuntu-circle-video-calls": "/images/placeholders/grids/features/ubuntu-circle-video-calls.svg",
  "heritage-photo-capture": "/images/placeholders/grids/features/heritage-photo-capture.svg",
  "cultural-calendar-notifications": "/images/placeholders/grids/features/cultural-calendar-notifications.svg"
};

// Subscription Tiers Grid Placeholders
export const subscriptionTiersGridPlaceholders = {
  "seeker": "/images/placeholders/grids/subscription-tiers/seeker.svg",
  "ubuntu_connector": "/images/placeholders/grids/subscription-tiers/ubuntu-connector.svg",
  "heritage_guardian": "/images/placeholders/grids/subscription-tiers/heritage-guardian.svg"
};

// Elders Grid Placeholders
export const eldersGridPlaceholders = {
  "elder-1": "/images/placeholders/grids/elders/elder-1.svg",
  "elder-2": "/images/placeholders/grids/elders/elder-1.svg", // Reusing for now
  "elder-3": "/images/placeholders/grids/elders/elder-1.svg"  // Reusing for now
};

/**
 * Generate a gradient placeholder image URL
 * Useful for creating culturally-themed placeholder backgrounds
 */
export function generateGradientPlaceholder(
  width: number = 1340,
  height: number = 600,
  theme: 'ubuntu' | 'heritage' | 'community' | 'wisdom' | 'healing' = 'ubuntu'
): string {
  const gradients = {
    ubuntu: 'from-amber-500,via-orange-500,to-red-500',
    heritage: 'from-emerald-500,via-teal-500,to-cyan-500',
    community: 'from-purple-500,via-pink-500,to-rose-500',
    wisdom: 'from-indigo-500,via-blue-500,to-sky-500',
    healing: 'from-green-500,via-emerald-500,to-teal-500'
  };

  const gradient = gradients[theme];
  return `https://via.placeholder.com/${width}x${height}/D4AF37/FFFFFF?text=Asante+${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
}

/**
 * Get optimized image URL with proper sizing and quality
 */
export function getOptimizedImageUrl(
  baseUrl: string,
  width: number,
  height: number,
  quality: number = 80
): string {
  // For Unsplash images, we can optimize the URL
  if (baseUrl.includes('unsplash.com')) {
    return `${baseUrl}&w=${width}&h=${height}&q=${quality}&fit=crop&crop=center`;
  }
  
  // For other images, return as is
  return baseUrl;
}

/**
 * Preload hero images for better performance
 */
export function preloadHeroImages(): void {
  Object.values(heroImagePlaceholders).forEach(images => {
    const desktopImg = new Image();
    const mobileImg = new Image();
    
    desktopImg.src = images.desktop;
    mobileImg.src = images.mobile;
  });
}

/**
 * Get cultural theme colors for gradients
 */
export function getCulturalThemeColors(theme: string): string[] {
  const themeColors = {
    ubuntu: ['#D4AF37', '#FF6B35', '#F7931E'],
    heritage: ['#059669', '#0D9488', '#0891B2'],
    community: ['#7C3AED', '#EC4899', '#F43F5E'],
    wisdom: ['#3730A3', '#3B82F6', '#06B6D4'],
    healing: ['#059669', '#10B981', '#0D9488']
  };
  
  return themeColors[theme as keyof typeof themeColors] || themeColors.ubuntu;
} 