import React from "react"
import { Parser } from "html-to-react"
import Answer from "./Answer.js"
import { nanoid } from "nanoid"

export default function Question(props) {

    function shuffleAnswers(answersArray) {

        const answersArrayLength = answersArray.length;
        for (let i = answersArrayLength - 1; i > 0; i--) {
            const randNum = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i (inclusive)
          // Swap the elements at indices i and j
            var temp = answersArray[i];
            answersArray[i] = answersArray[randNum];
            answersArray[randNum] = temp;
        }
        return answersArray;
      }

      function getAnswers(){
        
        const answersArray = [[props.value.incorrect_answers],props.value.correct_answer].flat()
        const shuffledAnswers = (shuffleAnswers(answersArray.flat())).map(answer => htmlParser.parse(answer) )

    
        
        return shuffledAnswers.map(answer => 

            <Answer answers={props.answers} selected={false} checked={props.checked} value={answer} question={htmlParser.parse(props.value.question)} correctAnswer={htmlParser.parse(props.value.correct_answer)}/>
        
            
            )
    

      }
  
    const htmlParser = new Parser()
    // console.log(props.value)
    // console.log(props.value)

    return (

    
        <div className="question">
            <h3 id={nanoid()} >{htmlParser.parse(props.value.question)}</h3>     

            <ul>
                {
                
                    getAnswers(props.numAnswers)
                }
            
            </ul>
        </div> 
                
            )
        

    }
        