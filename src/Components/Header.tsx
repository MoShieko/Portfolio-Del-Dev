import { useState } from "react";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";

const linkTargets: Record<string, string> = {
  Home: "#",
  Projects: "#projects",
  About: "#about",
  Contact: "#contact",
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
      style={styles.nav}
    >
      <span style={styles.logo}>DEL.DEV</span>
      <button
        aria-label="Menu openen"
        aria-expanded={isMenuOpen}
        className="menu-toggle"
        onClick={() => setIsMenuOpen((open) => !open)}
        style={styles.menuToggle}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <div className="site-nav__links" style={styles.navLinks}>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l}
            href={linkTargets[l]}
            onClick={closeMenu}
            style={{
              ...styles.navLink,
              ...(i === 0 ? styles.navLinkActive : {}),
            }}
          >
            {l}
          </a>
        ))}
      </div>
      <button className="resume-button" style={styles.resumeBtn}>
        Resume
      </button>
    </nav>
  );
}
