import React from "react";
import "../styles/projects.css";

const Projects = ({ selectedProject }) => {
  return (
    <div id="main">
      {selectedProject ? (
        <>
          <h1>{selectedProject.title}</h1>
          <ul>
            {selectedProject.details
              .split("*")
              .map(
                (detail, index) =>
                  detail && <li key={index}>{detail.trim()}</li>
              )}
          </ul>
          <a href={selectedProject.link}>Check out the repo!</a>
        </>
      ) : (
        <h1>Select a Project to view details.</h1>
      )}
    </div>
  );
};

export default Projects;
