import { WisdomCard } from "@/components/ubuntu/WisdomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Mock data for wisdom paths
const wisdomPaths = [
  {
    id: "1",
    title: "Ancestral Wisdom Foundations",
    description: "Discover the timeless wisdom passed down through generations, connecting you with your heritage and cultural roots.",
    category: "ancestral-wisdom",
    difficulty: "beginner" as const,
    duration: 12,
    instructor: "Elder Ama Osei",
    imageUrl: "/images/paths/ancestral-wisdom.jpg",
    tags: ["heritage", "storytelling", "cultural-roots", "family-history"],
    progress: 65,
    isEnrolled: true
  },
  {
    id: "2",
    title: "Ubuntu Leadership Principles",
    description: "Learn to lead with compassion, community-centered values, and the understanding that we are all interconnected.",
    category: "ubuntu-leadership",
    difficulty: "intermediate" as const,
    duration: 8,
    instructor: "Dr. Kwame Nkrumah",
    imageUrl: "/images/paths/ubuntu-leadership.jpg",
    tags: ["leadership", "community", "compassion", "interconnectedness"],
    progress: 23,
    isEnrolled: true
  },
  {
    id: "3",
    title: "Healing Through Traditional Medicine",
    description: "Explore ancient healing practices and their modern applications for physical, emotional, and spiritual wellness.",
    category: "healing-medicine",
    difficulty: "intermediate" as const,
    duration: 10,
    instructor: "Mama Zara",
    imageUrl: "/images/paths/healing-medicine.jpg",
    tags: ["healing", "wellness", "traditional-medicine", "spirituality"],
    progress: undefined,
    isEnrolled: false
  },
  {
    id: "4",
    title: "Creative Expression & Storytelling",
    description: "Unlock your creative potential through traditional storytelling, music, dance, and visual arts.",
    category: "creative-expression",
    difficulty: "beginner" as const,
    duration: 6,
    instructor: "Artist Kofi Addo",
    imageUrl: "/images/paths/creative-expression.jpg",
    tags: ["creativity", "storytelling", "arts", "self-expression"],
    progress: undefined,
    isEnrolled: false
  },
  {
    id: "5",
    title: "Building Resilient Communities",
    description: "Learn the principles of community building, conflict resolution, and sustainable development.",
    category: "community-building",
    difficulty: "advanced" as const,
    duration: 15,
    instructor: "Community Elder Sarah",
    imageUrl: "/images/paths/community-building.jpg",
    tags: ["community", "resilience", "sustainability", "conflict-resolution"],
    progress: undefined,
    isEnrolled: false
  },
  {
    id: "6",
    title: "Spiritual Development & Mindfulness",
    description: "Deepen your spiritual connection through meditation, prayer, and mindfulness practices from African traditions.",
    category: "spiritual-development",
    difficulty: "beginner" as const,
    duration: 8,
    instructor: "Spiritual Guide Amina",
    imageUrl: "/images/paths/spiritual-development.jpg",
    tags: ["spirituality", "mindfulness", "meditation", "inner-peace"],
    progress: undefined,
    isEnrolled: false
  }
];

const categories = [
  { id: "all", name: "All Paths", icon: "🌟" },
  { id: "ancestral-wisdom", name: "Ancestral Wisdom", icon: "🌳" },
  { id: "ubuntu-leadership", name: "Ubuntu Leadership", icon: "👑" },
  { id: "healing-medicine", name: "Healing & Medicine", icon: "🌿" },
  { id: "creative-expression", name: "Creative Expression", icon: "🎨" },
  { id: "community-building", name: "Community Building", icon: "🏘️" },
  { id: "spiritual-development", name: "Spiritual Development", icon: "🕯️" }
];

export default function WisdomPathsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wisdom <span className="text-amber-600">Paths</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on transformative learning journeys guided by African wisdom traditions, 
            connecting you with your heritage and empowering your personal growth.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Input
                placeholder="Search wisdom paths..."
                className="pl-10 border-amber-300 focus:border-amber-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <select className="px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="border-amber-300 text-amber-600 hover:bg-amber-50"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Path */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <div className="max-w-2xl">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Featured Path
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Ancestral Wisdom Foundations
              </h2>
              <p className="text-amber-100 text-lg mb-6">
                Begin your journey with this foundational course that connects you with the timeless wisdom 
                of your ancestors and cultural heritage.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span>👤</span>
                  <span>Elder Ama Osei</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>12 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌱</span>
                  <span>Beginner</span>
                </div>
              </div>
              <Button className="bg-white text-amber-600 hover:bg-gray-100">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Wisdom Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wisdomPaths.map((path) => (
            <WisdomCard
              key={path.id}
              title={path.title}
              description={path.description}
              category={path.category}
              difficulty={path.difficulty}
              duration={path.duration}
              instructor={path.instructor}
              imageUrl={path.imageUrl}
              tags={path.tags}
              progress={path.progress}
              isEnrolled={path.isEnrolled}
              onEnroll={() => console.log(`Enroll in ${path.title}`)}
              onContinue={() => console.log(`Continue ${path.title}`)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Transformational Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who are discovering their Ubuntu path and creating 
              positive change in their communities through African wisdom traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-3">
                Explore All Paths
              </Button>
              <Button size="lg" variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50 px-8 py-3">
                Get Personalized Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 