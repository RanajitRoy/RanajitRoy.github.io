import React from "react";
import "./About.css";
import software_png from "../../assets/software.png";
import web_app_png from "../../assets/web-app.png";
import backend_png from "../../assets/backend.png";
import cloud_png from "../../assets/cloud.png";

function About() {
  return (
    <div className="Section About" id="about">
      <p id="about-title">About Me</p>
      <p id="about-text">
        I am a driven computer science graduate student at the University of
        Colorado Boulder, currently pursuing a master's degree with a perfect
        4.00 GPA. Specializing in Cloud Computing and Databases, I have
        developed a solid expertise in cloud technologies such as GCP and AWS.
        With over two years of practical experience, I have successfully led
        software projects from initial requirements gathering to full product
        deployment.
        <br />
        <br />
        Proficient in multiple programming languages, including Java, JavaScript
        Python, C#, and C++. I also bring experience with essential tools like
        Jira and Git. I am passionate about leveraging technology to solve
        complex problems and excited to contribute my skills to innovative
        projects that make a real-world impact.
      </p>
      <div id="service-container">
        <div className="AboutService">
          <img src={software_png} alt="software" />
          <span>Software</span>
        </div>
        <div className="AboutService">
          <img src={web_app_png} alt="web-app" />
          <span>Web-Apps</span>
        </div>
        <div className="AboutService">
          <img src={backend_png} alt="backend" />
          <span>Back-end</span>
        </div>
        <div className="AboutService">
          <img src={cloud_png} alt="cloud" />
          <span>Cloud</span>
        </div>
      </div>
      <div className="HireMe">
        <a
          id="hiremetext"
          href="https://drive.google.com/file/d/1DaRtSXZLIZAbPbj3vHdoeO0jgDmaNWBq/view?usp=sharing"
        >
          Resume
        </a>
        <p></p>
      </div>
    </div>
  );
}

export default About;
