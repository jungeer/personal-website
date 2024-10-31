import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

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
    </div>
  );
}

export default App;
