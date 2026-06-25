import { useState, useEffect, useRef } from "react";
import type { Translation } from "../i18n";
import { styles } from "../styles";
import { colorize } from "../utils.tsx";

type HeroProps = {
  t: Translation;
};

export function Hero({ t }: HeroProps) {
  const [typed, setTyped] = useState("");
  const fullText = `const portfolio = {\n  name: "System Architect" ,\n  stack: [ "React" , "TypeScript" , "SwiftUI" ],\n  status: "${t.hero.codeStatus}"\n};`;
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    const interval = setInterval(() => {
      if (idx.current < fullText.length) {
        setTyped(fullText.slice(0, idx.current + 1));
        idx.current++;
      } else {
        clearInterval(interval);
      }
    }, 22);
    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section" style={styles.hero}>
      <div style={styles.availableBadge}>
        <span style={styles.dot} />
        {t.hero.badge}
      </div>

      <h1 style={styles.heroTitle}>
        {t.hero.title}
        <br />
        <span style={styles.heroAccent}>{t.hero.accent}</span>
      </h1>

      <p style={styles.heroSub}>
        {t.hero.sub.split("\n").map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <div className="hero-actions" style={styles.heroBtns}>
        <button
          onClick={() => scrollToSection("projects")}
          style={styles.btnPrimary}
          type="button"
        >
          {t.hero.work}
        </button>
        <button
          type="button"
          style={styles.btnGhost}
          onClick={() => scrollToSection("contact")}
        >
          {t.hero.contact}
        </button>
      </div>

      {/* Code window */}
      <div className="code-window" style={styles.codeWindow}>
        <div style={styles.windowDots}>
          <span style={{ ...styles.windowDot, background: "#FF5F57" }} />
          <span style={{ ...styles.windowDot, background: "#FFBD2E" }} />
          <span style={{ ...styles.windowDot, background: "#28CA41" }} />
        </div>
        <pre style={styles.codePre}>
          {typed.split("\n").map((line, i) => (
            <div key={i} style={styles.codeLine}>
              <span style={styles.lineNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={styles.lineCode}>{colorize(line)}</span>
            </div>
          ))}
        </pre>
      </div>
    </section>
  );
}
