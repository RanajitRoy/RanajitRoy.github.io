import React from "react";
import "./Body.css";
import Section from "./sections/Section";
import {type GlobalStateProp} from "../lib/types";

function Body(props: GlobalStateProp) {
    return (
        <div className="Body">
            <Section sectionId="home" />
            <Section sectionId="about" />
            <Section sectionId="education"/>
            <Section sectionId="experience"/>
            <Section sectionId="skills"/>
            <Section sectionId="contact"/>
        </div>
    );
}

export default Body;