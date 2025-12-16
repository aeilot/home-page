"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import NavigatorSection from "@/components/NavigatorSection";
import SnowEffect from "@/components/SnowEffect";

export default function Home() {

  // Helper function to get festive greetings based on current date
  const getFestiveGreetings = () => {
    const now = new Date();
    const month = now.getMonth(); // 0-indexed
    const day = now.getDate();

    // New Year (December 26 - January 7)
    if ((month === 11 && day >= 26) || (month === 0 && day <= 7)) {
      return [
        "Happy New Year",
        `Happy ${now.getFullYear()}`,
        "New Year's Greetings",
        "Cheers to the New Year",
      ];
    }

    // Valentine's Day (February 10-14)
    if (month === 1 && day >= 10 && day <= 14) {
      return [
        "Happy Valentine's Day",
        "Love is in the air",
        "Happy Hearts Day",
        "Spread the Love",
      ];
    }

    // Independence Day (July 1-4)
    if (month === 6 && day >= 1 && day <= 4) {
      return [
        "Happy 4th of July",
        "Independence Day",
        "Happy Independence Day",
        "Celebrate Freedom",
      ];
    }

    // Halloween (October 25-31)
    if (month === 9 && day >= 25 && day <= 31) {
      return [
        "Happy Halloween",
        "Trick or Treat",
        "Spooky Season",
        "Boo!",
      ];
    }

    // Thanksgiving (4th Thursday of November)
    if (month === 10) {
      // Calculate 4th Thursday: Find first Thursday, then add 3 weeks
      const firstDay = new Date(now.getFullYear(), 10, 1);
      const firstThursday = 1 + ((4 - firstDay.getDay() + 7) % 7);
      const fourthThursday = firstThursday + 21;
      // Show greeting from 3 days before to 3 days after Thanksgiving
      if (day >= fourthThursday - 3 && day <= fourthThursday + 3) {
        return [
          "Happy Thanksgiving",
          "Give Thanks",
          "Thankful",
          "Grateful Hearts",
        ];
      }
    }

    // Christmas Season (December 1-25)
    if (month === 11 && day >= 1 && day <= 25) {
      return [
        "Merry Christmas",
        "Happy Holidays",
        "Season's Greetings",
        "Joy to the World",
      ];
    }

    // Default multilingual greetings
    return [
      "Hello, there", // English
      "Bonjour",      // French
      "Hola",         // Spanish
      "Ciao",         // Italian
      "Guten Tag",    // German
      "Olá",          // Portuguese
      "Привет",       // Russian
      "你好",         // Chinese (Simplified)
      "哈囉",         // Chinese (Traditional)
      "こんにちは",     // Japanese
      "안녕하세요",      // Korean
      "مرحبا",         // Arabic
      "שלום",          // Hebrew
      "नमस्ते",        // Hindi
      "Hej",          // Swedish
      "Salve",        // Latin/Italian variant
    ];
  };

  const [titles, setTitles] = useState([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);

  // Initialize titles on mount
  useEffect(() => {
    setTitles(getFestiveGreetings());
  }, []);

  const Bio = "HSEFZ '25, SJTU '29";

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 500); // fade out before switching
    }, 3000); // switch every 3s

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className={styles.page}>
      <SnowEffect />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.textBlock}>
              <h1>
                <span className={`${styles.fade} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                  {titles[index]}<span className={styles.highlight}>.</span>
                </span>
              </h1>
              <p className={styles.intro}>
                <span className={styles.dim}>I am</span> Louis Deng.
              </p>
            </div>
            <div className={styles.avatar}>
              <Image src="/avatar.png" alt="Louis Deng" width={120} height={120} className={styles.avatarImg} />
            </div>
          </div>
        </section>
        <hr className={styles.divider}></hr>
        <section className={styles.socialSection}>
          <h2 className={`${styles.dim} ${styles.socialSectionTitle}`}>{Bio}</h2>
          <div className={styles.socialRow}>
            <a href="mailto:louisaeilotd@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-mail-line"></i>
            </a>
            <a href="https://t.me/aeilotd" target="_blank" rel="noopener noreferrer">
              <i className="ri-telegram-line"></i>
            </a>
            <a href="https://github.com/aeilot" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/chenluo-deng-85b37a33a/" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-line"></i>
            </a>
            <a href="https://www.instagram.com/aeilotd/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </section>
        <NavigatorSection></NavigatorSection>
        <hr className={styles.divider}></hr>
        {/* <div className={styles.ctas}>
          <a             className={styles.secondary}
 onClick={() => setAboutOpen(!aboutOpen)}>
            {aboutOpen ? 'Close' : 'About'}
          </a>
        </div> */}
        {aboutOpen && (
          <section className={styles.selfIntroSection}>
            <p className={styles.selfIntroText}>
              <span className={styles.dim}>Hi! I'm </span>Louis Deng<span className={styles.dim}>, an </span>Artificial Intelligence student and indie developer<span className={styles.dim}> fascinated by the intersection of </span>technology, literature, <span className={styles.dim}>and</span> creative expression.
            </p>
            <p className={styles.selfIntroText}>
              <span className={styles.dim}>My technical focus includes </span>iOS and macOS development (Swift/SwiftUI)<span className={styles.dim}> and </span>Android ecosystems.<span className={styles.dim}> I also engineer solutions using </span>Python (Django, PyTorch), C++, C, <span className={styles.dim}>and</span> Linux environments.
            </p>
            <p className={styles.selfIntroText}>
              <span className={styles.dim}>Currently, I am an undergraduate at </span>Shanghai Jiao Tong University (Class of 2029)<span className={styles.dim}> majoring in </span>Artificial Intelligence,<span className={styles.dim}> following my graduation from </span>No. 2 High School of East China Normal University.
            </p>
            <p className={styles.selfIntroText}>
              <span className={styles.dim}>I bridge cultures with native </span>Chinese<span className={styles.dim}> and professional </span>English (TOEFL 114)<span className={styles.dim}>, and I am currently expanding my linguistic toolkit with </span>Spanish.
            </p>
            <p className={styles.selfIntroText}>
              <span className={styles.dim}>Beyond code, I am an avid traveler and learner. You'll often find me </span>reading, playing the guitar, <span className={styles.dim}>or </span>exploring the city's hidden corners<span className={styles.dim}> seeking new inspiration.</span>
            </p>
          </section>
        )}
      </main>
      <footer className={styles.footer}>
        <p className={styles.dim}>
          Made with <span className={styles.heart}>♥</span> by Louis Deng. 2015 till now.
        </p>
      </footer>
    </div>
  );
}
