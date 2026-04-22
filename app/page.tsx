"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./poster.module.css";

export default function Home() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const resize = () => {
      const parent = el.parentElement;
      if (!parent) return;

      // reset scale per misurazione corretta
      setScale(1);

      requestAnimationFrame(() => {
        const parentWidth = parent.offsetWidth;
        const contentWidth = el.scrollWidth;

        const newScale = parentWidth / contentWidth;

        // mai sopra 1 (non ingrandisce)
        setScale(Math.min(1, newScale));
      });
    };

    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div className={styles.poster}>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.topLine}>
            <span className={styles.line}></span>
            <span className={styles.star}>★</span>
            <span>EUROPEAN CUP FINAL 1966-67</span>
            <span className={styles.star}>★</span>
            <span className={styles.line}></span>
          </div>

          {/* RIGA SCALABILE */}
          <div
            ref={rowRef}
            className={styles.scoreLine}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center",
              whiteSpace: "nowrap",
            }}
          >
            <span className={styles.team}>CELTIC</span>
            <span className={styles.score}>2-1</span>
            <span className={styles.team}>INTERNAZIONALE FC</span>
          </div>
        </div>

        {/* resto poster */}
        <div className={styles.body}></div>
      </div>
    </main>
  );
}
