import React from "react";
import "./Home.css";
import style_pic from "../../assets/me_style.png"
import { ReactTyped } from "react-typed";


function Home() {
    return (
        <div className="Section Home" id="home">
            <img src={style_pic} alt="style_pic" />
            <p id="hi-text" >Hi!</p>
            <div className="HomeTextBox">
                <p>I'm</p>
                <ReactTyped className="Typed" typeSpeed={50} startDelay={500} backDelay={1000} backSpeed={60} strings={["an Innovator","a Software Engineer", "a Full-Stack Developer"]} loop/>
            </div>
        </div>
    );
}

export default Home;