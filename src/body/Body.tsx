import React from "react";
import "./Body.css";
import Section from "./sections/Section";
import {type GlobalStateProp} from "../lib/types";

function Body(props: GlobalStateProp) {
    return (
        <div className="Body">
            <Section />
            <Section />
            <Section />
        </div>
    );
}

export default Body;