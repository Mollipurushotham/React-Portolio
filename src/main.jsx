import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Github, Linkedin, Mail, ArrowUpRight, Download, Menu } from "lucide-react";

const Projects = lazy(() => import("./sections/Projects.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

function App() {
  const skills = ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Responsive Design", "Git & GitHub"];
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">P<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#resume">Resume</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Hi, I'm <span>Purushotham.</span><br />I build for the web.</h1>
            <p className="hero-text">A passionate frontend developer focused on creating clean, responsive and user-friendly web experiences.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
            <div className="socials">

              <div className="socials">
                <a
                  href="https://github.com/Mollipurushotham"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>

                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>

                <a
                  href="mailto:mollipurushotham6@gmail.com"
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </div>

            </div>
          </div>
          <div className="hero-art" aria-label="Decorative code card">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="code-card">
              <div className="code-top"><span /><span /><span /><small>developer.js</small></div>
              <pre><code><b>const</b> developer = {"{"}{"\n"}  name: <i>"Purushotham"</i>,{"\n"}  role: <i>"Frontend Developer"</i>,{"\n"}  passion: <i>"Building web"</i>,{"\n"}  learning: <i>"Every day"</i>{"\n"}{"}"};{"\n\n"}<b>developer</b>.create();</code></pre>
            </div>
            <div className="floating-tag">React <span>✦</span> JavaScript</div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div><h2>Curious mind.<br /><span>Thoughtful code.</span></h2>
            <p className="body-copy">I’m a B.Sc. Computer Science graduate interested in frontend development. I enjoy turning ideas into accessible, responsive interfaces and continuously improving my development skills.</p>
            <p className="body-copy">My focus is on writing understandable code, learning modern tools and building projects that solve real problems.</p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><div><div className="section-label">02 / SELECTED WORK</div><h2>Projects that <span>speak.</span></h2></div><p className="muted">A selection of things I've built<br />while learning and creating.</p></div>
          <Suspense fallback={<p className="muted">Loading projects…</p>}><Projects /></Suspense>
        </section>

        <section className="section skills" id="skills">
          <div className="section-label">03 / TOOLKIT</div><h2>Skills & <span>technologies.</span></h2>
          <p className="body-copy">Tools I use and concepts I'm developing proficiency in.</p>
          <div className="skill-grid">{skills.map((skill, i) => <div className="skill" key={skill}><span>0{i + 1}</span>{skill}</div>)}</div>
        </section>

        <section className="section resume" id="resume">
          <div><div className="section-label">04 / EXPERIENCE & EDUCATION</div><h2>My <span>background.</span></h2></div>
          <div className="resume-card"><div><p className="eyebrow">EDUCATION</p><h3>B.Sc. Computer Science</h3><p className="muted">Reva University · Add graduation year</p></div><p className="body-copy">Building a strong foundation in computer science and applying it through practical frontend projects.</p></div>
          <a className="button secondary" href="/resume.pdf" download><Download size={17} /> Download resume (add your PDF)</a>
        </section>

        <Suspense fallback={<section className="section"><p className="muted">Loading contact…</p></section>}><Contact /></Suspense>
      </main>
      <footer><a className="brand" href="#home">P<span>.</span></a><p>Designed & built with React · © {new Date().getFullYear()} Purushotham</p><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);