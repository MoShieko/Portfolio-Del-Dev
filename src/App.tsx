import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { NoiseOverlay } from "./Components/NoiseOverlay";
import { Projects } from "./Components/Projects";
import { Stack } from "./Components/Stack";
import { styles } from "./styles";

export default function HomePage() {
  return (
    <div style={styles.root}>
      <NoiseOverlay />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
