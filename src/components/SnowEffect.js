'use client';

import { useEffect, useState, useMemo } from 'react';
import styles from './SnowEffect.module.css';

export default function SnowEffect() {
  const [isDecember, setIsDecember] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    // December is month 11 (0-indexed)
    setIsDecember(currentMonth === 11);

    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      return mobileRegex.test(userAgent.toLowerCase()) || window.innerWidth <= 768;
    };

    setIsMobile(checkMobile());

    // Optional: listen to resize events to handle device rotation or window resize
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Don't show snow effect on mobile devices
  if (!isDecember || isMobile) {
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
