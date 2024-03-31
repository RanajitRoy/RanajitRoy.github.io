import React from "react";
import "./Header.css";
import { type GlobalStateProp } from "../lib/types";
import prof_pic from "../assets/profPic.jpg";
import { Link } from "react-scroll";
import { ReactSVG } from "react-svg";
import close_svg from "../assets/close.svg"

function Header(props:GlobalStateProp) {
    return (
        <>
            <input type="checkbox" id="header-active" />
            <label id="overlay" htmlFor="header-active" />
            <div className="Header">
                <label className="CloseIcon" htmlFor="header-active"><ReactSVG src={close_svg} /></label>
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
                    <Link className="NavBarOpt" activeClass="Active" to="about" isDynamic={true} spy={true} smooth={true} offset={-400} duration={300}>
                        About
                    </Link>
                    <Link className="NavBarOpt" activeClass="Active" isDynamic={true} to="education" spy={true} smooth={true} offset={-400} duration={300}>
                        Education
                    </Link>
                    <Link className="NavBarOpt" activeClass="Active" isDynamic={true} to="experience" spy={true} smooth={true} offset={-400} duration={300}>
                        Experience
                    </Link>
                    <Link className="NavBarOpt" activeClass="Active" isDynamic={true} to="skills" spy={true} smooth={true} offset={-400} duration={300}>
                        Skills
                    </Link>
                    <Link className="NavBarOpt" activeClass="Active" isDynamic={true} to="contact" spy={true} smooth={true} offset={-400} duration={300}>
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;