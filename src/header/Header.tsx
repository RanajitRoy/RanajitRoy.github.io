import React from "react";
import "./Header.css";
import { type GlobalStateProp } from "../lib/types";
import prof_pic from "../assets/profPic.jpg";

function Header(props:GlobalStateProp) {
    return (
        <div className="Header">
            <div className="Profile">
                <span></span>
                <span></span>
                <span></span>
                <img src={prof_pic} className="ProfilePic" />
            </div>
            <div className="NameTitle">
                <p>Ranajit Roy</p>
                <p>Software Engineer</p>
                <p>Boulder, CO</p>
            </div>
            <ul className="Navbar">
                <li>Home</li>
                <li>About</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Contact</li>        
            </ul>
        </div>
    );
}

export default Header;