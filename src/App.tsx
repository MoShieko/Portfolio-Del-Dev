import { useEffect, useState } from "react";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { NoiseOverlay } from "./Components/NoiseOverlay";
import { Projects } from "./Components/Projects";
import { Stack } from "./Components/Stack";
import type { LanguageCode } from "./i18n";
import { detectLanguage, translations } from "./i18n";
import { styles } from "./styles";

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem("deldev-language") as LanguageCode | null;
    return savedLanguage && savedLanguage in translations
      ? savedLanguage
      : detectLanguage();
  });
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem("deldev-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div style={styles.root}>
      <NoiseOverlay />
      <Header language={language} onLanguageChange={setLanguage} t={t} />
      <Hero t={t} />
      <Projects t={t} />
      <About t={t} />
      <Stack t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
