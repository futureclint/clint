import logo from './images/clint-gunter.svg';
import headshot from './images/clint-gunter-headshot.jpg';
import './css/app.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">

      {/* Hidden H1 */}
      <div className="visually-hidden">
        <h1>Clint Gunter</h1>
      </div>

      {/* Header */}
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
      <main>

        {/* About Section */}
        <section className="about">
          <h2>Hi, I'm Clint</h2>
          <img className="headshot" src={headshot} alt="Clint Gunter" draggable="false" />
          <p>The intersection of design with technology is sort of where I live. “Arts & Technology” is actually the name of one of my degrees. Building superior, thoughtful, and functional interfaces is my passion.</p>
          <p>Recently I have come off of a sabbatical, sharpened my technical skills by completing a software engineering immersive, and worked on independent and freelance projects.</p>
          <p>When I’m not programming and designing, I love to noodle around on acoustic guitar, go on hikes, read physical books, and explore virtual worlds.</p>
          <p>I’m on the lookout for my next full-time opportunity. Would you like to work together? <a href="mailto:&#99;&#108;&#105;&#110;&#116;&#64;&#99;&#108;&#105;&#110;&#116;&#46;&#105;&#111;?subject=Let’s Work Together" target="_blank" rel="noreferrer">Send me a note!</a></p>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>React</li>
            <li>Aurelia</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>UI/UX Design</li>
            <li>Branding</li>
            <li>Liquid</li>
            <li>Shopify</li>
            <li>Statamic</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>When to Go Outside</h3>
            <p>Ever wondered when it would be best to go outside for a bit? This simple website uses your geolocation to pull weather data from the OpenWeather API, then calculates the span(s) of time it would be best to go outside. This project is a work in progress.</p>
          </div>
          <div className="project">
            <h3>Inflation Station</h3>
            <p>Inflation calculators are mostly terrible, so I thought it would be fun to design my own. Drawing from a database of CPI date, it calculates the relative value of items, accounting for inflation. This project is a work in progress.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2>Contact</h2>
          <p>I'd love to hear from you! The easiest way to contact me is to <a href="mailto:&#99;&#108;&#105;&#110;&#116;&#64;&#99;&#108;&#105;&#110;&#116;&#46;&#105;&#111;?subject=Let’s Work Together" target="_blank" rel="noreferrer">send me an email</a>. <i>Please note, I cannot respond to all email messages. I will respond to messages that are a good fit for my schedule and interests.</i></p>
          <p>You can also <Link to="/files/clint-gunter-resume.pdf" target="_blank" download>download my resume</Link>, visit me on <a href="#" target="_blank" rel="noopener">GitHub</a>, or visit me on <a href="#" target="_blank" rel="noopener">LinkedIn</a>.</p>
        </section>

      </main>
      <footer>
        <span>Thanks for visiting!</span>
        <br />
        <span>&copy; 2022&ndash;Present Clint Gunter</span>
      </footer>
    </div>
  );
}

export default App;
