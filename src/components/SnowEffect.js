'use client';

import { useEffect, useState } from 'react';
import styles from './SnowEffect.module.css';

export default function SnowEffect() {
  const [isDecember, setIsDecember] = useState(false);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    // December is month 11 (0-indexed)
    setIsDecember(currentMonth === 11);
  }, []);

  if (!isDecember) {
    return null;
  }

  // Generate snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className={styles.snowContainer}>
      {snowflakes.map((index) => (
        <div
          key={index}
          className={styles.snowflake}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.6 + 0.4,
            fontSize: `${Math.random() * 10 + 10}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
