import React from "react";
import "./Experience.css";

function Experience() {
    return (
        <div className="Section Experience" id="experience">
            <p id="exp-title">Experience</p>
            <div id="exp-container">
                <div className="ExpItem">
                    <div className="ExpItemRoleLoc">
                        <p className="ExpRole">Software Engineer Intern</p>
                        <p className="ExpLocation">New York, NY</p>
                    </div>
                    <p className="ExpCompany">Square Fare</p>
                    <p className="ExpDuration">05/2023 - 08/2023</p>
                    <ul className="ExpDescription">
                        <li>Leveraged AWS EC2 and S3 buckets to automate customer data analysis, resulting in a significant 300% reduction in daily manual labor hours with notable improvements in operational efficiency and enhanced productivity</li>
                        <li>Created an email generation and distribution service with Python and MailChimp API targeting 1000+ customers</li>
                        <li>Orchestrated regular stand-ups as a Scrum Master and solicited sprint progress reports from team members</li>
                    </ul>
                </div>
                <div className="ExpItem">
                    <div className="ExpItemRoleLoc">
                        <p className="ExpRole">Software Engineer MTS</p>
                        <p className="ExpLocation">Kolkata, India</p>
                    </div>
                    <p className="ExpCompany">Alumnus Software</p>
                    <p className="ExpDuration">08/2020 - 07/2022</p>
                    <ul className="ExpDescription">
                    <li>Designed a MongoDB schema and an access interface to efficiently store entity states and successfully migrated the entire data store to a database resulting in a substantial 80% improvement in both query and update speeds</li>
                    <li>Spearheaded transition towards a decoupled parallel architecture using C# .NET from a former monolithic design resulting in a remarkable 600% increase in system throughput while enhancing overall system maintainability</li>
                    <li>Developed a web application by utilizing React.js and Express.js, enabling real-time visualization of system-generated data and deployed through PM2 and Nginx onto in-situ client servers, ensuring optimal performance</li>
                    <li>Revamped a shape recognition module for CADs with the C# .NET Framework, attaining over 99% accuracy in identifying 200+ shapes across extensive file sets and reducing false errors by 75% compared to the prior solution</li>
                    <li>Collaborated in the design of a scalable AWS cloud infrastructure from requirement gathering to implementation</li>
                    <li>Supervised a team of 3 interns on migrating an entire codebase from C# to Java for enhanced library support</li>
                    <li>Achieved award: "Recognition for Exceptional Performance" (out of 110+ employees), 2021</li>
                    </ul>
                </div>
            </div>
            <div id="exp-container-end"></div>
        </div>
    );
}

export default Experience;