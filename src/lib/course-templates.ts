import { FaUsers, FaStar, FaDollarSign, FaGraduationCap, FaBook, FaHandsHelping } from "react-icons/fa";

export interface CourseTemplate {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  culturalRegion: string;
  difficulty: string;
  duration: string;
  rating: number;
  totalRatings: number;
  enrollmentCount: number;
  price: string;
  features: string[];
  learningOutcomes: string[];
  prerequisites: string[];
  culturalContext: {
    region: string;
    historicalPeriod: string;
    modernRelevance: string;
  };
  modules: CourseModule[];
  resources?: CourseResource[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: CourseLesson[];
}

export interface CourseLesson {
  id: string;
  title: string;
  description: string;
  contentType: 'video' | 'audio' | 'text' | 'interactive';
  duration: string;
  contentUrl?: string;
  completed?: boolean;
  locked?: boolean;
  isPreview?: boolean;
  keyTopics: string[];
  interactiveElements?: {
    type: 'quiz' | 'discussion' | 'reflection' | 'practice';
    title: string;
    description: string;
  }[];
  elderWisdom?: {
    elderName: string;
    culturalBackground: string;
    wisdomQuote: string;
    context: string;
  };
}

export interface CourseResource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'audio' | 'video' | 'worksheet';
  downloadUrl: string;
  fileSize: string;
}

