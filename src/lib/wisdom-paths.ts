import { 
  FaLandmark, 
  FaCrown, 
  FaHeart, 
  FaUsers, 
  FaStar, 
  FaDollarSign, 
  FaGraduationCap, 
  FaBook, 
  FaHandsHelping, 
  FaLeaf, 
  FaPrayingHands, 
  FaPalette,
  FaGlobe,
  FaLightbulb,
  FaShieldAlt,
  FaBalanceScale,
  FaSeedling,
  FaMountain,
  FaWater,
  FaFire,
  FaWind,
  FaTree,
  FaSun,
  FaMoon,
  FaCompass
} from "react-icons/fa";

export interface WisdomPath {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: WisdomPathCategory;
  culturalRegion: string;
  difficulty: string;
  duration: string;
  rating: number;
  totalRatings: number;
  enrollmentCount: number;
  price: string;
  icon: any;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  features: string[];
  learningOutcomes: string[];
  prerequisites: string[];
  culturalContext: {
    region: string;
    historicalPeriod: string;
    modernRelevance: string;
    keyFigures: HistoricalFigure[];
    civilizations: string[];
  };
  journey: JourneyPhase[];
  resources?: PathResource[];
  communityFeatures: CommunityFeature[];
}

export interface HistoricalFigure {
  name: string;
  title: string;
  period: string;
  region: string;
  contributions: string[];
  wisdomQuotes: string[];
  imageUrl?: string;
  biography: string;
}

export interface JourneyPhase {
  id: string;
  title: string;
  description: string;
  duration: string;
  theme: string;
  lessons: PathLesson[];
  milestones: Milestone[];
  culturalPractices: CulturalPractice[];
}

export interface PathLesson {
  id: string;
  title: string;
  description: string;
  contentType: 'video' | 'audio' | 'text' | 'interactive' | 'meditation' | 'ceremony' | 'storytelling';
  duration: string;
  contentUrl?: string;
  completed?: boolean;
  locked?: boolean;
  isPreview?: boolean;
  keyTopics: string[];
  interactiveElements?: InteractiveElement[];
  elderWisdom?: ElderWisdom;
  historicalContext?: HistoricalContext;
  reflectionPrompts?: string[];
  communityActivities?: CommunityActivity[];
}

export interface InteractiveElement {
  type: 'quiz' | 'discussion' | 'reflection' | 'practice' | 'ceremony' | 'meditation' | 'storytelling' | 'art' | 'music' | 'movement' | 'simulation';
  title: string;
  description: string;
  instructions?: string;
  materials?: string[];
  duration?: string;
  groupSize?: 'individual' | 'small-group' | 'community';
}

export interface ElderWisdom {
  elderName: string;
  culturalBackground: string;
  wisdomQuote: string;
  context: string;
  modernApplication: string;
  audioUrl?: string;
  videoUrl?: string;
}

export interface HistoricalContext {
  period: string;
  events: string[];
  significance: string;
  modernConnections: string[];
  artifacts?: string[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  type: 'achievement' | 'transformation' | 'community' | 'wisdom' | 'leadership';
  requirements: string[];
  rewards: string[];
  ceremony?: Ceremony;
}

export interface Ceremony {
  name: string;
  description: string;
  participants: string;
  duration: string;
  materials: string[];
  instructions: string[];
  significance: string;
}

export interface CulturalPractice {
  name: string;
  description: string;
  origin: string;
  purpose: string;
  instructions: string[];
  materials: string[];
  modernAdaptation: string;
  communityImpact: string;
}

export interface CommunityActivity {
  type: 'discussion' | 'sharing' | 'celebration' | 'service' | 'mentorship';
  title: string;
  description: string;
  participants: string;
  duration: string;
  goals: string[];
}

export interface PathResource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'audio' | 'video' | 'worksheet' | 'meditation' | 'music' | 'art';
  downloadUrl: string;
  fileSize: string;
  culturalContext: string;
}

export interface CommunityFeature {
  type: 'forum' | 'circle' | 'mentorship' | 'celebration' | 'service';
  title: string;
  description: string;
  frequency: string;
  participants: string;
  benefits: string[];
}

export type WisdomPathCategory = 
  | 'ubuntu_leadership'
  | 'ancestral_healing'
  | 'sacred_relationships'
  | 'purposeful_abundance'
  | 'spiritual_awakening'
  | 'cultural_renaissance'
  | 'community_building'
  | 'creative_expression'
  | 'environmental_wisdom'
  | 'intergenerational_connection';

