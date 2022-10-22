import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './css/app.css';

function App() {

  // Define state variables
  const [sessionColor, setSessionColor] = useState(null);
  const [isVisible, setVisible] = useState(null);

  // On page load, get a random item from the array of colors, and assign to session color
  useEffect(() => {
    const colorArr = ["spectrum-1", "spectrum-2", "spectrum-3", "spectrum-4", "spectrum-5", "spectrum-6", "spectrum-7"];
    const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    setSessionColor(randomColor);
  }, []);

  useEffect(() => {
    setVisible("is-visible");
  }, []);

  return (
    <div className={`app ${sessionColor}`}>

      {/* Hidden H1 */}
      <div className="visually-hidden">
        <h1>Clint Gunter</h1>
      </div>

      <div className="grid">
        <Header />
        <main className={`fade-in ${isVisible}`}>
          <About />
          <hr />
          <Skills />
          <hr />
          <Projects />
          <hr />
          <Contact />
          <hr />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
