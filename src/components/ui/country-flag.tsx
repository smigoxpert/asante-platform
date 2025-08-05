import { getCountryFlag, getCountryFromCode } from "@/lib/countryFlags";

interface CountryFlagProps {
  countryCode: string;
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
  className?: string;
}

export function CountryFlag({ 
  countryCode, 
  size = 'md', 
  showTooltip = true, 
  className = "" 
}: CountryFlagProps) {
  const flag = getCountryFlag(countryCode);
  const countryName = getCountryFromCode(countryCode);
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <span 
      className={`${sizeClasses[size]} ${className}`}
      title={showTooltip ? countryName : undefined}
      role="img"
      aria-label={`Flag of ${countryName}`}
    >
      {flag}
    </span>
  );
} 