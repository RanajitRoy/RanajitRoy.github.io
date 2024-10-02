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
import { Link } from "react-scroll";
import up_svg from "../assets/upward.svg";
import Projects from "./sections/Projects";

function Body(props: GlobalStateProp) {
    return (
        <div className="Body">
            <div className="HomeHeader">
                <label htmlFor="header-active"><ReactSVG src={menu_svg} /></label>
                <img id="logo1" src={process.env.PUBLIC_URL+'/logo.png'} alt="logo"/>
            </div>
            <Link className="ScrollTop" activeClass="ActiveScrollTop" to="home" isDynamic={true} spy={true} smooth={true} offset={-100} duration={300}>
                <ReactSVG src={up_svg} />
            </Link>
            <Home />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default Body;