import React from "react";
import "./Home.css";
import style_pic from "../../assets/me_style.png"
import backend_img from "../../assets/backend.png"
import frontend_img from "../../assets/wireframe.png"
import db_img from "../../assets/database-storage.png"

function Home() {
    return (
        <div className="Section Home" id="home">
            <div className="HomeHeader">

            </div>
            <img src={style_pic} alt="style_pic" />
            <div className="HomeFlyers flyer1">
                <img src={backend_img} alt="backend"/>
                <div className="wavy-line wavy-line1" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
                <div className="wavy-line wavy-line2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
                <div className="wavy-line wavy-line3" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
            </div>
            <div className="HomeFlyers flyer2">
                <img src={frontend_img} alt="frontend" />
                <div className="wavy-line wavy-line1" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
                <div className="wavy-line wavy-line2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
                <div className="wavy-line wavy-line3" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
            </div>
            <div className="HomeFlyers flyer3">
                <img src={db_img} alt="db" />
                <div className="wavy-line wavy-line1" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
                <div className="wavy-line wavy-line2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
                <div className="wavy-line wavy-line3" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wavy.svg'})`}} ></div>
            </div>
            <div className="HomeTextBox">
                <p>Welcome to My Portfolio!</p>
            </div>
        </div>
    );
}

export default Home;