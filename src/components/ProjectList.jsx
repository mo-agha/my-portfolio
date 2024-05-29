import React from "react";
import "../styles/projectlist.css";

const ProjectList = ({ onProjectSelect, selectedProject }) => {
  const projects = [
    {
      title: "WordGuesser",
      details:
        "*Built a clone of the popular Wordle game with pure Javascript, HTML, and CSS. *Achieved dynamic random word generation utilizing the random-words package and seamlessly integrated WordsAPI using REST principles for real-time word validation. *Engineered a user-friendly experience by leveraging smooth CSS animations, color modifications, and customizable difficulty options.",
      link: "https://www.github.com/mo-agha/WordGuesser",
    },
    {
      title: "Chat App",
      details:
        "*Leveraged Express.js for server-side logic, and implemented bi-directional communication between clients and servers using Socket.io, enabling real-time sending and receiving of chat messages. *Utilized React.js and Redux.js for frontend development and state management, facilitating scalable handling of application state across components. *Integrated MongoDB to store chat messages persistently, enhancing data management and retrieval capabilities.",
      link: "https://www.github.com/mo-agha/Chat-App",
    },
    {
      title: "Youtube Clone",
      details:
        "*Developed a full-stack MERN video sharing app that allows users to view, upload, interact with videos and channels, search functionality, trending and randomized videos, and more. *Implemented over 20 API routes utilizing Axios for seamless communication, efficiently managing user authentication, video, commenting, and other critical functionalities, ensuring a robust and responsive user experience. *Integrated JWT authentication for secure user access, and employed Redux.js for user state management and persistence. *Crafted a responsive and visually captivating front-end using React.js components and pages, and used styled-components to facilitate efficient management of styles with props and states.",
      link: "https://www.github.com/mo-agha/Youtube-Clone",
    },
  ];

  console.log(projects);

  return (
    <div id="project-list">
      {projects.map((project, index) => (
        <h2
          className={
            selectedProject && selectedProject.title === project.title
              ? "selected"
              : ""
          }
          key={index}
          onClick={() => onProjectSelect(project)}
        >
          {project.title}
        </h2>
      ))}
    </div>
  );
};

export default ProjectList;
