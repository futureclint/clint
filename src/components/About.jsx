import { Link } from 'react-router-dom';
import headshot from '../images/clint-gunter-headshot.jpg';

function About() {
  return (
    <section className="about">
      <h2>Programmer with a Design Background</h2>
      <img className="headshot" src={headshot} width="150" height="150" alt="Clint Gunter" draggable="false" />

      <p>Coming from a multidisciplinary, design-focused educational background, I have accumulated 10+ years of experience in web design and development in the advertising space, the tech start-up space, and independently. I have a creative background, but have always been most interested in where creativity intersects with technology. Over the course of my career, I have gained more and more technical expertise, culminating with a Software Engineering Immersive training program with General Assembly, which was one of the best experiences of my life. In this program, everything I had already learned in my career combined perfectly with new ideas, technologies, and concepts to make me a much better equipped full-stack developer. While development is my main focus, I will always have an eye toward design. In 2023, I am looking to transition back to full-time employment after taking a break for career development and independent work. As a team-oriented, team-first person, I can’t wait to be a part of a team again.</p>
      <p>Do you want to work together or have a referral? You can <Link to="/files/clint-gunter-resume.pdf" target="_blank" download>download my resume</Link> and reach me <a href="mailto:&#99;&#108;&#105;&#110;&#116;&#64;&#99;&#108;&#105;&#110;&#116;&#46;&#105;&#111;?subject=Let’s Work Together" target="_blank" rel="noopener noreferrer">via email</a>. I would love to hear from you!</p>
    </section>
  );
}

export default About;
