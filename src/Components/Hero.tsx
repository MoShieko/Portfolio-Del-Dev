import { useState, useEffect, useRef } from "react";
import { styles } from "../styles";
import { colorize } from "../utils.tsx";

export function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = `const portfolio = {\n  name: "System Architect" ,\n  stack: [ "React" , "TypeScript" , "SwiftUI" ],\n  status: "Building the future"\n};`;
  const idx = useRef(0);

  useEffect(() => {
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

  return (
    <section className="hero-section" style={styles.hero}>
      <div style={styles.availableBadge}>
        <span style={styles.dot} />
        AVAILABLE FOR NEW PROJECTS
      </div>

      <h1 style={styles.heroTitle}>
        Crafting digital experiences
        <br />
        <span style={styles.heroAccent}>with code.</span>
      </h1>

      <p style={styles.heroSub}>
        Full-stack developer specializing in React, Node.js, and Cloud
        Architecture.
        <br />
        Building scalable systems with mathematical precision.
      </p>

      <div className="hero-actions" style={styles.heroBtns}>
        <button style={styles.btnPrimary}>View My Work</button>
        <button
          style={styles.btnGhost}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
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
