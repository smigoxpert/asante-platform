import { HeritageBackground } from "@/types";

export interface AncestralRegion {
  id: string;
  name: string;
  description: string;
  countries: string[];
  culturalPractices: string[];
  traditionalValues: string[];
  imageUrl?: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  birthDate?: Date;
  deathDate?: Date;
  location?: string;
  stories: FamilyStory[];
  photoUrl?: string;
}

export interface FamilyStory {
  id: string;
  title: string;
  content: string;
  storyteller: string;
  dateShared: Date;
  tags: string[];
  audioUrl?: string;
  videoUrl?: string;
}

export interface CulturalPractice {
  id: string;
  name: string;
  description: string;
  region: string;
  category: 'ritual' | 'celebration' | 'daily-life' | 'healing' | 'leadership';
  instructions?: string;
  materials?: string[];
  significance: string;
  imageUrl?: string;
}

// Mock data for development
export const ancestralRegions: AncestralRegion[] = [
  {
    id: "west-africa",
    name: "West Africa",
    description: "Rich cultural heritage spanning from Senegal to Nigeria",
    countries: ["Ghana", "Nigeria", "Senegal", "Mali", "Burkina Faso", "Côte d'Ivoire"],
    culturalPractices: ["Griot storytelling", "Adinkra symbols", "Kente weaving", "Drumming circles"],
    traditionalValues: ["Community unity", "Respect for elders", "Oral tradition", "Ancestral reverence"],
    imageUrl: "/images/heritage/west-africa.jpg"
  },
  {
    id: "east-africa",
    name: "East Africa",
    description: "Diverse cultures from the Swahili coast to the Great Lakes",
    countries: ["Kenya", "Tanzania", "Uganda", "Ethiopia", "Somalia"],
    culturalPractices: ["Swahili poetry", "Maasai beadwork", "Coffee ceremonies", "Dance traditions"],
    traditionalValues: ["Hospitality", "Environmental stewardship", "Intergenerational wisdom", "Community support"],
    imageUrl: "/images/heritage/east-africa.jpg"
  },
  {
    id: "south-africa",
    name: "South Africa",
    description: "Melting pot of indigenous and immigrant cultures",
    countries: ["South Africa", "Namibia", "Botswana", "Zimbabwe"],
    culturalPractices: ["Ubuntu philosophy", "Zulu beadwork", "Xhosa initiation", "San rock art"],
    traditionalValues: ["Humanity towards others", "Reconciliation", "Diversity celebration", "Land connection"],
    imageUrl: "/images/heritage/south-africa.jpg"
  }
];

export const culturalPractices: CulturalPractice[] = [
  {
    id: "griot-storytelling",
    name: "Griot Storytelling",
    description: "Traditional oral storytelling that preserves history and wisdom",
    region: "west-africa",
    category: "ritual",
    instructions: "Gather in a circle, light a candle, and share stories from your family history",
    materials: ["Candle", "Comfortable seating", "Recording device (optional)"],
    significance: "Preserves family history and cultural values through oral tradition",
    imageUrl: "/images/cultural/griot-storytelling.jpg"
  },
  {
    id: "ubuntu-circle",
    name: "Ubuntu Circle",
    description: "Community gathering to discuss and practice Ubuntu principles",
    region: "south-africa",
    category: "leadership",
    instructions: "Form a circle, each person shares how they can contribute to community well-being",
    materials: ["Open space", "Comfortable seating", "Talking stick (optional)"],
    significance: "Strengthens community bonds and promotes collective responsibility",
    imageUrl: "/images/cultural/ubuntu-circle.jpg"
  },
  {
    id: "coffee-ceremony",
    name: "Coffee Ceremony",
    description: "Traditional Ethiopian coffee ceremony for community bonding",
    region: "east-africa",
    category: "celebration",
    instructions: "Roast green coffee beans, grind them, and serve in three rounds",
    materials: ["Green coffee beans", "Jebena (coffee pot)", "Small cups", "Incense"],
    significance: "Symbolizes hospitality, friendship, and community connection",
    imageUrl: "/images/cultural/coffee-ceremony.jpg"
  }
];

