import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <h1>Clint Gunter</h1>
        <p>Hi. I'm Clint Gunter, software engineer who loves design. My favorite work is where programming meets design.</p>
      </header>
      <hr />
      <main>
        <section class="about">
          <p>This is the about section with link to resume and photo.</p>
        </section>
        <hr />
        <section class="projects">
          <p>This is the section highlighting projects.</p>
        </section>
        <hr />
        <section class="contact">
          <p>This is the contact me section</p>
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
