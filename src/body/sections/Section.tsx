import React from "react";
import "./Section.css";

function Section(props:{sectionId:string}) {
    return (
        <div className="Section" id={props.sectionId}>
            Section
        </div>
    );
}

export default Section;