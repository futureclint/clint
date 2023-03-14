import inflation from '../images/project_inflation-station.svg';
import when from '../images/project_when.png';
import lumics1 from '../images/project_lumics1.png';
import lumics2 from '../images/project_lumics2.png';
import lumics3 from '../images/project_lumics3.png';

function Projects() {
  return (
    <section className="projects">

      <h2>Recent Projects</h2>
      <p>Below are a few examples of some recent projects I've been working on. While they are still in development, I'm excited to share my progress.</p>

      {/* Inflation Station */}
      <div className="project">
        <h3>Inflation Station</h3>
        <p>Inflation calculators are mostly terrible, so I thought it would be fun to design my own. Drawing from CPI date, it calculates the relative value of items, accounting for inflation. The original version of this project used Ruby on Rails and PostgreSQL in order to try out some new technologies. A full revision is in progress, and is being built with React, JavaScript and Sass/SCSS.</p>
        <img className="project-image inflation-station" src={inflation} alt="Inflation Station logo" draggable="false" />
        <p><a href="https://github.com/futureclint/inflation-station" target="_blank" rel="noopener noreferrer">View Project <span className="icon-arrow">&#8599;</span></a></p>
      </div>

      <hr className="short" />

      {/* When To Go Outside */}
      <div className="project">
        <h3>When To Go Outside</h3>
        <p>Ever wondered when it would be best to go outside for a bit? This simple website uses your geolocation to pull weather data from the OpenWeather API, then calculates the span(s) of time it would be best to go outside. This project is a work in progress, built with JavaScript and CSS.</p>
        <img className="project-image border" src={when} alt="When To Go Outside" draggable="false" />
        <p><a href="https://github.com/futureclint/when-to-go-outside" target="_blank" rel="noopener noreferrer">View Project <span className="icon-arrow">&#8599;</span></a></p>
      </div>

      <hr className="short" />

      {/* Ambience Library */}
      <div className="project">
        <h3>Ambience Library</h3>
        <p>Coming soon, in collaboration with <a href="https://devon.moubry.com" target="_blank" rel="noopener noreferrer">Devon Moubry</a>, is a project that displays a curated list of ambience videos from YouTube that allows the user to filter results in granular fashion. This project will be built with Vue, TypeScript, and Sass/SCSS.</p>
        <p><a href="https://github.com/futureclint/ambience-library" target="_blank" rel="noopener noreferrer">View Progress <span className="icon-arrow">&#8599;</span></a></p>
      </div>

      <hr />

      <h2>Past Work</h2>

      {/* Lumics */}
      <div className="project">
        <h3>Lumics</h3>
        <p>UI/UX design, front-end development, and branding for a SaaS web app that displays, monitors, and manages thousands of devices for enterprise. Created branding and logo design for the app. Created an extensive custom icon set as part of a look-and-feel overhaul. Extensive front-end UI development to implement designs and create functional UI. Built with Aurelia, JavaScript, and Sass/SCSS.</p>
        <img className="project-image lumics1" src={lumics1} alt="Lumics logo" draggable="false" />
        <img className="project-image lumics2" src={lumics2} alt="Lumics sidebar nav and icons" draggable="false" />
        <img className="project-image lumics3" src={lumics3} alt="Lumics dashboard" draggable="false" />
      </div>

    </section>
  );
}

export default Projects;
