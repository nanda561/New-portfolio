import React, { useEffect, useState } from "react";
import "./Home.css";
import Linked from "../assets/link.svg";
import Whatsapp from "../assets/whatsapp.svg";
import { About } from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import developer from "../assets/developer.jpg";
import Footer1 from "../Components/Footer";
import Sign from "../assets/sign.gif";      // animated gif
import SignStatic from "../assets/sign.png"; // static signature
import Typewriter from "typewriter-effect"; // ✅ added

// Signature component (switch gif → static image after some seconds)
const Signature = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGif(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      src={showGif ? Sign : SignStatic}
      alt="Signature"
      className="sign"
    />
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Header and Navigation */}
<<<<<<< HEAD
      <header>
        <div className="container page-header">
          <div className="logo">portfolio</div>

          <input type="checkbox" id="click" />

          <label htmlFor="click" className="menu">
            <i className="bx bx-menu"></i>
          </label>

          <ul>
            <li>
              <a href="#home" className={activeSection === "home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === "about" ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                Contact
              </a>
            </li>
          </ul>
=======
      <header className="container">
        <div className="page-header">
          <div className="logo">
            portfolio <a href="#"></a>
          </div>
          <button
            className="mainicon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="menu">
              <i className="bx bx-menu"></i>
            </div>
          </button>
          <nav className={menuOpen ? "nav-open" : ""}>
            <ul>
              <li>
                <a
                  href="#home"
                  style={{ "--navAni": 1 }}
                  className={activeSection === "home" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ "--navAni": 2 }}
                  className={activeSection === "about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  style={{ "--navAni": 3 }}
                  className={activeSection === "skills" ? "active" : ""}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  style={{ "--navAni": 4 }}
                  className={activeSection === "projects" ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ "--navAni": 5 }}
                  className={activeSection === "contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
>>>>>>> a46b1262f65820de7898eaf8224f5b5e07b2183a
        </div>
      </header>

      {/* Main Section */}
      <section className="container" id="home">
        <div className="main">
          <div className="rounding-sec">
            <div className="big-circle">
              <div className="icon-block">
                <a href="https://github.com/nanda561" target="_blank" rel="noopener noreferrer">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png" alt="GitHub Icon" />
                </a>
              </div>
              <div className="icon-block">
                <a href="https://www.instagram.com/naughty.nanda/" target="_blank" rel="noopener noreferrer">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png" alt="Instagram Icon" />
                </a>
              </div>
              <div className="icon-block">
                <a href="https://wa.me/9347521480" target="_blank" rel="noopener noreferrer">
                  <img src={Whatsapp} alt="WhatsApp Icon" />
                </a>
              </div>
              <div className="icon-block">
                <a href="https://www.linkedin.com/in/nandakishore-dharmalingam-8ba611292/" target="_blank" rel="noopener noreferrer">
                  <img src={Linked} alt="LinkedIn Icon" />
                </a>
              </div>
            </div>
            <div className="images">
              <img src={developer} alt="Profile" className="img-w" />
            </div>
          </div>

          <div className="detail">
            <h3>Hi, I'm</h3>
            <h1>
              <span style={{ color: "#f9532d" }}>NandaKishore</span> Dharmalingam
            </h1>

            {/* ✅ Typewriter Below Name */}
            <div className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "AI Enthusiast",
                    "Java Developer",
                    "Software Engineer"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                  pauseFor: 1000,
                }}
              />
            </div>

            <Signature />
          </div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer1 />
    </div>
  );
};

export default Portfolio;
