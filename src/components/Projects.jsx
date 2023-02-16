function Projects() {
  return (
    <section className="projects">
      <h2>Recent Projects</h2>
      <p>Below are a few examples of some recent independent projects I've been tinkering with. While they are still in development, I'm excited to share my progress.</p>
      <div className="project">
        <h3>When to Go Outside</h3>
        <p>Ever wondered when it would be best to go outside for a bit? This simple website uses your geolocation to pull weather data from the OpenWeather API, then calculates the span(s) of time it would be best to go outside. This project is a work in progress.</p>
        <p><a href="https://github.com/futureclint/when-to-go-outside" target="_blank" rel="noopener noreferrer">View Project <span className="icon-arrow">&#8599;</span></a></p>
      </div>
      <div className="project">
        <h3>Inflation Station</h3>
        <p>Inflation calculators are mostly terrible, so I thought it would be fun to design my own. Drawing from a database of CPI date, it calculates the relative value of items, accounting for inflation. This project is a work in progress.</p>
        <p><a href="https://github.com/futureclint/inflation-station" target="_blank" rel="noopener noreferrer">View Project <span className="icon-arrow">&#8599;</span></a></p>
      </div>
    </section>
  );
}

export default Projects;
