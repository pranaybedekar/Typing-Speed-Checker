import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallenegeContainer/TypingChallengeContainer";

const TestContainer = ({
    startAgain,handleUserInput,testInfo,selectedParagraph, timeStarted, timeRemaining, words,characters,wpm
}) => {
    

     return (
        <div className="test-container">
            
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className="typing-challenge-cont">
                    <TypingChallengeContainer
                        selectedParagraph={selectedParagraph}
                        
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timeStarted={timeStarted}
                        testInfo={testInfo}
                        handleUserInput={handleUserInput}
                    />
                </div>
            ) : (
                <div className="try-again-cont">
                    <TryAgain
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        startAgain={startAgain}
                        
                    />
                </div>
            )}
        </div>

    )
}
export default TestContainer;