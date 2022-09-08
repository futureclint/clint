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

  // Define sessionColor state variable
  const [sessionColor, setSessionColor] = useState(null);

  // On page load, get a random item from the array of colors, and assign to session color
  useEffect(() => {
    const colorArr = ["spectrum-1", "spectrum-2", "spectrum-3", "spectrum-4", "spectrum-5", "spectrum-6", "spectrum-7"];
    const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    setSessionColor(randomColor);
  }, [])

  return (
    <div className={`app ${sessionColor}`}>

      {/* Hidden H1 */}
      <div className="visually-hidden">
        <h1>Clint Gunter</h1>
      </div>

      <div className="grid">

        <Header />

        <main>

          <About />

          <Skills />

          <Projects />

          <Contact />

        </main>

        <Footer />

      </div>

    </div>
  );
}

export default App;
