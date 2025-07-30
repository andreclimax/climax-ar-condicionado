'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ end, duration = 2000, suffix = '', className = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || isAnimating) return;

    setIsAnimating(true);
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Smooth easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Small delay for dramatic effect
    setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 200);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView, isAnimating]);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-500 ${
        isAnimating ? 'scale-110' : 'scale-100'
      }`}
    >
      {count}{suffix}
    </div>
  );
} 