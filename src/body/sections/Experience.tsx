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
                    <p className="ExpDescription">
                        I developed a system that did automated nutritional analysis on customers which is used for generating targeted weekly marketing emails. I used technologies such as EC2 and S3 on AWS for this. This greatly reduced the need for tedious manual work.
                    </p>
                </div>
                <div className="ExpItem">
                    <div className="ExpItemRoleLoc">
                        <p className="ExpRole">Software Engineer MTS</p>
                        <p className="ExpLocation">Kolkata, India</p>
                    </div>
                    <p className="ExpCompany">Alumnus Software</p>
                    <p className="ExpDuration">08/2020 - 07/2022</p>
                    <p className="ExpDescription">
                        I developed a system that identified schematic errors in engineering drawings of ships. We implemented a robust data processing backend with a user-friendly frontend web application. It was successful as we have seen around 6 times improvement in system throughput compared to the previous solution.
                        I was honored with the "Recognition for Exceptional Performance" award for my contributions.
                    </p>
                </div>
            </div>
            <div id="exp-container-end"></div>
        </div>
    );
}

export default Experience;