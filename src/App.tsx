import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}

export default App;