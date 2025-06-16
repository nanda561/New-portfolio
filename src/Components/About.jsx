import React from "react";
import "./About.css";
import ProfilePhoto from "../assets/aboutpic.webp";
import Resume from "../assets/resume.pdf";
import aboutimg from '../assets/aboutimg.jpg';

export const About = () => {
  return (
    <div className="about-container">
      {/* Left Section: Rounded Image */}
      <div className="about-image">
        <img src={aboutimg} alt="Profile" />
      </div>

      {/* Right Section: Content */}
      <div className="about-content">
        <h1 className="about-heading">
          About <span>Me</span>
        </h1>
        <p className="about-description">
          I am a passionate software developer with a strong drive to create
          innovative and impactful solutions. My journey in software
          development has been fueled by a deep curiosity and commitment to
          learning. I enjoy tackling challenges that require blending creativity
          with technical expertise to deliver user-centric designs and efficient
          systems.
        </p>

        {/* Modern Orange Transparent Button */}
        <a href={Resume} download className="resume-button">
          Download Resume
        </a>
      </div>
    </div>
  );
};
