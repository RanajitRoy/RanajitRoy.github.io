import React from "react";
import "./Body.css";
import "./sections/Common.css"
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import {type GlobalStateProp} from "../lib/types";

function Body(props: GlobalStateProp) {
    return (
        <div className="Body">
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