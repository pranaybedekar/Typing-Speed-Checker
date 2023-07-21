import React from "react";
import logo from './../..//assets/logo1.png'
import "./Nav.css";

const Nav = () => {
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">Typing Master</p>
            </div>
            <div className="nav-right">
                <a
                  target="_blank"
                  className="nav-pb-link"
                  href="https://github.com/pranaybedekar"
                  rel="noreferrer"
                >
                    Pranay Bedekar
                </a>

            </div>
        </div>

    )
}
export default Nav;