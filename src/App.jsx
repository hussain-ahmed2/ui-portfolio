import About from "./components/About";
import BgBars from "./components/BgBars";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="overflow-hidden">
      <BgBars />
      <Header />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
