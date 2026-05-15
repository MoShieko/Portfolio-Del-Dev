import React from "react";
import { STACK } from "../constants";
import { styles } from "../styles";

export function Stack() {
  return (
    <section style={{ ...styles.section, ...styles.stackSection }}>
      <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
        Technical Stack
      </h2>
      <p
        style={{
          ...styles.sectionSub,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Architecting with the industry's most robust tools.
      </p>

      <div style={styles.stackGrid}>
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
