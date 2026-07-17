import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink text-bone">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