export const courseTemplates: CourseTemplate[] = [
  {
    id: "ancestral-wisdom-foundations",
    title: "Ancestral Wisdom Foundations",
    description: "Discover the power of storytelling and oral traditions passed down through generations",
    longDescription: `Embark on a transformative journey into the heart of African ancestral wisdom. This foundational course explores the rich tapestry of oral traditions, storytelling practices, and cultural knowledge that has been preserved and passed down through countless generations.

Through this course, you'll learn how our ancestors used wisdom, stories, and cultural practices to guide their communities, solve problems, and maintain harmony with nature and each other. You'll discover practical applications of this wisdom in modern life, helping you build stronger connections with your heritage, family, and community.

The course combines traditional knowledge with contemporary understanding, making ancient wisdom accessible and relevant to today's challenges. You'll learn from elders, cultural practitioners, and community leaders who bring authentic wisdom and real-world experience to every lesson.`,
    category: "Cultural Heritage",
    culturalRegion: "Pan-African",
    difficulty: "Beginner",
    duration: "32.5 hours",
    rating: 4.8,
    totalRatings: 1247,
    enrollmentCount: 15420,
    price: "Free",
    features: [
      "Storytelling Mastery",
      "Oral History Preservation", 
      "Cultural Memory Techniques",
      "Community Building",
      "Intergenerational Connection",
      "Digital Storytelling Tools"
    ],
    learningOutcomes: [
      "Master the art of traditional storytelling and oral history preservation",
      "Understand the role of memory and cultural transmission in African societies",
      "Learn techniques for connecting with and honoring your ancestral heritage",
      "Develop skills for building and strengthening community bonds",
      "Apply ancestral wisdom to modern challenges and decision-making",
      "Create meaningful connections between past, present, and future generations"
    ],
    prerequisites: [
      "Open mind and willingness to learn",
      "Basic understanding of African history (helpful but not required)",
      "Commitment to community and cultural preservation"
    ],
    culturalContext: {
      region: "Pan-African (West, East, Central, Southern Africa)",
      historicalPeriod: "Ancient to Contemporary",
      modernRelevance: "Addresses modern challenges of cultural preservation, community building, and intergenerational connection in the digital age"
    },
    modules: [
      {
        id: "module-1",
        title: "The Foundation of Ancestral Wisdom",
        description: "Understanding the core principles and importance of ancestral knowledge",
        duration: "6 hours",
        lessons: [
          {
            id: "lesson-1-1",
            title: "What is Ancestral Wisdom?",
            description: "Exploring the definition and significance of ancestral wisdom in African cultures",
            contentType: "video",
            duration: "45 minutes",
            keyTopics: [
              "Definition of ancestral wisdom",
              "Role in African societies",
              "Difference from other knowledge systems",
              "Modern relevance"
            ],
            interactiveElements: [
              {
                type: "reflection",
                title: "Your Ancestral Connection",
                description: "Reflect on your own connection to ancestral wisdom and family traditions"
              }
            ],
            elderWisdom: {
              elderName: "Elder Ama Osei",
              culturalBackground: "Akan, Ghana",
              wisdomQuote: "The wisdom of our ancestors is not locked in the past, but flows like a river through time, nourishing each generation with its timeless truths.",
              context: "Elder Ama shares how ancestral wisdom has guided her community through both traditional and modern challenges."
            }
          },
          {
            id: "lesson-1-2",
            title: "The Oral Tradition",
            description: "Understanding how knowledge was preserved and transmitted through storytelling",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Oral tradition techniques",
              "Memory preservation methods",
              "Storytelling as education",
              "Cultural transmission"
            ],
            interactiveElements: [
              {
                type: "practice",
                title: "Storytelling Practice",
                description: "Practice basic storytelling techniques with a family story or cultural tale"
              }
            ]
          },
          {
            id: "lesson-1-3",
            title: "The Role of Elders",
            description: "Understanding the crucial role of elders in preserving and sharing wisdom",
            contentType: "audio",
            duration: "30 minutes",
            keyTopics: [
              "Elder wisdom and authority",
              "Knowledge transmission",
              "Respect for elders",
              "Modern elder roles"
            ]
          }
        ]
      },
      {
        id: "module-2",
        title: "Storytelling as Cultural Preservation",
        description: "Learning the art of storytelling to preserve and share cultural knowledge",
        duration: "8 hours",
        lessons: [
          {
            id: "lesson-2-1",
            title: "Elements of Traditional Storytelling",
            description: "Understanding the key components that make stories memorable and meaningful",
            contentType: "video",
            duration: "75 minutes",
            keyTopics: [
              "Story structure",
              "Character development",
              "Moral lessons",
              "Cultural context"
            ],
            interactiveElements: [
              {
                type: "discussion",
                title: "Favorite Family Stories",
                description: "Share and discuss meaningful stories from your family or cultural background"
              }
            ]
          },
          {
            id: "lesson-2-2",
            title: "Storytelling Techniques",
            description: "Practical techniques for effective storytelling and audience engagement",
            contentType: "interactive",
            duration: "90 minutes",
            keyTopics: [
              "Voice and delivery",
              "Body language",
              "Audience engagement",
              "Cultural sensitivity"
            ],
            isPreview: true
          },
          {
            id: "lesson-2-3",
            title: "Digital Storytelling",
            description: "Adapting traditional storytelling for modern digital platforms",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Digital platforms",
              "Multimedia storytelling",
              "Preserving authenticity",
              "Reaching new audiences"
            ]
          }
        ]
      },
      {
        id: "module-3",
        title: "Connecting with Your Heritage",
        description: "Practical methods for discovering and connecting with your ancestral roots",
        duration: "10 hours",
        lessons: [
          {
            id: "lesson-3-1",
            title: "Family History Research",
            description: "Methods for researching and documenting your family history",
            contentType: "text",
            duration: "45 minutes",
            keyTopics: [
              "Research methods",
              "Documentation techniques",
              "Family interviews",
              "Cultural context"
            ]
          },
          {
            id: "lesson-3-2",
            title: "Cultural Practices and Traditions",
            description: "Identifying and learning about your cultural practices and traditions",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Cultural identification",
              "Traditional practices",
              "Modern adaptations",
              "Community connections"
            ]
          },
          {
            id: "lesson-3-3",
            title: "Building Intergenerational Connections",
            description: "Creating meaningful connections between different generations",
            contentType: "interactive",
            duration: "75 minutes",
            keyTopics: [
              "Communication strategies",
              "Knowledge sharing",
              "Respect and understanding",
              "Modern challenges"
            ]
          }
        ]
      },
      {
        id: "module-4",
        title: "Applying Ancestral Wisdom Today",
        description: "Practical applications of ancestral wisdom in modern life and community building",
        duration: "8.5 hours",
        lessons: [
          {
            id: "lesson-4-1",
            title: "Decision Making with Ancestral Wisdom",
            description: "Using ancestral principles to make better decisions in modern life",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Decision-making frameworks",
              "Community consideration",
              "Long-term thinking",
              "Cultural values"
            ]
          },
          {
            id: "lesson-4-2",
            title: "Community Building and Leadership",
            description: "Applying ancestral wisdom to build stronger communities",
            contentType: "interactive",
            duration: "90 minutes",
            keyTopics: [
              "Community principles",
              "Leadership styles",
              "Conflict resolution",
              "Sustainable development"
            ]
          },
          {
            id: "lesson-4-3",
            title: "Preserving Wisdom for Future Generations",
            description: "Ensuring ancestral wisdom continues to benefit future generations",
            contentType: "text",
            duration: "45 minutes",
            keyTopics: [
              "Documentation methods",
              "Digital preservation",
              "Educational approaches",
              "Cultural continuity"
            ]
          }
        ]
      }
    ],
    resources: [
      {
        id: "resource-1",
        title: "Ancestral Wisdom Workbook",
        description: "Interactive workbook with exercises and reflection prompts",
        type: "pdf",
        downloadUrl: "/resources/ancestral-wisdom-workbook.pdf",
        fileSize: "2.3 MB"
      },
      {
        id: "resource-2",
        title: "Traditional Stories Collection",
        description: "Audio collection of traditional African stories and folktales",
        type: "audio",
        downloadUrl: "/resources/traditional-stories.zip",
        fileSize: "45.2 MB"
      },
      {
        id: "resource-3",
        title: "Family History Template",
        description: "Template for documenting and organizing family history",
        type: "pdf",
        downloadUrl: "/resources/family-history-template.pdf",
        fileSize: "1.1 MB"
      }
    ]
  },
  {
    id: "ubuntu-leadership",
    title: "Ubuntu Leadership",
    description: "Master community-centered leadership principles that serve the collective good",
    longDescription: `Transform your approach to leadership by embracing Ubuntu philosophy - the understanding that "I am because we are." This comprehensive course teaches you how to lead with compassion, wisdom, and a deep commitment to community well-being.

You'll learn how traditional African leadership principles can be applied to modern challenges, creating more inclusive, sustainable, and effective organizations and communities. The course combines ancient wisdom with contemporary leadership theory, providing practical tools for building consensus, resolving conflicts, and fostering collective growth.

Through interactive lessons, real-world case studies, and community discussions, you'll develop the skills needed to lead with integrity, empathy, and a focus on the greater good. Whether you're leading a family, community organization, or business, this course will help you become a more effective and ethical leader.`,
    category: "Leadership",
    culturalRegion: "Southern Africa",
    difficulty: "Intermediate",
    duration: "28.3 hours",
    rating: 4.9,
    totalRatings: 892,
    enrollmentCount: 8930,
    price: "$49",
    features: [
      "Community Leadership",
      "Conflict Resolution",
      "Collective Decision Making",
      "Service Leadership",
      "Consensus Building",
      "Ethical Leadership"
    ],
    learningOutcomes: [
      "Understand and apply Ubuntu philosophy to leadership practices",
      "Develop skills for building consensus and collective decision-making",
      "Learn effective conflict resolution techniques rooted in African wisdom",
      "Master community-centered leadership approaches",
      "Build inclusive and sustainable organizations",
      "Lead with integrity, empathy, and cultural sensitivity"
    ],
    prerequisites: [
      "Basic understanding of leadership concepts",
      "Commitment to community service",
      "Openness to learning from diverse cultural perspectives"
    ],
    culturalContext: {
      region: "Southern Africa (primarily South Africa, Zimbabwe, Botswana)",
      historicalPeriod: "Traditional to Contemporary",
      modernRelevance: "Addresses modern leadership challenges in diverse, globalized societies while maintaining cultural authenticity"
    },
    modules: [
      {
        id: "module-1",
        title: "Understanding Ubuntu Philosophy",
        description: "Foundational principles of Ubuntu and their application to leadership",
        duration: "6 hours",
        lessons: [
          {
            id: "lesson-1-1",
            title: "What is Ubuntu?",
            description: "Exploring the core concept of Ubuntu and its meaning",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Definition of Ubuntu",
              "Philosophical foundations",
              "Cultural context",
              "Modern interpretations"
            ]
          },
          {
            id: "lesson-1-2",
            title: "Ubuntu in Leadership",
            description: "How Ubuntu principles apply to leadership practices",
            contentType: "video",
            duration: "75 minutes",
            keyTopics: [
              "Leadership principles",
              "Community focus",
              "Collective responsibility",
              "Service orientation"
            ]
          }
        ]
      },
      {
        id: "module-2",
        title: "Community-Centered Leadership",
        description: "Developing leadership skills that prioritize community well-being",
        duration: "8 hours",
        lessons: [
          {
            id: "lesson-2-1",
            title: "Building Consensus",
            description: "Techniques for building consensus and collective decision-making",
            contentType: "interactive",
            duration: "90 minutes",
            keyTopics: [
              "Consensus-building methods",
              "Inclusive decision-making",
              "Community participation",
              "Conflict prevention"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sacred-relationships",
    title: "Sacred Relationships",
    description: "Build meaningful connections through Ubuntu principles and ancestral wisdom",
    longDescription: `Discover how to create and nurture relationships that honor the sacred nature of human connection. This course explores traditional African approaches to relationships, family dynamics, and community bonds, providing practical wisdom for building stronger, more meaningful connections.

You'll learn how our ancestors understood the importance of relationships in maintaining harmony within families and communities. The course covers various types of relationships - romantic partnerships, family bonds, friendships, and community connections - and how to approach each with respect, wisdom, and cultural understanding.

Through guided lessons, interactive exercises, and community discussions, you'll develop the skills needed to build relationships that are not only personally fulfilling but also contribute to the well-being of your community and the preservation of cultural values.`,
    category: "Relationships",
    culturalRegion: "West Africa",
    difficulty: "Beginner",
    duration: "24.1 hours",
    rating: 4.7,
    totalRatings: 1567,
    enrollmentCount: 12340,
    price: "$39",
    features: [
      "Family Harmony",
      "Community Bonds",
      "Intergenerational Connection",
      "Spiritual Relationships",
      "Conflict Resolution",
      "Cultural Understanding"
    ],
    learningOutcomes: [
      "Understand traditional African approaches to relationships and family",
      "Develop skills for building harmonious family relationships",
      "Learn techniques for resolving conflicts with wisdom and compassion",
      "Create stronger community bonds and connections",
      "Apply cultural wisdom to modern relationship challenges",
      "Build relationships that honor ancestral values and traditions"
    ],
    prerequisites: [
      "Open heart and willingness to grow",
      "Commitment to building meaningful relationships",
      "Respect for cultural diversity and traditions"
    ],
    culturalContext: {
      region: "West Africa (Nigeria, Ghana, Senegal, Mali)",
      historicalPeriod: "Traditional to Contemporary",
      modernRelevance: "Addresses modern relationship challenges while preserving cultural wisdom and family values"
    },
    modules: [
      {
        id: "module-1",
        title: "The Foundation of Sacred Relationships",
        description: "Understanding the spiritual and cultural significance of relationships",
        duration: "6 hours",
        lessons: [
          {
            id: "lesson-1-1",
            title: "What Makes Relationships Sacred?",
            description: "Exploring the spiritual dimension of human connections",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Spiritual significance",
              "Cultural perspectives",
              "Ancestral wisdom",
              "Modern applications"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "traditional-healing-medicine",
    title: "Traditional Healing & Medicine",
    description: "Learn ancient African healing practices and holistic wellness approaches",
    longDescription: `Discover the rich tradition of African healing and medicine that has been practiced for thousands of years. This comprehensive course explores traditional healing methods, herbal medicine, spiritual wellness, and community health practices that have sustained African communities through generations.

You'll learn about the holistic approach to health that integrates physical, mental, spiritual, and community well-being. The course covers various healing traditions from different regions of Africa, including herbal remedies, energy healing, spiritual practices, and preventive medicine techniques.

Through guided lessons, practical demonstrations, and community discussions, you'll gain a deep understanding of how traditional African medicine works and how to apply these principles to modern wellness practices.`,
    category: "Wellness",
    culturalRegion: "East Africa",
    difficulty: "Advanced",
    duration: "45.2 hours",
    rating: 4.6,
    totalRatings: 2341,
    enrollmentCount: 6780,
    price: "$79",
    features: [
      "Herbal Medicine",
      "Energy Healing",
      "Spiritual Wellness",
      "Community Health",
      "Preventive Medicine",
      "Holistic Healing"
    ],
    learningOutcomes: [
      "Understand traditional African healing principles and practices",
      "Learn to identify and use medicinal herbs and plants",
      "Master energy healing and spiritual wellness techniques",
      "Develop community health and wellness programs",
      "Apply traditional healing wisdom to modern healthcare",
      "Create holistic wellness practices for individuals and communities"
    ],
    prerequisites: [
      "Interest in holistic health and wellness",
      "Respect for traditional healing practices",
      "Commitment to community health and well-being"
    ],
    culturalContext: {
      region: "East Africa (Kenya, Tanzania, Ethiopia, Uganda)",
      historicalPeriod: "Ancient to Contemporary",
      modernRelevance: "Addresses modern health challenges through traditional wisdom and holistic approaches"
    },
    modules: [
      {
        id: "module-1",
        title: "Foundations of Traditional Healing",
        description: "Understanding the principles and philosophy of African healing",
        duration: "8 hours",
        lessons: [
          {
            id: "lesson-1-1",
            title: "The Philosophy of Traditional Healing",
            description: "Exploring the holistic approach to health and wellness",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Holistic health principles",
              "Mind-body-spirit connection",
              "Community wellness",
              "Preventive medicine"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "creative-expression-arts",
    title: "Creative Expression & Arts",
    description: "Express your soul through traditional African arts, music, and creative practices",
    longDescription: `Unlock your creative potential through the rich traditions of African arts and creative expression. This transformative course explores traditional African art forms, music, dance, storytelling, and creative practices that have been used for centuries to express cultural identity, spiritual connection, and community values.

You'll learn about various art forms from different regions of Africa, including traditional painting, sculpture, textiles, music, dance, and performance arts. The course emphasizes the spiritual and cultural significance of creative expression and how it connects to ancestral wisdom and community identity.

Through hands-on workshops, cultural demonstrations, and community projects, you'll develop your creative skills while deepening your understanding of African artistic traditions and their modern applications.`,
    category: "Arts & Culture",
    culturalRegion: "Central Africa",
    difficulty: "Intermediate",
    duration: "38.7 hours",
    rating: 4.8,
    totalRatings: 987,
    enrollmentCount: 5670,
    price: "$59",
    features: [
      "Traditional Arts",
      "Music & Rhythm",
      "Dance & Movement",
      "Creative Storytelling",
      "Cultural Expression",
      "Community Art"
    ],
    learningOutcomes: [
      "Master traditional African art forms and techniques",
      "Develop skills in music, dance, and performance arts",
      "Learn creative storytelling and narrative techniques",
      "Understand the cultural significance of artistic expression",
      "Create community-based art projects and performances",
      "Apply traditional artistic wisdom to modern creative practices"
    ],
    prerequisites: [
      "Passion for creative expression",
      "Openness to learning new art forms",
      "Interest in cultural arts and traditions"
    ],
    culturalContext: {
      region: "Central Africa (DRC, Cameroon, Gabon, Central African Republic)",
      historicalPeriod: "Traditional to Contemporary",
      modernRelevance: "Preserves cultural identity while fostering modern creative expression and community building"
    },
    modules: [
      {
        id: "module-1",
        title: "Foundations of African Arts",
        description: "Understanding the principles and significance of African creative expression",
        duration: "6 hours",
        lessons: [
          {
            id: "lesson-1-1",
            title: "The Spirit of African Creativity",
            description: "Exploring the cultural and spiritual dimensions of African arts",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Cultural significance of art",
              "Spiritual expression through creativity",
              "Community art traditions",
              "Modern applications"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "spiritual-awakening",
    title: "Spiritual Awakening",
    description: "Deepen your spiritual connection through traditional African spirituality",
    longDescription: `Embark on a profound spiritual journey through the wisdom of traditional African spirituality. This transformative course explores the deep spiritual traditions, practices, and wisdom that have guided African communities for millennia, helping you develop a stronger connection to your spiritual self and the divine.

You'll learn about various spiritual traditions from across Africa, including meditation practices, ritual ceremonies, ancestral connection, and spiritual healing techniques. The course emphasizes the importance of spiritual balance, inner peace, and connection to the natural world and community.

Through guided meditations, spiritual practices, and community ceremonies, you'll develop a deeper understanding of African spirituality and how to integrate these practices into your daily life for personal growth and spiritual fulfillment.`,
    category: "Spirituality",
    culturalRegion: "North Africa",
    difficulty: "Advanced",
    duration: "52.4 hours",
    rating: 4.9,
    totalRatings: 1456,
    enrollmentCount: 4320,
    price: "$89",
    features: [
      "Ancestral Connection",
      "Meditation Practices",
      "Ritual & Ceremony",
      "Spiritual Growth",
      "Inner Peace",
      "Divine Connection"
    ],
    learningOutcomes: [
      "Develop a deep connection to African spiritual traditions",
      "Master meditation and mindfulness practices",
      "Learn ritual ceremonies and spiritual practices",
      "Connect with ancestral wisdom and guidance",
      "Achieve spiritual balance and inner peace",
      "Integrate spiritual practices into daily life"
    ],
    prerequisites: [
      "Openness to spiritual exploration",
      "Respect for spiritual traditions",
      "Commitment to personal spiritual growth"
    ],
    culturalContext: {
      region: "North Africa (Egypt, Morocco, Algeria, Tunisia)",
      historicalPeriod: "Ancient to Contemporary",
      modernRelevance: "Provides spiritual guidance and inner peace in modern life while preserving ancient wisdom"
    },
    modules: [
      {
        id: "module-1",
        title: "Foundations of African Spirituality",
        description: "Understanding the core principles of African spiritual traditions",
        duration: "8 hours",
        lessons: [
          {
            id: "lesson-1-1",
            title: "The Essence of African Spirituality",
            description: "Exploring the fundamental principles and practices of African spirituality",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Spiritual principles",
              "Connection to nature",
              "Ancestral wisdom",
              "Divine presence"
            ]
          }
        ]
      }
    ]
  }
];

// Helper function to get course by ID
export function getCourseById(id: string): CourseTemplate | undefined {
  return courseTemplates.find(course => course.id === id);
}

// Helper function to get all courses
export function getAllCourses(): CourseTemplate[] {
  return courseTemplates;
}

// Helper function to get courses by category
export function getCoursesByCategory(category: string): CourseTemplate[] {
  return courseTemplates.filter(course => course.category === category);
}

// Helper function to get courses by difficulty
export function getCoursesByDifficulty(difficulty: string): CourseTemplate[] {
  return courseTemplates.filter(course => course.difficulty.toLowerCase() === difficulty.toLowerCase());
}

// Helper function to get courses by cultural region
export function getCoursesByRegion(region: string): CourseTemplate[] {
  return courseTemplates.filter(course => course.culturalRegion === region);
} 