import { styles } from "../styles";

export function Footer() {
  return (
    <footer className="site-footer" style={styles.footer}>
      <span style={styles.footerLogo}>DEL.DEV</span>
      <div className="site-footer__links" style={styles.footerLinks}>
        {["Github", "LinkedIn", "Twitter"].map((l) => (
          <a key={l} href="#" style={styles.footerLink}>
            {l}
          </a>
        ))}
      </div>
      <span style={styles.footerCopy}>
        (c) {new Date().getFullYear()} (DEL.DEV) All rights reserved.
      </span>
    </footer>
  );
}
