import { styles } from "../styles";

export function About() {
  return (
    <section id="about" className="page-section about-section" style={styles.section}>
      <div className="section-header" style={styles.sectionHeader}>
        <div>
          <h2 style={styles.sectionTitle}>About</h2>
          <p style={styles.sectionSub}>A little context behind the code.</p>
        </div>
      </div>

      <div className="about-grid" style={styles.aboutGrid}>
        <div style={styles.aboutPanel}>
          <p style={styles.aboutKicker}>SYSTEM PROFILE</p>
          <h3 style={styles.aboutTitle}>
            I build fast, clean interfaces with a strong technical foundation.
          </h3>
          <p style={styles.aboutText}>
            My work sits between product thinking and engineering detail:
            responsive layouts, maintainable React components, reliable APIs,
            and interfaces that feel calm even when the system behind them is
            complex.
          </p>
          <p style={styles.aboutText}>
            I like projects where performance, clarity, and polish all matter.
            From dashboards to booking flows, I focus on making the product easy
            to scan, easy to use, and ready to grow.
          </p>
        </div>

        <div style={styles.aboutStats}>
          {[
            ["Focus", "React, TypeScript, scalable UI"],
            ["Approach", "Responsive, accessible, maintainable"],
            ["Base", "'s-Hertogenbosch, Netherlands"],
          ].map(([label, value]) => (
            <div key={label} style={styles.aboutStat}>
              <span style={styles.aboutStatLabel}>{label}</span>
              <span style={styles.aboutStatValue}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
