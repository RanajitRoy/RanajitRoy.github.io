import React from "react";
import "./Skills.css";

// All imports for skill images
import html5_logo from "../../assets/html5.png";
import css3_logo from "../../assets/css3.png";

function Skills() {
    return (
        <div className="Section Skills" id="skills">
            <p id="skill-title">Skills</p>
            <div id="skills-container">
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Languages</p>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">C++</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">C#</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Java</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Python</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Javascript</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Go</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Front-End</p>
                    <div className="SkillItem">
                        <img src={html5_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">HTML</span>
                    </div>
                    <div className="SkillItem">
                        <img src={css3_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">CSS</span>
                    </div>
                    <div className="SkillItem">
                        <img src={css3_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Bootstrap</span>
                    </div>
                    <div className="SkillItem">
                        <img src={css3_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">React</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Back-End</p>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Node.js</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Flask</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">ASP.NET</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Spring Web</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Databases</p>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">MySQL</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">PostgreSQL</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">MongoDB</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Cassandra</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Redis</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Cloud Tech</p>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">AWS</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">GCP</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Kubernetes</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Kafka</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">RabbitMQ</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Tools</p>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Git</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Jira</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Docker</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">gRPC</span>
                    </div>
                    <div className="SkillItem">
                        <img className="SkillImg" alt="skill"/>
                        <span className="SkillName">Postman</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;