import { type MouseEvent, useState } from "react";
import { BRAND_NAME } from "../constants";
import type { LanguageCode, Translation } from "../i18n";
import { languageOptions } from "../i18n";
import { styles } from "../styles";

const navItems = [
  { key: "home", href: "#home" },
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

type HeaderProps = {
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  t: Translation;
};

export function Header({ language, onLanguageChange, t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const navigateToSection =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      closeMenu();

      const target = document.getElementById(href.replace("#", ""));
      target?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <nav
      className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
      style={styles.nav}
    >
      <a href="#home" onClick={navigateToSection("#home")} style={styles.logo}>
        <img alt={`${BRAND_NAME} logo`} src="/logo.png" style={styles.logoImage} />
      </a>
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
        {navItems.map((item, i) => (
          <a
            key={item.key}
            href={item.href}
            onClick={navigateToSection(item.href)}
            style={{
              ...styles.navLink,
              ...(i === 0 ? styles.navLinkActive : {}),
            }}
          >
            {t.nav[item.key]}
          </a>
        ))}
        <label style={styles.languageControl}>
          <span style={styles.languageLabel}>{t.languageLabel}</span>
          <select
            aria-label={t.languageLabel}
            onChange={(event) =>
              onLanguageChange(event.target.value as LanguageCode)
            }
            style={styles.languageSelect}
            value={language}
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </nav>
  );
}