export const wisdomPaths: WisdomPath[] = [
  {
    id: "mandela-leadership-journey",
    title: "Mandela's Leadership Journey",
    subtitle: "From Prison to Presidency: The Path of Ubuntu Leadership",
    description: "Walk in the footsteps of Nelson Mandela and discover the principles of transformative leadership through Ubuntu philosophy",
    longDescription: `Embark on a profound journey through the life and teachings of Nelson Mandela, one of history's greatest leaders. This wisdom path explores how Mandela's 27 years of imprisonment became a crucible for developing extraordinary leadership qualities rooted in Ubuntu philosophy.

Through this immersive experience, you'll discover how Mandela's unwavering commitment to reconciliation, forgiveness, and community-centered leadership transformed not just a nation, but the world. You'll learn the practical applications of his wisdom in modern leadership challenges, from community building to conflict resolution.

This path combines historical study with personal reflection, interactive exercises, and community engagement to help you develop your own leadership potential while honoring Mandela's legacy.`,
    category: "ubuntu_leadership",
    culturalRegion: "Southern Africa",
    difficulty: "Intermediate",
    duration: "40 hours",
    rating: 4.9,
    totalRatings: 2156,
    enrollmentCount: 18750,
    price: "$79",
    icon: FaCrown,
    theme: {
      primary: "#1e40af",
      secondary: "#fbbf24",
      accent: "#dc2626",
      background: "linear-gradient(135deg, #1e40af 0%, #fbbf24 50%, #dc2626 100%)"
    },
    features: [
      "Mandela's Personal Letters & Writings",
      "Interactive Leadership Simulations",
      "Community Reconciliation Workshops",
      "Historical Timeline Exploration",
      "Ubuntu Philosophy Deep Dive",
      "Modern Leadership Applications"
    ],
    learningOutcomes: [
      "Understand Mandela's leadership principles and their Ubuntu foundation",
      "Develop skills for reconciliation and conflict resolution",
      "Learn to lead with compassion, patience, and strategic vision",
      "Apply Mandela's wisdom to modern leadership challenges",
      "Build inclusive, community-centered organizations",
      "Cultivate resilience and perseverance in leadership"
    ],
    prerequisites: [
      "Open mind and willingness to learn from history",
      "Commitment to community service and leadership",
      "Basic understanding of African history (helpful but not required)"
    ],
    culturalContext: {
      region: "Southern Africa (South Africa, specifically)",
      historicalPeriod: "20th Century (1918-2013)",
      modernRelevance: "Addresses contemporary challenges of leadership, reconciliation, and social justice in diverse societies",
      keyFigures: [
        {
          name: "Nelson Mandela",
          title: "Father of the Nation, Anti-Apartheid Revolutionary, President of South Africa",
          period: "1918-2013",
          region: "South Africa",
          contributions: [
            "Led the anti-apartheid movement",
            "27 years of imprisonment for justice",
            "First black president of South Africa",
            "Champion of reconciliation and forgiveness",
            "Global symbol of peace and leadership"
          ],
          wisdomQuotes: [
            "It always seems impossible until it's done.",
            "Education is the most powerful weapon which you can use to change the world.",
            "I am fundamentally an optimist. Whether that comes from nature or nurture, I cannot say.",
            "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others."
          ],
          biography: "Nelson Rolihlahla Mandela was born in 1918 in the village of Mvezo, South Africa. His journey from rural beginnings to becoming one of the world's most respected leaders is a testament to the power of Ubuntu philosophy in action. Mandela's 27 years of imprisonment on Robben Island became a crucible for developing extraordinary leadership qualities, teaching him patience, strategic thinking, and the importance of reconciliation."
        },
        {
          name: "Winnie Madikizela-Mandela",
          title: "Anti-Apartheid Activist, Mother of the Nation",
          period: "1936-2018",
          region: "South Africa",
          contributions: [
            "Continued the struggle during Mandela's imprisonment",
            "Symbol of resistance and strength",
            "Advocate for women's rights",
            "Community organizer and leader"
          ],
          wisdomQuotes: [
            "I am the product of the masses of my country and the product of my enemy.",
            "Together, hand in hand, with our matches and our necklaces, we shall liberate this country."
          ],
          biography: "Winnie Madikizela-Mandela was a formidable force in the anti-apartheid movement, maintaining the struggle during her husband's 27-year imprisonment. Her leadership and resilience inspired millions of South Africans to continue fighting for freedom and justice."
        }
      ],
      civilizations: [
        "Ancient Bantu Kingdoms",
        "Zulu Empire",
        "Xhosa Nation",
        "Modern South Africa"
      ]
    },
    journey: [
      {
        id: "phase-1",
        title: "The Foundation: Understanding Ubuntu",
        description: "Explore the philosophical foundation that guided Mandela's leadership",
        duration: "8 hours",
        theme: "Philosophical Foundation",
        lessons: [
          {
            id: "lesson-1-1",
            title: "What is Ubuntu?",
            description: "Understanding the core philosophy that guided Mandela's leadership",
            contentType: "video",
            duration: "60 minutes",
            keyTopics: [
              "Definition of Ubuntu",
              "Philosophical foundations",
              "Cultural context",
              "Modern applications"
            ],
            interactiveElements: [
              {
                type: "reflection",
                title: "Your Ubuntu Connection",
                description: "Reflect on how Ubuntu principles appear in your own life and community"
              }
            ],
            elderWisdom: {
              elderName: "Archbishop Desmond Tutu",
              culturalBackground: "Xhosa, South Africa",
              wisdomQuote: "A person with Ubuntu is open and available to others, affirming of others, does not feel threatened that others are able and good, for he or she has a proper self-assurance that comes from knowing that he or she belongs in a greater whole.",
              context: "Archbishop Tutu explains how Ubuntu was the foundation of the Truth and Reconciliation Commission",
              modernApplication: "How Ubuntu principles can guide modern leadership and community building"
            },
            historicalContext: {
              period: "Traditional to Contemporary",
              events: ["Ancient Bantu migrations", "Formation of African kingdoms", "Colonial period", "Apartheid era", "Post-apartheid South Africa"],
              significance: "Ubuntu philosophy has guided African societies for millennia, providing a framework for community, leadership, and human dignity",
              modernConnections: ["Community leadership", "Social justice movements", "Corporate responsibility", "International relations"]
            },
            reflectionPrompts: [
              "How do you see Ubuntu principles in your daily interactions?",
              "What would it mean to lead with Ubuntu in your community?",
              "How can Ubuntu help us address modern social challenges?"
            ]
          }
        ],
        milestones: [
          {
            id: "milestone-1",
            title: "Ubuntu Understanding",
            description: "Demonstrate understanding of Ubuntu principles",
            type: "wisdom",
            requirements: ["Complete all lessons", "Participate in discussions", "Write reflection essay"],
            rewards: ["Ubuntu Foundation Badge", "Access to Phase 2", "Community recognition"]
          }
        ],
        culturalPractices: [
          {
            name: "Ubuntu Circle",
            description: "Traditional community gathering for wisdom sharing",
            origin: "Ancient Bantu traditions",
            purpose: "Community building and wisdom transmission",
            instructions: [
              "Gather in a circle",
              "Begin with a moment of silence",
              "Share personal experiences",
              "Listen with open hearts",
              "End with collective wisdom"
            ],
            materials: ["Open space", "Comfortable seating", "Open minds"],
            modernAdaptation: "Virtual circles using video conferencing",
            communityImpact: "Strengthens bonds, builds trust, shares wisdom"
          }
        ]
      },
      {
        id: "phase-2",
        title: "The Crucible: 27 Years of Imprisonment",
        description: "Explore how Mandela's imprisonment shaped his leadership",
        duration: "12 hours",
        theme: "Resilience and Transformation",
        lessons: [
          {
            id: "lesson-2-1",
            title: "The Prison Years: A Leadership Laboratory",
            description: "How Mandela used his imprisonment to develop extraordinary leadership skills",
            contentType: "interactive",
            duration: "90 minutes",
            keyTopics: [
              "Strategic patience",
              "Education and self-improvement",
              "Building relationships with enemies",
              "Maintaining hope and vision"
            ],
            interactiveElements: [
              {
                type: "simulation",
                title: "Prison Leadership Challenge",
                description: "Experience leadership challenges in a constrained environment",
                instructions: "Navigate leadership scenarios with limited resources and difficult circumstances",
                duration: "45 minutes",
                groupSize: "small-group"
              }
            ],
            historicalContext: {
              period: "1964-1990",
              events: ["Rivonia Trial", "Robben Island imprisonment", "Release from prison"],
              significance: "Mandela's imprisonment became a crucible for developing leadership qualities that would later transform a nation",
              modernConnections: ["Personal resilience", "Strategic thinking", "Relationship building", "Vision maintenance"]
            }
          }
        ],
        milestones: [
          {
            id: "milestone-2",
            title: "Resilience Mastery",
            description: "Demonstrate understanding of resilience principles",
            type: "transformation",
            requirements: ["Complete simulation", "Write resilience plan", "Share personal story"],
            rewards: ["Resilience Badge", "Leadership toolkit", "Peer mentorship opportunity"]
          }
        ],
        culturalPractices: [
          {
            name: "Resilience Circle",
            description: "Traditional practice for building inner strength and community support",
            origin: "Ancient African traditions",
            purpose: "Building resilience and community support",
            instructions: [
              "Gather in a circle",
              "Share personal challenges",
              "Offer support and encouragement",
              "Practice active listening",
              "End with collective affirmation"
            ],
            materials: ["Open hearts", "Willingness to share", "Supportive environment"],
            modernAdaptation: "Virtual resilience circles and support groups",
            communityImpact: "Builds inner strength, fosters community support, promotes healing"
          }
        ]
      }
    ],
    resources: [
      {
        id: "resource-1",
        title: "Mandela's Personal Letters",
        description: "Collection of letters written during imprisonment",
        type: "pdf",
        downloadUrl: "/resources/mandela-letters.pdf",
        fileSize: "3.2 MB",
        culturalContext: "Personal insights into Mandela's thoughts and leadership development"
      },
      {
        id: "resource-2",
        title: "Ubuntu Leadership Meditation",
        description: "Guided meditation on Ubuntu principles",
        type: "audio",
        downloadUrl: "/resources/ubuntu-meditation.mp3",
        fileSize: "15.7 MB",
        culturalContext: "Traditional meditation practices adapted for modern leadership"
      }
    ],
    communityFeatures: [
      {
        type: "circle",
        title: "Leadership Wisdom Circle",
        description: "Monthly gatherings to share leadership insights and challenges",
        frequency: "Monthly",
        participants: "All path participants",
        benefits: ["Peer learning", "Support network", "Wisdom sharing", "Community building"]
      }
    ]
  },
  {
    id: "nkrumah-pan-african-vision",
    title: "Nkrumah's Pan-African Vision",
    subtitle: "Uniting Africa: From Independence to Continental Unity",
    description: "Explore Kwame Nkrumah's revolutionary vision for African unity and continental transformation",
    longDescription: `Journey through the life and vision of Kwame Nkrumah, the revolutionary leader who dreamed of a united Africa. This wisdom path explores Nkrumah's Pan-African philosophy and his efforts to transform Africa from colonial domination to continental unity and prosperity.

You'll discover how Nkrumah's vision of "Africa for Africans" and his commitment to continental unity shaped the modern African political landscape. Through interactive lessons, historical analysis, and community engagement, you'll learn how to apply Nkrumah's principles to contemporary challenges of African development and unity.

This path combines historical study with practical applications, helping you understand how individual nations can work together for collective prosperity while maintaining cultural diversity and sovereignty.`,
    category: "ubuntu_leadership",
    culturalRegion: "West Africa",
    difficulty: "Advanced",
    duration: "35 hours",
    rating: 4.8,
    totalRatings: 1892,
    enrollmentCount: 12450,
    price: "$69",
    icon: FaGlobe,
    theme: {
      primary: "#059669",
      secondary: "#fbbf24",
      accent: "#dc2626",
      background: "linear-gradient(135deg, #059669 0%, #fbbf24 50%, #dc2626 100%)"
    },
    features: [
      "Nkrumah's Original Writings",
      "Pan-African History Timeline",
      "Continental Unity Workshops",
      "Modern African Development Analysis",
      "Community Organizing Tools",
      "Cultural Exchange Programs"
    ],
    learningOutcomes: [
      "Understand Nkrumah's Pan-African vision and philosophy",
      "Learn strategies for continental cooperation and unity",
      "Develop skills for community organizing and mobilization",
      "Apply African-centered development principles",
      "Build networks for continental collaboration",
      "Advocate for African unity and self-determination"
    ],
    prerequisites: [
      "Interest in African history and politics",
      "Commitment to African development",
      "Basic understanding of colonialism and independence movements"
    ],
    culturalContext: {
      region: "West Africa (Ghana, specifically)",
      historicalPeriod: "20th Century (1909-1972)",
      modernRelevance: "Addresses contemporary challenges of African unity, development, and global positioning",
      keyFigures: [
        {
          name: "Kwame Nkrumah",
          title: "First Prime Minister and President of Ghana, Pan-African Revolutionary",
          period: "1909-1972",
          region: "Ghana",
          contributions: [
            "Led Ghana to independence",
            "Founded the Organization of African Unity (OAU)",
            "Advocated for continental unity",
            "Promoted African socialism",
            "Established educational institutions"
          ],
          wisdomQuotes: [
            "Africa must unite or perish.",
            "The independence of Ghana is meaningless unless it is linked up with the total liberation of the African continent.",
            "We face neither East nor West; we face forward.",
            "Seek ye first the political kingdom and all else shall be added unto you."
          ],
          biography: "Kwame Nkrumah was born in 1909 in Nkroful, Gold Coast (now Ghana). His education in the United States and Britain exposed him to Pan-African ideas and socialist principles. As Ghana's first prime minister and president, he became a leading voice for African unity and continental transformation."
        }
      ],
      civilizations: [
        "Ancient Ghana Empire",
        "Ashanti Kingdom",
        "Modern Ghana",
        "Pan-African Movement"
      ]
    },
    journey: [
      {
        id: "phase-1",
        title: "The Vision: Pan-African Philosophy",
        description: "Understanding Nkrumah's revolutionary vision for African unity",
        duration: "10 hours",
        theme: "Visionary Leadership",
        lessons: [
          {
            id: "lesson-1-1",
            title: "Pan-Africanism: The Foundation",
            description: "Exploring the philosophical foundation of Pan-African unity",
            contentType: "video",
            duration: "75 minutes",
            keyTopics: [
              "Definition of Pan-Africanism",
              "Historical development",
              "Philosophical principles",
              "Modern relevance"
            ],
            interactiveElements: [
              {
                type: "discussion",
                title: "African Unity Today",
                description: "Discuss current challenges and opportunities for African unity",
                groupSize: "community"
              }
            ]
          }
        ],
        milestones: [
          {
            id: "milestone-1",
            title: "Vision Clarity",
            description: "Articulate personal vision for African development",
            type: "wisdom",
            requirements: ["Complete lessons", "Write vision statement", "Community presentation"],
            rewards: ["Visionary Badge", "Leadership development", "Network access"]
          }
        ],
        culturalPractices: [
          {
            name: "Vision Circle",
            description: "Traditional practice for collective vision building and planning",
            origin: "Ancient African leadership traditions",
            purpose: "Building collective vision and strategic planning",
            instructions: [
              "Gather in a circle",
              "Share individual visions",
              "Identify common themes",
              "Build collective vision",
              "Create action plan"
            ],
            materials: ["Open minds", "Writing materials", "Collective spirit"],
            modernAdaptation: "Virtual vision circles and strategic planning sessions",
            communityImpact: "Builds collective vision, strengthens community bonds, creates shared purpose"
          }
        ]
      }
    ],
    resources: [
      {
        id: "resource-1",
        title: "Nkrumah's Speeches Collection",
        description: "Key speeches on Pan-Africanism and African unity",
        type: "audio",
        downloadUrl: "/resources/nkrumah-speeches.zip",
        fileSize: "45.2 MB",
        culturalContext: "Historical recordings of Nkrumah's powerful oratory"
      }
    ],
    communityFeatures: [
      {
        type: "forum",
        title: "Pan-African Discussion Forum",
        description: "Ongoing discussions about African unity and development",
        frequency: "Weekly",
        participants: "All path participants",
        benefits: ["Knowledge sharing", "Network building", "Collaboration opportunities", "Continental perspective"]
      }
    ]
  },
  {
    id: "du-bois-intellectual-legacy",
    title: "W.E.B. Du Bois's Intellectual Legacy",
    subtitle: "Scholar, Activist, and Pan-African Visionary",
    description: "Explore the profound intellectual contributions of W.E.B. Du Bois and his vision for African American empowerment and global Pan-African unity",
    longDescription: `Embark on an intellectual journey through the life and work of W.E.B. Du Bois, one of the most influential scholars and activists of the 20th century. This wisdom path examines Du Bois's groundbreaking contributions to sociology, his role in the civil rights movement, and his vision for Pan-African unity.

Through this comprehensive exploration, you'll discover how Du Bois's concept of "double consciousness" shaped our understanding of identity, how his research on African American communities laid the foundation for modern sociology, and how his Pan-African vision continues to inspire global movements for justice and equality.

This path combines academic rigor with practical activism, helping you understand how intellectual work can drive social change and how personal scholarship can serve collective liberation.`,
    category: "cultural_renaissance",
    culturalRegion: "Pan-African",
    difficulty: "Advanced",
    duration: "45 hours",
    rating: 4.8,
    totalRatings: 1654,
    enrollmentCount: 9870,
    price: "$89",
    icon: FaGraduationCap,
    theme: {
      primary: "#1e3a8a",
      secondary: "#fbbf24",
      accent: "#dc2626",
      background: "linear-gradient(135deg, #1e3a8a 0%, #fbbf24 50%, #dc2626 100%)"
    },
    features: [
      "Du Bois's Original Writings & Speeches",
      "Sociological Research Methods",
      "Pan-African Congress History",
      "Civil Rights Movement Analysis",
      "Academic Writing Workshops",
      "Activist Strategy Development"
    ],
    learningOutcomes: [
      "Understand Du Bois's sociological contributions and methodology",
      "Analyze the concept of double consciousness and its modern relevance",
      "Explore Pan-African philosophy and its global impact",
      "Develop skills in academic research and writing",
      "Learn strategies for combining scholarship with activism",
      "Apply Du Bois's vision to contemporary social justice work"
    ],
    prerequisites: [
      "Interest in social sciences and history",
      "Commitment to social justice and equality",
      "Basic understanding of African American history"
    ],
    culturalContext: {
      region: "United States and Pan-African",
      historicalPeriod: "19th-20th Century (1868-1963)",
      modernRelevance: "Addresses contemporary issues of racial justice, academic activism, and global solidarity movements",
      keyFigures: [
        {
          name: "W.E.B. Du Bois",
          title: "Scholar, Activist, Pan-African Leader, Sociologist",
          period: "1868-1963",
          region: "United States",
          contributions: [
            "Founded the NAACP",
            "Pioneered sociological research on African American communities",
            "Organized Pan-African Congresses",
            "Authored 'The Souls of Black Folk'",
            "Established academic institutions for Black education"
          ],
          wisdomQuotes: [
            "The problem of the twentieth century is the problem of the color line.",
            "Education is that whole system of human training within and without the school house walls, which molds and develops men.",
            "The cost of liberty is less than the price of repression.",
            "I believe in Liberty for all men: the space to stretch their arms and their souls, the right to breathe and the right to vote, the freedom to choose their friends, enjoy the sunshine, and ride on the railroads, uncursed by color."
          ],
          biography: "William Edward Burghardt Du Bois was born in 1868 in Great Barrington, Massachusetts. A brilliant scholar, he became the first African American to earn a doctorate from Harvard University. His groundbreaking work in sociology, his founding of the NAACP, and his leadership in the Pan-African movement established him as one of the most important intellectuals and activists of the 20th century."
        }
      ],
      civilizations: [
        "Ancient African Kingdoms",
        "African American Communities",
        "Pan-African Movement",
        "Modern Civil Rights Movement"
      ]
    },
    journey: [
      {
        id: "phase-1",
        title: "The Scholar's Foundation",
        description: "Understanding Du Bois's academic contributions and methodology",
        duration: "12 hours",
        theme: "Academic Excellence",
        lessons: [
          {
            id: "lesson-1-1",
            title: "The Souls of Black Folk: Double Consciousness",
            description: "Exploring Du Bois's most famous concept and its modern applications",
            contentType: "text",
            duration: "90 minutes",
            keyTopics: [
              "Definition of double consciousness",
              "Historical context",
              "Modern psychological applications",
              "Identity formation in diverse societies"
            ],
            interactiveElements: [
              {
                type: "reflection",
                title: "Your Experience with Double Consciousness",
                description: "Reflect on moments when you've experienced conflicting identities or perspectives"
              }
            ],
            elderWisdom: {
              elderName: "Dr. Cornel West",
              culturalBackground: "African American, United States",
              wisdomQuote: "Du Bois taught us that the life of the mind and the life of the spirit are inseparable from the struggle for justice.",
              context: "Dr. West explains how Du Bois's intellectual legacy continues to shape modern activism",
              modernApplication: "How academic work can serve social justice movements"
            }
          }
        ],
        milestones: [
          {
            id: "milestone-1",
            title: "Intellectual Foundation",
            description: "Demonstrate understanding of Du Bois's key concepts",
            type: "wisdom",
            requirements: ["Complete readings", "Write reflection essay", "Participate in discussion"],
            rewards: ["Scholar's Badge", "Access to research tools", "Community recognition"]
          }
        ],
        culturalPractices: [
          {
            name: "Academic Circle",
            description: "Traditional African approach to collective learning and wisdom sharing",
            origin: "Ancient African educational traditions",
            purpose: "Collective knowledge building and critical thinking",
            instructions: [
              "Gather in a circle",
              "Present research findings",
              "Engage in respectful debate",
              "Build collective understanding",
              "Apply insights to modern challenges"
            ],
            materials: ["Research materials", "Open minds", "Respectful dialogue"],
            modernAdaptation: "Virtual academic circles using collaborative platforms",
            communityImpact: "Strengthens intellectual community, builds critical thinking, advances knowledge"
          }
        ]
      }
    ],
    resources: [
      {
        id: "resource-1",
        title: "The Souls of Black Folk (Complete Text)",
        description: "Du Bois's seminal work on African American experience",
        type: "pdf",
        downloadUrl: "/resources/souls-of-black-folk.pdf",
        fileSize: "2.8 MB",
        culturalContext: "Foundational text for understanding African American identity and experience"
      }
    ],
    communityFeatures: [
      {
        type: "forum",
        title: "Academic Activism Forum",
        description: "Discussions on combining scholarship with social justice work",
        frequency: "Weekly",
        participants: "All path participants",
        benefits: ["Knowledge sharing", "Collaboration opportunities", "Mentorship", "Research partnerships"]
      }
    ]
  },
  {
    id: "king-nonviolent-revolution",
    title: "Dr. King's Nonviolent Revolution",
    subtitle: "Love, Justice, and the Beloved Community",
    description: "Walk in the footsteps of Dr. Martin Luther King Jr. and learn the principles of nonviolent resistance and the creation of the Beloved Community",
    longDescription: `Journey through the life and teachings of Dr. Martin Luther King Jr., exploring how his philosophy of nonviolent resistance and vision of the Beloved Community can transform our world today. This wisdom path examines King's spiritual foundation, his strategic approach to social change, and his enduring vision for a just and peaceful society.

You'll discover how King's understanding of agape love, his commitment to nonviolence, and his strategic brilliance created one of the most powerful movements for social change in history. Through interactive lessons, historical analysis, and practical exercises, you'll learn how to apply King's principles to contemporary challenges of injustice and inequality.

This path combines spiritual depth with practical activism, helping you develop the inner strength and strategic thinking needed to create positive change in your community and beyond.`,
    category: "spiritual_awakening",
    culturalRegion: "United States",
    difficulty: "Intermediate",
    duration: "38 hours",
    rating: 4.9,
    totalRatings: 2341,
    enrollmentCount: 15680,
    price: "$75",
    icon: FaPrayingHands,
    theme: {
      primary: "#059669",
      secondary: "#fbbf24",
      accent: "#dc2626",
      background: "linear-gradient(135deg, #059669 0%, #fbbf24 50%, #dc2626 100%)"
    },
    features: [
      "King's Original Speeches & Writings",
      "Nonviolent Resistance Training",
      "Beloved Community Workshops",
      "Spiritual Foundation Deep Dive",
      "Strategic Activism Planning",
      "Interfaith Dialogue Sessions"
    ],
    learningOutcomes: [
      "Understand King's philosophy of nonviolent resistance",
      "Develop skills in peaceful conflict resolution",
      "Learn to build the Beloved Community",
      "Apply spiritual principles to social justice work",
      "Master strategic planning for social movements",
      "Cultivate inner strength and moral courage"
    ],
    prerequisites: [
      "Open heart and mind",
      "Commitment to peace and justice",
      "Willingness to practice nonviolence"
    ],
    culturalContext: {
      region: "United States",
      historicalPeriod: "20th Century (1929-1968)",
      modernRelevance: "Addresses contemporary challenges of racial justice, police brutality, and building inclusive communities",
      keyFigures: [
        {
          name: "Dr. Martin Luther King Jr.",
          title: "Civil Rights Leader, Minister, Nobel Peace Prize Winner",
          period: "1929-1968",
          region: "United States",
          contributions: [
            "Led the Civil Rights Movement",
            "Organized the March on Washington",
            "Won the Nobel Peace Prize",
            "Founded the Southern Christian Leadership Conference",
            "Advocated for economic justice and peace"
          ],
          wisdomQuotes: [
            "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
            "The arc of the moral universe is long, but it bends toward justice.",
            "Injustice anywhere is a threat to justice everywhere.",
            "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."
          ],
          biography: "Martin Luther King Jr. was born in 1929 in Atlanta, Georgia. A Baptist minister and civil rights leader, he became the most visible spokesperson and leader in the Civil Rights Movement. His philosophy of nonviolent resistance and his vision of the Beloved Community continue to inspire movements for justice around the world."
        }
      ],
      civilizations: [
        "African American Church Tradition",
        "Civil Rights Movement",
        "American Democracy",
        "Global Peace Movement"
      ]
    },
    journey: [
      {
        id: "phase-1",
        title: "The Spiritual Foundation",
        description: "Understanding King's spiritual roots and philosophy of love",
        duration: "10 hours",
        theme: "Spiritual Awakening",
        lessons: [
          {
            id: "lesson-1-1",
            title: "Agape Love: The Foundation of Nonviolence",
            description: "Exploring King's understanding of unconditional love as the basis for social change",
            contentType: "meditation",
            duration: "75 minutes",
            keyTopics: [
              "Definition of agape love",
              "Spiritual foundation",
              "Practical applications",
              "Modern relevance"
            ],
            interactiveElements: [
              {
                type: "meditation",
                title: "Loving Your Enemies Meditation",
                description: "Guided meditation on practicing unconditional love",
                instructions: "Sit in comfortable position, focus on breathing, visualize extending love to difficult people",
                duration: "20 minutes",
                groupSize: "individual"
              }
            ]
          }
        ],
        milestones: [
          {
            id: "milestone-1",
            title: "Spiritual Foundation",
            description: "Demonstrate understanding of agape love principles",
            type: "transformation",
            requirements: ["Complete meditation practices", "Write reflection", "Practice loving-kindness"],
            rewards: ["Spiritual Badge", "Meditation toolkit", "Community support"]
          }
        ],
        culturalPractices: [
          {
            name: "Prayer Circle",
            description: "Traditional African American church practice of collective prayer",
            origin: "African American church tradition",
            purpose: "Spiritual support and community building",
            instructions: [
              "Gather in a circle",
              "Hold hands",
              "Share prayer requests",
              "Pray together",
              "End with affirmation"
            ],
            materials: ["Open hearts", "Faith", "Community spirit"],
            modernAdaptation: "Virtual prayer circles and spiritual support groups",
            communityImpact: "Strengthens spiritual bonds, provides support, builds community"
          }
        ]
      }
    ],
    resources: [
      {
        id: "resource-1",
        title: "I Have a Dream Speech (Audio)",
        description: "Original recording of King's most famous speech",
        type: "audio",
        downloadUrl: "/resources/i-have-a-dream.mp3",
        fileSize: "8.5 MB",
        culturalContext: "Historic moment in the Civil Rights Movement and American history"
      }
    ],
    communityFeatures: [
      {
        type: "circle",
        title: "Beloved Community Circle",
        description: "Monthly gatherings to practice nonviolence and build community",
        frequency: "Monthly",
        participants: "All path participants",
        benefits: ["Spiritual growth", "Community building", "Nonviolence practice", "Support network"]
      }
    ]
  },
  {
    id: "ancient-egyptian-wisdom",
    title: "Ancient Egyptian Wisdom",
    subtitle: "From Pharaohs to Modern Life: Timeless Teachings",
    description: "Discover the profound wisdom of ancient Egypt and learn how its teachings can guide modern life and spiritual development",
    longDescription: `Embark on a mystical journey through the wisdom of ancient Egypt, exploring the teachings of the pharaohs, the mysteries of the pyramids, and the spiritual practices that have influenced human civilization for millennia. This wisdom path reveals how ancient Egyptian philosophy, science, and spirituality can provide guidance for modern challenges.

You'll discover the principles of Ma'at (cosmic order and justice), the wisdom of the pharaohs, the spiritual practices of the temples, and the scientific achievements that continue to amaze modern scholars. Through interactive lessons, you'll learn how to apply these ancient teachings to contemporary life, from personal development to community leadership.

This path combines historical study with practical application, helping you understand how the wisdom of one of the world's greatest civilizations can illuminate your path today.`,
    category: "spiritual_awakening",
    culturalRegion: "North Africa",
    difficulty: "Intermediate",
    duration: "42 hours",
    rating: 4.7,
    totalRatings: 1892,
    enrollmentCount: 11230,
    price: "$82",
    icon: FaLandmark,
    theme: {
      primary: "#92400e",
      secondary: "#fbbf24",
      accent: "#dc2626",
      background: "linear-gradient(135deg, #92400e 0%, #fbbf24 50%, #dc2626 100%)"
    },
    features: [
      "Ancient Egyptian Texts & Hieroglyphs",
      "Pyramid Geometry & Sacred Mathematics",
      "Temple Rituals & Spiritual Practices",
      "Pharaonic Leadership Principles",
      "Astronomical Wisdom & Calendar Systems",
      "Modern Applications of Ancient Knowledge"
    ],
    learningOutcomes: [
      "Understand the principles of Ma'at and cosmic order",
      "Learn ancient Egyptian spiritual practices",
      "Apply pharaonic leadership principles to modern life",
      "Discover the sacred geometry of the pyramids",
      "Explore astronomical wisdom and timekeeping",
      "Integrate ancient wisdom with contemporary spirituality"
    ],
    prerequisites: [
      "Open mind to ancient wisdom",
      "Interest in spirituality and history",
      "Willingness to explore different worldviews"
    ],
    culturalContext: {
      region: "North Africa (Ancient Egypt)",
      historicalPeriod: "Ancient Period (3100 BCE - 30 BCE)",
      modernRelevance: "Provides timeless wisdom for personal development, leadership, and spiritual growth",
      keyFigures: [
        {
          name: "Pharaoh Akhenaten",
          title: "Pharaoh, Religious Reformer, Visionary",
          period: "1353-1336 BCE",
          region: "Ancient Egypt",
          contributions: [
            "Introduced monotheistic worship of Aten",
            "Revolutionized Egyptian art and culture",
            "Established new capital at Amarna",
            "Promoted universal love and harmony",
            "Influenced religious thought for millennia"
          ],
          wisdomQuotes: [
            "Live in truth and walk in the way of righteousness.",
            "The sun disk gives life to all that lives and grows.",
            "Let your heart be filled with love for all creation.",
            "Seek wisdom in the light of day and the darkness of night."
          ],
          biography: "Akhenaten, originally Amenhotep IV, was one of Egypt's most revolutionary pharaohs. He introduced the worship of Aten, the sun disk, as the supreme deity, promoting a message of universal love and harmony that continues to inspire spiritual seekers today."
        }
      ],
      civilizations: [
        "Ancient Egyptian Empire",
        "Nubian Kingdoms",
        "Kushite Dynasty",
        "Ptolemaic Egypt"
      ]
    },
    journey: [
      {
        id: "phase-1",
        title: "The Principles of Ma'at",
        description: "Understanding the foundation of Egyptian wisdom and cosmic order",
        duration: "12 hours",
        theme: "Cosmic Order",
        lessons: [
          {
            id: "lesson-1-1",
            title: "Ma'at: The Foundation of All Things",
            description: "Exploring the Egyptian concept of cosmic order and justice",
            contentType: "text",
            duration: "90 minutes",
            keyTopics: [
              "Definition of Ma'at",
              "The 42 Declarations of Innocence",
              "Cosmic balance and harmony",
              "Modern applications"
            ],
            interactiveElements: [
              {
                type: "practice",
                title: "Living in Ma'at",
                description: "Daily practices to align with cosmic order",
                instructions: "Practice truth-telling, kindness, and balance in daily life",
                duration: "Daily practice",
                groupSize: "individual"
              }
            ]
          }
        ],
        milestones: [
          {
            id: "milestone-1",
            title: "Ma'at Understanding",
            description: "Demonstrate understanding of Egyptian cosmic principles",
            type: "wisdom",
            requirements: ["Complete lessons", "Practice daily", "Write reflection"],
            rewards: ["Ma'at Badge", "Sacred texts access", "Community recognition"]
          }
        ],
        culturalPractices: [
          {
            name: "Temple Ritual",
            description: "Ancient Egyptian spiritual practice for purification and connection",
            origin: "Ancient Egyptian temple tradition",
            purpose: "Spiritual purification and divine connection",
            instructions: [
              "Purify with water",
              "Light sacred incense",
              "Recite prayers",
              "Meditate on divine presence",
              "Express gratitude"
            ],
            materials: ["Clean water", "Incense", "Sacred space", "Open heart"],
            modernAdaptation: "Modern purification rituals and meditation practices",
            communityImpact: "Promotes spiritual growth, inner peace, community harmony"
          }
        ]
      }
    ],
    resources: [
      {
        id: "resource-1",
        title: "The Book of the Dead (Selected Passages)",
        description: "Ancient Egyptian funerary texts with spiritual wisdom",
        type: "pdf",
        downloadUrl: "/resources/book-of-dead.pdf",
        fileSize: "4.2 MB",
        culturalContext: "Sacred texts revealing Egyptian beliefs about life, death, and the afterlife"
      }
    ],
    communityFeatures: [
      {
        type: "circle",
        title: "Temple Wisdom Circle",
        description: "Monthly gatherings to practice ancient Egyptian spiritual traditions",
        frequency: "Monthly",
        participants: "All path participants",
        benefits: ["Spiritual growth", "Ancient wisdom", "Community connection", "Cultural preservation"]
      }
    ]
  }
];

// Helper functions
export function getWisdomPathById(id: string): WisdomPath | undefined {
  return wisdomPaths.find(path => path.id === id);
}

export function getAllWisdomPaths(): WisdomPath[] {
  return wisdomPaths;
}

export function getWisdomPathsByCategory(category: WisdomPathCategory): WisdomPath[] {
  return wisdomPaths.filter(path => path.category === category);
}

export function getWisdomPathsByRegion(region: string): WisdomPath[] {
  return wisdomPaths.filter(path => path.culturalContext.region.includes(region));
}

export function getWisdomPathsByDifficulty(difficulty: string): WisdomPath[] {
  return wisdomPaths.filter(path => path.difficulty.toLowerCase() === difficulty.toLowerCase());
} 