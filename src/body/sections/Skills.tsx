import React from "react";
import "./Skills.css";

// All imports for skill images
import html5_logo from "../../assets/html5.png";
import css3_logo from "../../assets/css3.png";
import cpp_logo from "../../assets/Cpp.png";
import csharp_logo from "../../assets/Csharp.png";
import java_logo from "../../assets/java.png";
import python_logo from "../../assets/python.png";
import js_logo from "../../assets/JavaScript.png";
import go_logo from "../../assets/go.png";
import bootstrap_logo from "../../assets/bootstrap.png";
import react_logo from "../../assets/React-icon.png";
import node_logo from "../../assets/node.png";
import flask_logo from "../../assets/flask.png";
import asp_logo from "../../assets/asp.png";
import spring_logo from "../../assets/spring.png";
import mysql_logo from "../../assets/mysql.png";
import postgre_logo from "../../assets/Postgresql.png";
import mongo_logo from "../../assets/mongodb.png";
import cassandra_logo from "../../assets/cassandra.png";
import redis_logo from "../../assets/redis.png";
import aws_logo from "../../assets/AWS.png";
import gcp_logo from "../../assets/gcp.png";
import kube_logo from "../../assets/kube.png";
import kafka_logo from "../../assets/kafka.png";
import rabbitmq_logo from "../../assets/rabbitmq.png";
import git_logo from "../../assets/Git.png";
import dock_logo from "../../assets/docker.png";
import jira_logo from "../../assets/jira.png";
import grpc_logo from "../../assets/grpc.png";
import postman_logo from "../../assets/postman.png";

function Skills() {
    return (
        <div className="Section Skills" id="skills">
            <p id="skill-title">Skills</p>
            <div id="skills-container">
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Languages</p>
                    <div className="SkillItem">
                        <img src={cpp_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">C++</span>
                    </div>
                    <div className="SkillItem">
                        <img src={csharp_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">C#</span>
                    </div>
                    <div className="SkillItem">
                        <img src={java_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Java</span>
                    </div>
                    <div className="SkillItem">
                        <img src={python_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Python</span>
                    </div>
                    <div className="SkillItem">
                        <img src={js_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Javascript</span>
                    </div>
                    <div className="SkillItem">
                        <img src={go_logo} className="SkillImg" alt="skill"/>
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
                        <img src={bootstrap_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Bootstrap</span>
                    </div>
                    <div className="SkillItem">
                        <img src={react_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">React</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Back-End</p>
                    <div className="SkillItem">
                        <img src={node_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Node.js</span>
                    </div>
                    <div className="SkillItem">
                        <img src={flask_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Flask</span>
                    </div>
                    <div className="SkillItem">
                        <img src={asp_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">ASP.NET</span>
                    </div>
                    <div className="SkillItem">
                        <img src={spring_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Spring Web</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Databases</p>
                    <div className="SkillItem">
                        <img src={mysql_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">MySQL</span>
                    </div>
                    <div className="SkillItem">
                        <img src={postgre_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">PostgreSQL</span>
                    </div>
                    <div className="SkillItem">
                        <img src={mongo_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">MongoDB</span>
                    </div>
                    <div className="SkillItem">
                        <img src={cassandra_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Cassandra</span>
                    </div>
                    <div className="SkillItem">
                        <img src={redis_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Redis</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Cloud Tech</p>
                    <div className="SkillItem">
                        <img src={aws_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">AWS</span>
                    </div>
                    <div className="SkillItem">
                        <img src={gcp_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">GCP</span>
                    </div>
                    <div className="SkillItem">
                        <img src={kube_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Kubernetes</span>
                    </div>
                    <div className="SkillItem">
                        <img src={kafka_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Kafka</span>
                    </div>
                    <div className="SkillItem">
                        <img src={rabbitmq_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">RabbitMQ</span>
                    </div>
                </div>
                <div className="SkillSubContainer">
                    <p className="SkillSubHeader">Tools</p>
                    <div className="SkillItem">
                        <img src={git_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Git</span>
                    </div>
                    <div className="SkillItem">
                        <img src={jira_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Jira</span>
                    </div>
                    <div className="SkillItem">
                        <img src={dock_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">Docker</span>
                    </div>
                    <div className="SkillItem">
                        <img src={grpc_logo} className="SkillImg" alt="skill"/>
                        <span className="SkillName">gRPC</span>
                    </div>
                    <div className="SkillItem">
                        <img src={postgre_logo}className="SkillImg" alt="skill"/>
                        <span className="SkillName">Postman</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;