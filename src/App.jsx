import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './css/app.css';

function App() {
  return (
    <div className="app">

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
