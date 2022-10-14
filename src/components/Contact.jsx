import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>I'd love to hear from you! The easiest way to contact me is to <a href="mailto:&#99;&#108;&#105;&#110;&#116;&#64;&#99;&#108;&#105;&#110;&#116;&#46;&#105;&#111;?subject=Let’s Work Together" target="_blank" rel="noopener noreferrer">send me an email</a>. Please note: I cannot respond to all email messages. I will respond to messages that are a good fit for my schedule and interests.</p>
      <p>You can also <Link to="/files/clint-gunter-resume.pdf" target="_blank" download>download my resume</Link> and view my profiles on <a href="https://github.com/futureclint" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/futureclint/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </section>
  );
}

export default Contact;
