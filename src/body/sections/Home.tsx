import React from "react";
import "./Home.css";
import style_pic from "../../assets/me_style.png"


function Home() {
    return (
        <div className="Section Home" id="home">
            <img src={style_pic} alt="style_pic" />
            <p id="hi-text" >Hi!</p>
            <div className="HomeTextBox">
                <p>Welcome to My Portfolio!</p>
            </div>
        </div>
    );
}

export default Home;