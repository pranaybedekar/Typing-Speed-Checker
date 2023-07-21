import React from "react";
import Typewriter from 'typewriter-effect';

import fox from './../..//assets/fox.png'
import "./Landing.css";

const Landing = () =>{
    return(
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                <Typewriter
                     options={{
                        strings: [ 'Fast?', 'Correct?',  'Quick?', "Let's Check.."],
                        autoStart: true,
                        loop: true,
                    }}
/>
                </div>
            </div>
            <div className="landing-right">
                <img data-aos="fade-left" className="fox-image" src={fox} alt="Image" />
            </div>

        </div>
    )
}
export default Landing;