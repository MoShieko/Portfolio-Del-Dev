import React from "react";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";

export function Header() {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>DEL.DEV</span>
      <div style={styles.navLinks}>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l}
            href="#"
            href={l === "Contact" ? "#contact" : "#"}
            style={{
              ...styles.navLink,
              ...(i === 0 ? styles.navLinkActive : {}),
            }}
          >
            {l}
          </a>
        ))}
      </div>
      <button style={styles.resumeBtn}>Resume</button>
    </nav>
  );
}
