import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
