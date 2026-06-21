import { STACK } from "../constants";
import type { Translation } from "../i18n";
import { styles } from "../styles";

type StackProps = {
  t: Translation;
};

export function Stack({ t }: StackProps) {
  return (
    <section
      className="page-section stack-section"
      style={{ ...styles.section, ...styles.stackSection }}
    >
      <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
        {t.stack.title}
      </h2>
      <p
        style={{
          ...styles.sectionSub,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        {t.stack.sub}
      </p>

      <div className="stack-grid" style={styles.stackGrid}>
        {STACK.map((s) => (
          <div key={s.label} style={styles.stackCard}>
            <span style={styles.stackIcon}>{s.icon}</span>
            <span style={styles.stackLabel}>{s.label}</span>
            <span style={styles.stackSub}>{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
