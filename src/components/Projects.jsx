import React from "react";
import "../styles/projects.css";

const Projects = ({ selectedProject }) => {
  return (
    <div id="main">
      {selectedProject ? (
        <>
          <h1>{selectedProject.title}</h1>
          <h2>{selectedProject.overview}</h2>
          <ul>
            {selectedProject.achievements
              .split("*")
              .map(
                (achievement, index) =>
                  achievement && <li key={index}>{achievement.trim()}</li>
              )}
          </ul>
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            Check out the repo!
          </a>
        </>
      ) : (
        <h1 className="prompt">Select a Project to view details.</h1>
      )}
    </div>
  );
};

export default Projects;
