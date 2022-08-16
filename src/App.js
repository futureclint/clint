import logo from './images/clint-gunter.svg';
import './css/app.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="visually-hidden">
        <h1>Clint Gunter</h1>
      </div>
      <header>
        <div className="logo">
          <div className="logo-lines">
            <div className="logo-line-shape" id="line-1"></div>
            <div className="logo-line-shape" id="line-2"></div>
            <div className="logo-line-shape" id="line-3"></div>
            <div className="logo-line-shape" id="line-4"></div>
            <div className="logo-line-shape" id="line-5"></div>
            <div className="logo-line-shape" id="line-6"></div>
            <div className="logo-line-shape" id="line-7"></div>
          </div>
          <img className="logo-text" src={logo} alt="Clint Gunter" draggable="false" />
        </div>
      </header>
      <hr />
      <main>
        <section className="about">
          <p>This is the about section with link to resume and photo.</p>
        </section>
        <hr />
        <section className="projects">
          <p>This is the section highlighting projects.</p>
        </section>
        <hr />
        <section className="contact">
          <p>This is the contact me section.</p>
        </section>
      </main>
      <hr />
      <footer>
        <span>Thanks for visiting!</span>
        <br />
        <span>&copy; 2022&ndash;Present Clint Gunter</span>
      </footer>
    </div>
  );
}

export default App;
