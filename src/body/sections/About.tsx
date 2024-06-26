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
                I am a highly motivated computer science graduate student at the University of Colorado Boulder, currently pursuing a master's degree with an impressive 4.00 GPA. With a specialized focus on Cloud Computing and Databases, I have cultivated a strong background in various cloud technologies, including GCP and AWS. With over 2 years of hands-on experience, I have a proven track record of successfully developing software, and managing it from initial requirements gathering to a fully realized product. My diverse skill set encompasses a wide array of programming languages, including Python, C#, Javascript, and Java, as well as essential tools like Jira and Git.
                <br/><br/>
                Passionate about innovation and excellence, I am committed to applying my knowledge and skills to solve real-world problems and create meaningful impact through technology. Eager to embrace new challenges, I am excited about the opportunities to contribute to the success and growth of your organization.
            </p>
            <div id="service-container">
                <div className="AboutService">
                    <img src={software_png} alt="software"/>
                    <span>Software</span>
                </div>
                <div className="AboutService">
                    <img src={web_app_png} alt="web-app"/>
                    <span>Web-Apps</span>
                </div>
                <div className="AboutService">
                    <img src={backend_png} alt="backend"/>
                    <span>Back-end</span>
                </div>
                <div className="AboutService">
                    <img src={cloud_png} alt="cloud"/>
                    <span>Cloud</span>
                </div>
            </div>
            <div className="HireMe">
                <a id="hiremetext" href="https://drive.google.com/file/d/16YrDPUPJvKHQ3LMiqn5dxhBcZtmh92WA/view?usp=sharing">
                Resume
                </a>
                <p ></p>
            </div>
        </div>
    );
}

export default About;