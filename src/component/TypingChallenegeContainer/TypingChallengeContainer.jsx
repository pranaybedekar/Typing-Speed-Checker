import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({ handleUserInput,testInfo,selectedParagraph, timeStarted, timeRemaining, words,characters,wpm}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

               
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters}
                />

               
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm} />
            </div>

            <div className="typewriter1-container">
                <TypingChallenge
                    
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    timeRemaining={timeRemaining}
                    timeStarted={timeStarted} 
                    handleUserInput={handleUserInput}
                />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;