export class HeritageService {
  private static instance: HeritageService;

  private constructor() {}

  static getInstance(): HeritageService {
    if (!HeritageService.instance) {
      HeritageService.instance = new HeritageService();
    }
    return HeritageService.instance;
  }

  async getAncestralRegions(): Promise<AncestralRegion[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return ancestralRegions;
  }

  async getCulturalPractices(region?: string): Promise<CulturalPractice[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (region) {
      return culturalPractices.filter(practice => practice.region === region);
    }
    
    return culturalPractices;
  }

  async getFamilyTree(userId: string): Promise<FamilyMember[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock family tree data
    return [
      {
        id: "1",
        name: "Grandmother Ama",
        relationship: "grandmother",
        birthDate: new Date("1940-01-01"),
        location: "Accra, Ghana",
        stories: [
          {
            id: "1",
            title: "The Wisdom of the Market",
            content: "My grandmother taught me that the market is not just a place to buy and sell, but a community center where wisdom is shared...",
            storyteller: "Grandmother Ama",
            dateShared: new Date("2023-12-01"),
            tags: ["wisdom", "community", "market"]
          }
        ],
        photoUrl: "/images/family/grandmother-ama.jpg"
      },
      {
        id: "2",
        name: "Uncle Kwame",
        relationship: "uncle",
        birthDate: new Date("1965-01-01"),
        location: "Kumasi, Ghana",
        stories: [
          {
            id: "2",
            title: "Leadership in the Village",
            content: "Uncle Kwame shared how he learned leadership by observing the village elders...",
            storyteller: "Uncle Kwame",
            dateShared: new Date("2023-11-15"),
            tags: ["leadership", "village", "elders"]
          }
        ],
        photoUrl: "/images/family/uncle-kwame.jpg"
      }
    ];
  }

  async addFamilyStory(userId: string, story: Omit<FamilyStory, 'id' | 'dateShared'>): Promise<{ success: boolean; story?: FamilyStory; error?: string }> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newStory: FamilyStory = {
        ...story,
        id: Date.now().toString(),
        dateShared: new Date()
      };
      
      return { success: true, story: newStory };
    } catch (error) {
      return { success: false, error: "Failed to add family story" };
    }
  }

  async getHeritageRecommendations(userHeritage: HeritageBackground): Promise<{
    practices: CulturalPractice[];
    regions: AncestralRegion[];
    stories: FamilyStory[];
  }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const relevantPractices = culturalPractices.filter(practice => 
      practice.region === userHeritage.primaryRegion
    );
    
    const relevantRegions = ancestralRegions.filter(region => 
      region.id === userHeritage.primaryRegion
    );
    
    return {
      practices: relevantPractices.slice(0, 3),
      regions: relevantRegions,
      stories: []
    };
  }

  async searchCulturalContent(query: string): Promise<{
    practices: CulturalPractice[];
    regions: AncestralRegion[];
  }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const searchTerm = query.toLowerCase();
    
    const matchingPractices = culturalPractices.filter(practice =>
      practice.name.toLowerCase().includes(searchTerm) ||
      practice.description.toLowerCase().includes(searchTerm) ||
      practice.significance.toLowerCase().includes(searchTerm)
    );
    
    const matchingRegions = ancestralRegions.filter(region =>
      region.name.toLowerCase().includes(searchTerm) ||
      region.description.toLowerCase().includes(searchTerm) ||
      region.culturalPractices.some(practice => practice.toLowerCase().includes(searchTerm))
    );
    
    return {
      practices: matchingPractices,
      regions: matchingRegions
    };
  }
}

// Export singleton instance
export const heritageService = HeritageService.getInstance();

// Utility functions
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getAgeFromDate = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

export const generateFamilyTreeVisualization = (members: FamilyMember[]): any => {
  // This would integrate with a visualization library like D3.js
  // For now, return a simple structure
  return {
    nodes: members.map(member => ({
      id: member.id,
      name: member.name,
      relationship: member.relationship
    })),
    links: [] // Would be generated based on relationships
  };
}; 