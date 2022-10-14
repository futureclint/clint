import { Link } from 'react-router-dom';
import headshot from '../images/clint-gunter-headshot-color.jpg';

function About() {
  return (
    <section className="about">
      <h2>Programmer with a Design Background</h2>
      <img className="headshot" src={headshot} alt="Clint Gunter" draggable="false" />
      <p>A designer who codes, or a programmer who designs? After almost a decade in the tech industry, I prefer the latter. I have always been interested in the intersection of arts and technology. At Texas A&M and UT Dallas, I studied everything from architecture and animation to programming and new media. At Texas A&M University I received a bachelors in Environmental Design, and at The University of Texas at Dallas I received a master of fine arts in Arts & Technology.</p>
      <p>After 8+ years in the industry as a web developer and designer, I decided to take a step I wished I had taken a long time ago by joining General Assembly's Software Engineering Immersive. While partially review, given my experience, the program greatly solidified the technical side of my skillset. After receiving my certificate of completion for the program, I can honestly say it was one of the best experiences of my life, giving me the confidence to tackle any technical challenge that might come my way.</p>
      <p>Most recently, I've been on sabbatical and working on independent projects. But now I am actively looking for my next opportunity. Do you want to work together or have a referral? You can <Link to="/files/clint-gunter-resume.pdf" target="_blank" download>download my resume</Link> and reach me <a href="mailto:&#99;&#108;&#105;&#110;&#116;&#64;&#99;&#108;&#105;&#110;&#116;&#46;&#105;&#111;?subject=Let’s Work Together" target="_blank" rel="noopener noreferrer">via email</a>. I would love to hear from you!</p>
    </section>
  );
}

export default About;
