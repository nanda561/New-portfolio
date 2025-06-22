import React from "react";
import NandaKishore from "../assets/Dharmalingam Nandakishore_Resume.pdf";
import aboutimg from "../assets/aboutpic.jpg";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16 bg-[#1F252E] text-white mt-16">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={aboutimg}
          alt="Profile"
          className="rounded-xl w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 md:pl-10">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-[#f9532d]">Me</span>
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          I am a passionate software developer with a strong drive to create
          innovative and impactful solutions. My journey in software
          development has been fueled by a deep curiosity and commitment to
          learning. I enjoy tackling challenges that require blending creativity
          with technical expertise to deliver user-centric designs and efficient
          systems.
        </p>
        <a
          href={NandaKishore}
          download
          className="inline-block px-6 py-3 border-2 border-[#f9532d] text-[#f9532d] font-semibold rounded-md transition duration-300 hover:bg-[#f9532d] hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
