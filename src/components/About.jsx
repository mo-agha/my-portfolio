import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/about.css";

const About = () => {
  const [fontSize, setFontSize] = useState("20px"); // Initial font size

  useEffect(() => {
    const emoji = document.querySelector(".wicked");

    const handleMouseEnter = () => {
      setFontSize("50px"); // Adjust size as needed
    };

    const handleMouseLeave = () => {
      setFontSize("20px"); // Adjust size as needed
    };

    if (emoji) {
      emoji.addEventListener("mouseenter", handleMouseEnter);
      emoji.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (emoji) {
        emoji.removeEventListener("mouseenter", handleMouseEnter);
        emoji.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return (
    <div id="main">
      <h1>Hello World!</h1>
      <p>
        My Name Is <strong>Mohamad Agha.</strong>
      </p>
      <p>I'm a Software Engineer, Web Developer, UBC Graduate.</p>
      <p>
        I hold a BSc in Computer Science from The University of British Columbia
        and currently work as a Backend Web Developer. <br />I continually
        expand my skills, mastering new programming languages and development
        frameworks. With a solid foundation in computer science and a
        collaborative spirit, I thrive on tackling complex problems and
        contributing to innovative projects. I'm eager to further develop my
        skills and make meaningful contributions to diverse teams.
      </p>
      <p>
        Check out my latest projects, learn more about my work, and reach out
        with any feedback, questions, or opportunities!
      </p>
      <p className="wicked" style={{ fontSize: fontSize }}>
        &#128526;
      </p>
    </div>
  );
};

export default About;
