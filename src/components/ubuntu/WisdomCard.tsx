import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface WisdomCardProps {
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  instructor?: string;
  imageUrl?: string;
  tags: string[];
  progress?: number;
  isEnrolled?: boolean;
  onEnroll?: () => void;
  onContinue?: () => void;
}

const difficultyColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800"
};

const categoryIcons = {
  'ancestral-wisdom': '🌳',
  'ubuntu-leadership': '👑',
  'healing-medicine': '🌿',
  'creative-expression': '🎨',
  'community-building': '🏘️',
  'spiritual-development': '🕯️'
};

export function WisdomCard({
  title,
  description,
  category,
  difficulty,
  duration,
  instructor,
  imageUrl,
  tags,
  progress,
  isEnrolled = false,
  onEnroll,
  onContinue
}: WisdomCardProps) {
  const categoryIcon = categoryIcons[category as keyof typeof categoryIcons] || '📚';
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur-sm overflow-hidden">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className={difficultyColors[difficulty]}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {duration}h
              </Badge>
            </div>
          </div>
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{categoryIcon}</span>
            <div>
              <CardTitle className="text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                {title}
              </CardTitle>
              {instructor && (
                <p className="text-sm text-gray-600 mt-1">
                  with {instructor}
                </p>
              )}
            </div>
          </div>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-amber-200 text-amber-700">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-gray-200 text-gray-600">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>

        {/* Progress Bar */}
        {isEnrolled && progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-between items-center">
          {isEnrolled ? (
            <Button 
              onClick={onContinue}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            >
              Continue Learning
            </Button>
          ) : (
            <Button 
              onClick={onEnroll}
              variant="outline"
              className="w-full border-amber-300 text-amber-600 hover:bg-amber-50"
            >
              Begin Journey
            </Button>
          )}
        </div>

        {/* Ubuntu Quote */}
        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-800 italic text-center">
            "I am because we are"
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 