import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  href?: string;
  className?: string;
}

export function Logo({ size = "md", showText = true, href, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  const getSizes = (size: string) => {
    switch (size) {
      case "sm": return "32px";
      case "md": return "40px";
      case "lg": return "48px";
      case "xl": return "64px";
      default: return "40px";
    }
  };

  const LogoContent = () => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <Image
          src="/images/paths/asante-logo.png"
          alt="Asante Logo"
          fill
          sizes={getSizes(size)}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-ubuntu font-bold text-gray-900`}>
            Asante
          </h1>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity duration-200">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
} 