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
        I'm a Software Engineer with a strong foundation in building scalable,
        high-performance systems across cloud and mobile platforms. At Amazon, I
        optimized infrastructure and data ingestion workflows, significantly
        reducing system load and saving over $1.8M in operational costs.
        Previously at RockyTech, I developed a mobile interface for a smart
        wearable using React Native and Redux, implemented robust TDD practices,
        and deployed scalable AWS infrastructure via Terraform. My past roles at
        Square Fare and Alumnus Software involved designing optimized data
        pipelines, developing RESTful APIs, and leading large-scale system
        migrations from monoliths to distributed architectures using
        technologies like Kafka, MySQL, MongoDB, and Spring Boot.
        <br />
        <br />
        I'm passionate about building reliable, user-centric software solutions
        that drive measurable impact and improve user experience.
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
