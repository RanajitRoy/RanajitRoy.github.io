import React from "react";
import "./Header.css";
import { type GlobalStateProp } from "../lib/types";
import prof_pic from "../assets/profPic.jpg";
import { Link } from "react-scroll";

function Header(props:GlobalStateProp) {
    return (
        <div className="Header">
            <div className="Profile">
                <span></span>
                <span></span>
                <span></span>
                <img src={prof_pic} className="ProfilePic" alt="Profile" />
            </div>
            <div className="NameTitle">
                <p>Ranajit Roy</p>
                <p>Software Engineer</p>
                <p>Boulder, CO</p>
            </div>
            <div className="Navbar">
                <Link className="NavBarOpt" activeClass="Active" to="home" spy={true} smooth={true} offset={0} duration={500}>
                    Home
                </Link>
                <Link className="NavBarOpt" activeClass="Active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                    About
                </Link>
                <Link className="NavBarOpt" activeClass="Active" to="education" spy={true} smooth={true} offset={0} duration={500}>
                    Education
                </Link>
                <Link className="NavBarOpt" activeClass="Active" to="experience" spy={true} smooth={true} offset={0} duration={500}>
                    Experience
                </Link>
                <Link className="NavBarOpt" activeClass="Active" to="skills" spy={true} smooth={true} offset={0} duration={500}>
                    Skills
                </Link>
                <Link className="NavBarOpt" activeClass="Active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Header;