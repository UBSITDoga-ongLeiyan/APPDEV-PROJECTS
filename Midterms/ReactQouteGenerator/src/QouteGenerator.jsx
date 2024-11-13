import React, {useState} from "react";

const randomQoute = ["The foundation of every state is the education of its youth.",
                "I know nothing, except the fact of my ignorance.",
                "It is the privilege of the gods to want nothing, and of godlike men to want little.",
                "It takes a wise man to discover a wise man",
                "Dogs and philosophers do the greatest good and get the fewest rewards."];

export default function QouteGenerator(){
    const [qoute, setQoute] = useState()
    const [index, setIndex] = useState(0)

    function getRandomNumber(){
        return Math.floor(Math.random()*randomQoute.length)
    }

    function getRandomQoute(){
        let qoute = ""
        for (let i = 0; i < 1; i++){
            qoute+=randomQoute[getRandomNumber()]
        }
        return qoute
    }

    function generateRandomQoute(){
        setQoute(getRandomQoute())
        qoute
    }

    function displaySuceedingQoute(){

        setIndex ((prevIndex) => (prevIndex + 1) % randomQoute.length);
        setQoute (randomQoute[(index + 1) % randomQoute.length]);
     }

    return (
        <>
            <div className="color-picker-container">
                <div>
                    <h1> Qoute Generator </h1>
                    <p>{qoute}</p>
                    <button className="randomize" onClick={generateRandomQoute}> Generate </button> 
                    <button className="randomize" onClick={displaySuceedingQoute}> Next </button>
                </div>
            </div>
        </>
    )
}