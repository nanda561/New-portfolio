import React, { useEffect, useState } from "react";
import Linked from "../assets/link.svg";
import Whatsapp from "../assets/whatsapp.svg";
import { About } from "../Components/Aboutnew";
import Skills from "../Components/Skillsnew";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import developer from '../assets/developer.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("");

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

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-[#1F252E] text-white font-sans">
      <header className="sticky top-0 z-50 bg-[#1F252E] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  className={`font-semibold text-lg hover:text-[#f9532d] transition-colors duration-300 ${
                    activeSection === item.id ? "text-[#f9532d]" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="md:hidden flex-col items-center space-y-4 px-6 pt-4 hidden peer-checked:flex" id="menu-content">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className={`block font-semibold text-lg hover:text-[#f9532d] transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#f9532d]" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16">
        <div className="relative flex-shrink-0 mb-10 md:mb-0">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-gray-500 animate-spin-slow">
            <div className="absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center -top-8 left-1/2 transform -translate-x-1/2">
              <a href="https://github.com/nanda0311" target="_blank" rel="noopener noreferrer">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png" alt="GitHub" className="w-8" />
              </a>
            </div>
            <div className="absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center top-1/2 -right-8 transform -translate-y-1/2">
              <a href="https://www.instagram.com/naughty.nanda/" target="_blank" rel="noopener noreferrer">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png" alt="Instagram" className="w-8" />
              </a>
            </div>
            <div className="absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center -bottom-8 left-1/2 transform -translate-x-1/2">
              <a href="https://wa.me/9347521480" target="_blank" rel="noopener noreferrer">
                <img src={Whatsapp} alt="WhatsApp" className="w-8" />
              </a>
            </div>
            <div className="absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center top-1/2 -left-8 transform -translate-y-1/2">
              <a href="https://www.linkedin.com/in/nanda-kishore-8ba611292/" target="_blank" rel="noopener noreferrer">
                <img src={Linked} alt="LinkedIn" className="w-8" />
              </a>
            </div>
            <img src={developer} alt="Profile" className="absolute w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="text-center md:text-left mt-10 md:mt-0 md:ml-12">
          <h3 className="text-xl font-medium mb-2">Hi, I'm</h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <span className="text-[#f9532d]">NandaKishore</span> Dharmalingam
          </h1>
        </div>
      </section>

      <section id="about" className="px-6 py-16">
        <About />
      </section>

      <section id="skills" className="px-6 py-16">
        <Skills />
      </section>

      <section id="projects" className="px-6 py-16">
        <Projects />
      </section>

      <section id="contact" className="px-6 py-16">
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
