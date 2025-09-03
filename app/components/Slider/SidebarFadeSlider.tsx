"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./SidebarFadeSlider.module.css";

type Slide = {
  src: string;
  alt: string;
};

type Props = {
  slides: Slide[];
  intervalMs?: number; 
  fadeMs?: number;
  className?: string;
};

export default function SidebarFadeSlider({
  slides,
  intervalMs = 8000,
  fadeMs = 500,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = slides.length || 1;

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % total);
        setFading(false);
      }, fadeMs);
    }, Math.max(0, intervalMs - fadeMs));
  }, [fadeMs, intervalMs, total]);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [index, intervalMs, fadeMs, startTimer, total]);

  function stopTimer() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  const current = slides[index] ?? slides[0];

  return (
    <aside
      className={`${styles.wrapper} ${className}`}
      aria-roledescription="carousel"
      aria-label="Galería lateral"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div className={styles.whiteBg} />

      <div
        className={`${styles.imageHolder} ${fading ? styles.isFading : ""}`}
        style={{ transitionDuration: `${fadeMs}ms` }}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          priority
        />
      </div>
    </aside>
  );
}
