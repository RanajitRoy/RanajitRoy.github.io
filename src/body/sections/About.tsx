import React from "react";
import "./About.css";
import software_png from "../../assets/software.png";
import web_app_png from "../../assets/web-app.png";
import backend_png from "../../assets/backend.png";
import cloud_png from "../../assets/cloud.png";
import { Link } from "react-scroll";


function About() {
    return (
        <div className="Section About" id="about">
            <p id="about-title">About Me</p>
            <p id="about-text">With a passion for innovation and excellence, I am pursuing my master's degree in computer science at the University of Colorado Boulder, where I have a 4.00 GPA and a focus on Cloud Computing and Databases. I aspire to apply my skills and knowledge to solve real-world problems and create positive impact through technology.
            <br/><br/>
            As a highly motivated computer science graduate student at the University of Colorado Boulder, I have a strong background in a variety of cloud technologies, including GCP, AWS, Kubernetes, etc. My skill set encompasses a wide array of programming languages and tools, including Python, C/C++, C#, Javascript, Java, Jira, Git, and more. With over 2 years of hands-on experience, I have a proven track record of successfully developing software, and managing it from initial requirements gathering to a fully realized product. As a highly motivated and skilled computer science professional with a passion for innovation and excellence, I am excited about the opportunities to contribute to the success of your organization.</p>
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
                <Link id="hiremetext" to="contact" spy={true} smooth={true} offset={-100} duration={300}>
                Hire me!
                </Link>
                <p ></p>
            </div>
        </div>
    );
}

export default About;