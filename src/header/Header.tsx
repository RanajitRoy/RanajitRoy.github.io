import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div>
                Profile Picture
            </div>
            <ul className="Navbar">
                <li>
                    Option Link-1
                </li>
                <li>
                    Option Link-2
                </li>
            </ul>
        </div>
    );
}

export default Header;