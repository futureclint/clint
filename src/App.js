import logo from './images/clintgunter.svg';
import './css/app.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="visually-hidden">
        <h1>Clint Gunter</h1>
      </div>
      <header>
        <img className="logo" src={logo} alt="Clint Gunter" />
        <p>Hi. I'm Clint Gunter, software engineer who loves design. My favorite work is where programming meets design.</p>
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
