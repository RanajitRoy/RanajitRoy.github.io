import "./Projects.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";

const Projects = () => {
  return (
    <div className="Section Projects" id="projects">
      <p id="projects-title">Projects</p>
      <div id="projects-container">
        <div className="FlexRowGroup">
          <div className="FlexRowGroupItem">
            <img src={project1} alt="project" />
            <a href="https://github.com/CSCI-5828-S24/BetaFish"> </a>
            <div>
              <p>Denver Crime Tracker</p>
            </div>
          </div>
          <div className="FlexRowGroupItem">
            <a href="https://github.com/RanajitRoy/ServiceLogger"> </a>
            <img src={project2} alt="project" />
            <div>
              <p>Service Logger</p>
            </div>
          </div>
          <div className="FlexRowGroupItem">
            <a href="https://docs.google.com/presentation/d/1E_oJi_bNaw6z_OreLnZo8P5Pd7yMdlCE/">
              {" "}
            </a>
            <img src={project3} alt="project" />
            <div>
              <p>TMVR Simulation</p>
            </div>
          </div>
          <div className="FlexRowGroupItem">
            <a href="https://interstellarorbits.io/"> </a>
            <img src={project4} alt="project" />
            <div>
              <p>Interstellar Orbits Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
