import React, { useEffect, useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectList from "./components/ProjectList";
import "./styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((rotation) => rotation + 90);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="App">
      <div
        className="m"
        onClick={() => {
          handleOptionSelect("about");
        }}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        M
      </div>
      <div
        className={
          selectedOption !== "about" && selectedOption !== "projects"
            ? "container hidden"
            : "container"
        }
      >
        <div
          className={
            selectedOption !== "about" && selectedOption !== "projects"
              ? "left-section hidden"
              : "left-section"
          }
        >
          {selectedOption === "about" && <About />}
          {selectedOption === "projects" && (
            <Projects selectedProject={selectedProject} />
          )}
        </div>
        <div className="right-section">
          <div className="options">
            <button
              className={selectedOption === "projects" ? "selected" : ""}
              onClick={() => handleOptionSelect("projects")}
            >
              Projects
            </button>
            <button
              className={selectedOption === "skills" ? "selected" : ""}
              onClick={() => handleOptionSelect("skills")}
            >
              Skills
            </button>
            <button
              className={selectedOption === "contact" ? "selected" : ""}
              onClick={() => handleOptionSelect("contact")}
            >
              Contact
            </button>
          </div>
          <div className="list-container">
            {selectedOption === "projects" && (
              <div className="project-list-container">
                <ProjectList
                  onProjectSelect={handleProjectSelect}
                  selectedProject={selectedProject}
                />
              </div>
            )}
            {selectedOption === "skills" && (
              <div className="skills-container">
                <p class="left-motion">JavaScript</p>
                <p class="right-motion">Java</p>
                <p class="left-motion">Python</p>
                <p class="right-motion">SQL</p>
                <p class="left-motion">HTML/CSS</p>
                <p class="right-motion">React.js</p>
                <p class="left-motion">Node.js</p>
              </div>
            )}
            {selectedOption === "contact" && (
              <div className="contact-container">
                <a
                  href="https://www.linkedin.com/in/-mohamad-agha"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <span>LinkedIn</span>
                  </p>
                </a>
                <a
                  href="https://www.github.com/mo-agha"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span>Github</span>
                  </p>
                </a>
                <a href="mailto:mohd.agha29@gmail.com">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    <span>Email: mohd.agha29@gmail.com</span>
                  </p>
                </a>
                <a href="tel:+12508998424">
                  <p>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faPhone}
                      size="2x"
                    />
                    <span>Phone: +1 (250) 899 8424</span>
                  </p>
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1ea57eRkWexBtueiLuSMtyZGD4Jf0ahGo"
                  download
                >
                  <p className="resume-link">
                    <FontAwesomeIcon icon={faDownload} size="lg" />
                    <span>Download My Resume</span>
                  </p>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
