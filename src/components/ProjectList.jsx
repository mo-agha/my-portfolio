import React from "react";
import "../styles/projectlist.css";

const ProjectList = ({ onProjectSelect, selectedProject }) => {
  const projects = [
    {
      title: "MoodMusic",
      overview:
        "A web application that customizes your music experience based on your mood, using vibrant interfaces and dynamic features.",
      achievements:
        "*Integrated the Spotify API for personalized playlist and track generation based on mood. *Designed an intuitive main page with mood selection buttons and a sleek logo. *Incorporated a gradient shining effect for dynamic text and a stylish rounded border for a polished look. *Focused on simplicity and user engagement to deliver a seamless musical experience.",
      link: "https://www.github.com/mo-agha/MoodMusic",
    },
    {
      title: "WordGuesser",
      overview:
        "A fun and interactive clone of the Wordle game, featuring smooth animations and adjustable difficulty settings.",
      achievements:
        "*Built with pure JavaScript, HTML, and CSS. *Achieved dynamic random word generation utilizing the random-words package. *Seamlessly integrated WordsAPI for real-time word validation using REST principles. *Engineered a user-friendly experience with smooth CSS animations, color modifications, and customizable difficulty options.",
      link: "https://www.github.com/mo-agha/WordGuesser",
    },
    {
      title: "Chat App",
      overview:
        "A real-time chat application designed for seamless communication and user interaction.",
      achievements:
        "*Leveraged Express.js for server-side logic and Socket.io for bi-directional communication between clients and servers. *Utilized React.js and Redux.js for frontend development and state management. *Integrated MongoDB for persistent chat message storage and retrieval.",
      link: "https://www.github.com/mo-agha/Chat-App",
    },
    {
      title: "Youtube Clone",
      overview:
        "A comprehensive video-sharing platform that offers interactive features and responsive design.",
      achievements:
        "*Developed a full-stack MERN video-sharing app with functionalities including video viewing, uploading, interacting with channels, and more. *Implemented over 20 API routes utilizing Axios for seamless communication and efficient user management. *Integrated JWT authentication for secure user access and employed Redux.js for user state management. *Crafted a responsive front-end using React.js components and styled-components for efficient style management.",
      link: "https://www.github.com/mo-agha/Youtube-Clone",
    },
    {
      title: "Time Watch",
      overview:
        "A Python application for tracking and visualizing time spent on various applications with a user-friendly interface.",
      achievements:
        "*Developed using Python and the AppKit framework for macOS to capture active application data in real-time. *Implemented data persistence using JSON for storing daily usage statistics. *Designed a GUI with Tkinter to display daily usage stats through a customizable bar chart interface.",
      link: "https://www.github.com/mo-agha/time_watch",
    },
  ];

  console.log(projects);

  return (
    <div id="project-list">
      {projects.map((project) => (
        <h2
          className={
            selectedProject && selectedProject.title === project.title
              ? "selected"
              : ""
          }
          key={project.title}
          onClick={() => onProjectSelect(project)}
        >
          {project.title}
        </h2>
      ))}
    </div>
  );
};

export default ProjectList;
