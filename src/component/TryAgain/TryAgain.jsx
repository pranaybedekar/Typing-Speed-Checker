import React from "react";
import "./TryAgain.css";


const TryAgain = ({words, startAgain,
    characters,
    wpm}) => {
    return(
        <div className="try-again-container">
            <h1>Test Result</h1>
            <div className="result-container">
                <p>
                   <b>characters:</b> {characters}
                </p>
                <p>
                   <b>words:</b> {words}
                </p>
                <p>
                   <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div>
                <button onClick={()=> startAgain()} className="end-buttons start-again-btn">
                    Re-try
                </button>
                <button 
                    onClick={() => {
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com" ,
                            "facebook-share-dialog",
                            "width=800,height=600")

                    }} 
                    className="end-buttons share-btn">
                    Share
                </button>

                <button 
                    onClick={() => {
                        window.open( "https://twitter.com/intent/tweet?text=https://twitter.com",
                        "twitter-share-dialog",
                            
                            "width=800,height=600")

                    }} 
                    className="end-buttons tweet-btn">
                    Tweet
                </button>


               
                
            </div>
        </div>

    )
}
export default TryAgain;