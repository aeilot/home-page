'use client';

import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import styles from './SnowEffect.module.css';

export default function SnowEffect() {
  const [isDecember, setIsDecember] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const resizeTimeoutRef = useRef(null);

  // Check if device is mobile
  const checkMobile = useCallback(() => {
    const userAgent = (navigator.userAgent || navigator.vendor || (typeof window !== 'undefined' && window.opera) || '').toLowerCase();
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    return mobileRegex.test(userAgent) || window.innerWidth <= 768;
  }, []);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    // December is month 11 (0-indexed)
    setIsDecember(currentMonth === 11);

    setIsMobile(checkMobile());

    // Check if dark mode is enabled
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);

    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    // Debounced resize handler to improve performance
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        setIsMobile(checkMobile());
      }, 150);
    };

    darkModeQuery.addEventListener('change', handleDarkModeChange);
    window.addEventListener('resize', handleResize);
    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeChange);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [checkMobile]);

  // Memoize snowflake properties so they don't change on every render
  const snowflakes = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.6 + 0.4,
      fontSize: `${Math.random() * 10 + 10}px`,
    }));
  }, []);

  // Don't show snow effect on mobile devices or in light mode
  if (!isDecember || isMobile || !isDarkMode) {
    return null;
  }

  return (
    <div className={styles.snowContainer}>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={styles.snowflake}
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            opacity: flake.opacity,
            fontSize: flake.fontSize,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
