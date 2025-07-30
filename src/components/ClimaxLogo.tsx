import Image from 'next/image';

interface ClimaxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function ClimaxLogo({ size = 'md', showText = true, className = '' }: ClimaxLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative ${sizeClasses[size]} mr-3`}>
        <Image
          src="/climax-logo.png"
          alt="Climax Ar Condicionado"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-bold text-climax-primary`}>
            Climax
          </h1>
          <span className="text-sm text-climax-gray-600 hidden sm:block">
            Ar Condicionado
          </span>
        </div>
      )}
    </div>
  );
} 