import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { styles } from "./styles";

export default function HomePage() {
  return (
    <div style={styles.root}>
      <NoiseOverlay />
      <Header />
      <Hero />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
