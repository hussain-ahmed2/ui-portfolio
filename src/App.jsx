import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
