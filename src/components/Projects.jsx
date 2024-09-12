import React from "react";
import "../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltUp,
} from "@fortawesome/free-solid-svg-icons";

const Projects = ({ selectedProject }) => {
  return (
    <div id="main">
      {selectedProject ? (
        <>
          {selectedProject.live ? (
            <h1>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer noopener"
                id="livelink"
              >
                {selectedProject.title}
              </a>
              <span className="arrow arrow-left">
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
              </span>
              <span className="arrow arrow-up">
                <FontAwesomeIcon icon={faLongArrowAltUp} />
              </span>
              <span className="click-me-text"> (Click Me)</span>
            </h1>
          ) : (
            <h1>{selectedProject.title}</h1>
          )}
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
