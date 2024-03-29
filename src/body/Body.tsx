import React from "react";
import { ReactSVG } from "react-svg";
import "./Body.css";
import "./sections/Common.css"
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import {type GlobalStateProp} from "../lib/types";
import menu_svg from "../assets/menu.svg"

function Body(props: GlobalStateProp) {
    return (
        <div className="Body">
            <div className="HomeHeader">
                <label htmlFor="header-active"><ReactSVG src={menu_svg} /></label>
                <img src={process.env.PUBLIC_URL+'/android-chrome-512x512.png'} alt="logo"/>
            </div>
            <Home />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Contact />
        </div>
    );
}

export default Body;