import { LanguageProvider } from "./hooks/useLanguage";
import { Navigation } from "./components/sections/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Dishes } from "./components/sections/Dishes";
import { ImageStrip } from "./components/sections/ImageStrip";
import { Menu } from "./components/sections/Menu";
import { Gallery } from "./components/sections/Gallery";
import { Reservation } from "./components/sections/Reservation";
import { Location } from "./components/sections/Location";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Dishes />
        <ImageStrip />
        <Menu />
        <Gallery />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
