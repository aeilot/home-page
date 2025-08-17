"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import NavigatorSection from "@/components/NavigatorSection";

export default function Home() {
  const titles = [
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
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);

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
  }, []);

  return (
    <div className={styles.page}>
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
            <span className={styles.dim}>Hi! I'm </span>Louis Deng<span className={styles.dim}>, a </span>student and indie developer<span className={styles.dim}> passionate about</span> technology, literature, music, <span className={styles.dim}>and</span> traveling.
          </p>
          <p className={styles.selfIntroText}>
            <span className={styles.dim}>I have experience with </span>iOS and macOS development using Swift and SwiftUI, Android development,<span className={styles.dim}> as well as</span> Java, Python, Django, PyTorch, C++, C, <span className={styles.dim}>and</span> Linux.
          </p>
          <p className={styles.selfIntroText}>
            <span className={styles.dim}>I graduated from</span> No. 2 High School of East China Normal University in 2025<span className={styles.dim}> and am currently studying at</span> Shanghai Jiao Tong University, Artificial Intelligence Major, class of 2029.
          </p>
          <p className={styles.selfIntroText}>
            <span className={styles.dim}>I’m fluent in </span>Chinese and English (TOEFL 114)<span className={styles.dim}>, which allows me to work in diverse environments and communicate effectively. And I'm currently learning </span>Spanish.
          </p>
          <p className={styles.selfIntroText}>
            <span className={styles.dim}>I love exploring new ideas, building creative projects, and traveling to experience different cultures. When I’m not coding, you can usually find me reading, playing guitar, or discovering hidden spots in the city.</span>
          </p>
          <p className={styles.selfIntroText}>
          <span className={styles.dim}>I’m always curious and eager to learn, and I enjoy connecting with people who share similar interests.</span>
          </p>
        </section>
          )}
        
      </main>
      <footer className={styles.footer}>
        <p className={styles.dim}>
          Made with <span className={styles.heart}>♥</span> by Louis Deng.
        </p>
      </footer>
    </div>
  );
}
