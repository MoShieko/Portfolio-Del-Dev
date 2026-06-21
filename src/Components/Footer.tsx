import { BRAND_NAME } from "../constants";
import type { Translation } from "../i18n";
import { styles } from "../styles";

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="site-footer" style={styles.footer}>
      <img alt={`${BRAND_NAME} logo`} src="/logo.png" style={styles.footerLogo} />
      <span style={styles.footerCopy}>
        (c) {new Date().getFullYear()} ({BRAND_NAME}) {t.footer.rights}
      </span>
    </footer>
  );
}
