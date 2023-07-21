import React from "react";
import "./TypingChallenge.css";
import TestLetter from "../TestLetter/TestLetter";


const TypingChallenge = ({handleUserInput, testInfo,timeRemaining, timeStarted}) => {
    
    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00
                :{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}` }</p>
                <p className="timer-info">
                    {!timeStarted && "Start typing to start the test"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        

                    {testInfo.map((individualLetterInfo, index) => (
                            <TestLetter
                                key={index}
                                individualLetterInfo={individualLetterInfo} />
                    ))}
                       
                        
                        
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                    onChange={(e) => handleUserInput(e.target.value)}
                    className="textarea"
                    placeholder="Start typing here..."
                    ></textarea>
                </div>
            </div>
        </div>

    )
}


export default TypingChallenge;