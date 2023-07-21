import React from "react";
import "./App.css"
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../../Footer/Footer";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";
import ChallengeSection from "../ChallengeSection/ChallengeSection";


const TotalTime = 60;


const Deafultstate={
    selectedParagraph: "Pranay Bedekar",   
    timeStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters :0,
    wpm: 0,
    testInfo: [],

}
class App extends React.Component{

    state = Deafultstate;

    fetchNewParagraphFallback = () => {
        const data =
            SAMPLE_PARAGRAPHS[
                Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
            ];

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        
        this.setState({
            ...Deafultstate,
            selectedParagraph: data,
            testInfo,
        });
    };


    fetchNewParagraph(){
        fetch("http://metaphorpsum.com/paragraphs/1/15")
            .then((response) => response.text())
            .then((data) => {
               
                const selectedParagraphArray = data.split("");
                const testInfo = selectedParagraphArray.map(
                    (selectedLetter) => {
                        return {
                            testLetter: selectedLetter,
                            status: "notAttempted",
                        };
                    }
                );
             this.setState({...Deafultstate, testInfo, selectedParagraph:data});

            })


    }

    componentDidMount () {
        
        this.fetchNewParagraphFallback();
        this.fetchNewParagraph();
            
        
    }
    startAgain =()=> this.fetchNewParagraphFallback ();

    startTimer = ()=>{
        this.setState({timeStarted: true});
        const timer=setInterval(() =>
         {
            if(this.state.timeRemaining >0){
                const timeSpent = TotalTime-this.state.timeRemaining;
                const wpm=timeSpent>0?(this.state.words/timeSpent) * TotalTime : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm),
            })}else{
                clearInterval(timer);
            }
         },1000);

    }

    

    handleUserInput =(inputValue) => {
        if(!this.state.timeStarted) this.startTimer();

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });

            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({
                characters,
                words,
            });
            return;
        }

        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted";

        
        const isMistake = inputValue[index] === testInfo[index].testLetter;

        
        testInfo[index].status = isMistake ? "correct" : "incorrect";

        
        this.setState({
            testInfo,
            words,
            characters,
        });
    };
    render(){
        
        
        return(
            <div className="app">
                
                
                <Nav />
                
                <Landing />

                <ChallengeSection 
                selectedParagraph={this.state.selectedParagraph}
                words={this.state.words}
                characters={this.state.characters}
                wpm={this.state.wpm}
                timeRemaining={this.state.timeRemaining}
                timeStarted={this.state.timeStarted}
                testInfo={this.state.testInfo}
                handleUserInput={this.handleUserInput}
                startAgain={this.startAgain}
                />
                
               
                <Footer />

                
            </div>
        );
    }
}
export default App;