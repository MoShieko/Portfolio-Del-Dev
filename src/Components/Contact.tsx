import React from "react";
import { styles } from "../styles";

export function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.contactBox}>
        <div style={styles.contactLeft}>
          <h2 style={styles.contactTitle}>
            Let's build something{" "}
            <span style={styles.heroAccent}>extraordinary.</span>
          </h2>
          <p style={styles.contactSub}>
            Currently accepting inquiries for freelance projects and high-impact
            engineering roles.
          </p>
          <div style={styles.contactMeta}>
            <span>✉ info@del.dev</span>
            <span>📍 's-Hertogenbosch / Netherlands</span>
          </div>
        </div>
        <div style={styles.contactRight}>
          {["> Name", "> Email", "> Project details..."].map((ph, i) => (
            <input
              key={i}
              placeholder={ph}
              style={{
                ...styles.contactInput,
                ...(i === 2 ? styles.contactTextarea : {}),
              }}
            />
          ))}
          <button style={styles.initBtn}>INIT_CONNECTION ▶</button>
        </div>
      </div>
    </section>
  );
}
