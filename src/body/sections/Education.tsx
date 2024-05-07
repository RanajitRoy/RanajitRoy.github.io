import React from "react";
import "./Education.css";
import cu_logo from "../../assets/cu.png";
import makaut_logo from "../../assets/makaut.png";

function Education() {
    return (
        <div className="Section Education" id="education">
            <p id="education-text">Education</p>
            <div id="education-container">
                <div className="EducationItem">
                    <img src={cu_logo} alt="CU" />
                    <div className="EducationItemInfo">
                        <p className="University">University of Colorado Boulder</p>
                        <p className="College">College of Engineering & Applied Science</p>
                        <p className="Degree">Master of Science</p>
                        <p className="Major">Computer Science</p>
                        <p className="Gpa">GPA: 4.00</p>
                        <p className="EduDuration">Aug 2022 - May 2024</p>
                    </div>
                </div>
                <div className="EducationItem">
                    <img src={makaut_logo} alt="MAKAUT" />
                    <div className="EducationItemInfo">
                        <p className="University">Maulana Abul Kalam Azad University of Technology</p>
                        <p className="College">Institute of Engineering & Management</p>
                        <p className="Degree">Bachelor of Technology</p>
                        <p className="Major">Computer Science & Engineering</p>
                        <p className="Gpa">GPA: 3.79</p>
                        <p className="EduDuration">Aug 2016 - June 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;