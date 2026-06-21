import type { Translation } from "../i18n";
import { styles } from "../styles";

type AboutProps = {
  t: Translation;
};

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="page-section about-section" style={styles.section}>
      <div className="section-header" style={styles.sectionHeader}>
        <div>
          <h2 style={styles.sectionTitle}>{t.about.title}</h2>
          <p style={styles.sectionSub}>{t.about.sub}</p>
        </div>
      </div>

      <div className="about-grid" style={styles.aboutGrid}>
        <div style={styles.aboutPanel}>
          <p style={styles.aboutKicker}>{t.about.kicker}</p>
          <h3 style={styles.aboutTitle}>
            {t.about.headline}
          </h3>
          <p style={styles.aboutText}>
            {t.about.body1}
          </p>
          <p style={styles.aboutText}>
            {t.about.body2}
          </p>
        </div>

        <div style={styles.aboutStats}>
          {t.about.stats.map(([label, value]) => (
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
