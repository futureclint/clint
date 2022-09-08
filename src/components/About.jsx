import headshot from '../images/clint-gunter-headshot-color.jpg';

function About() {
  return (
    <section className="about">
      <h2 className="hi spectrum-color">Hi, I'm Clint</h2>
      <img className="headshot" src={headshot} alt="Clint Gunter" draggable="false" />
      <p>The intersection of design with technology is sort of where I live. “Arts & Technology” is actually the name of one of my degrees. Building superior, thoughtful, and functional interfaces is my passion.</p>
      <p>Recently I have come off of a sabbatical, sharpened my technical skills by completing a software engineering immersive, and worked on independent and freelance projects.</p>
      <p>When I’m not programming and designing, I love to noodle around on acoustic guitar, go on hikes, read physical books, and explore virtual worlds.</p>
      <p>I’m on the lookout for my next full-time opportunity. Would you like to work together? <a href="mailto:&#99;&#108;&#105;&#110;&#116;&#64;&#99;&#108;&#105;&#110;&#116;&#46;&#105;&#111;?subject=Let’s Work Together" target="_blank" rel="noopener noreferrer">Send me a note!</a></p>
    </section>
  );
}

export default About;
