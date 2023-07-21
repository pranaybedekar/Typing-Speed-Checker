import React from 'react';
import "./ChallengeSection.css"
import TestContainer from '../TestContainer/TestContainer';


const ChallengeSection = ({startAgain,handleUserInput,testInfo,selectedParagraph, timeStarted, timeRemaining, words,characters,wpm}) => {
    return(
        <div className="challengesection-container">
            <h1 data-aos="fade-down" className='challegesection-header'>
                Take a speed test now are you ready!
            </h1>
            <TestContainer 
            startAgain={startAgain} selectedParagraph={selectedParagraph} timeStarted={timeStarted} timeRemaining={timeRemaining} words={words} characters={characters} wpm={wpm} testInfo={testInfo} handleUserInput={handleUserInput} />
        </div>

    );
}
export default ChallengeSection;