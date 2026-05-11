import { Navigation } from "./components/sections/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Menu } from "./components/sections/Menu";
import { Gallery } from "./components/sections/Gallery";
import { Reservation } from "./components/sections/Reservation";
import { Instagram } from "./components/sections/Instagram";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="noise-overlay">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reservation />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
