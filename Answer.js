import React, { useState } from "react"
import { nanoid } from "nanoid"
import { Parser } from "html-to-react"

export default function Answer(props) {
    let answerSelections = {}
    let selected = props.selected


    const htmlParser = new Parser()
    const styles = {
        // backgroundColor: props.checked && ((props.value) === props.correctAnswer)? "#94D7A2" : selected &&  "#F8BCBC",
        
        opacity: props.checked && (props.value != props.correctAnswer) ? "0.5" : "1",
        backgroundColor : props.checked && (props.value === props.correctAnswer) ? "#94D7A2" : (selected) ? "#F8BCBC" : "white"
        // backgroundColor:  props.checked && (selected) ? "#94D7A2" : "white"



        // backgroundColor: Object.values(props.answers).map(answer => {
        //     if (props.checked && (answer === props.correctAnswer) && (props.value === props.correctAnswer)){
        //         return "#94D7A2" 

        //     }
        //     else{
        //         return "#F8BCBC"
        //     }
        // })
    }


    function handleChange(event){
        // need to figure out a way here so that if the user changes their
        //  answers on a question, its updates it and not adds it seperately to the list.

        const answeredQuestion = htmlParser.parse(event.target.name)
        const answer = htmlParser.parse(event.target.value)

        // answerSelections[answeredQuestion] = answer
        props.answers[answeredQuestion] = answer
        // setAnswers(prevState=> [
        //     ...prevState, answer])
        // console.log(answerSelections)
        // console.log(props.answers)
        // props.selected = !props.selected
        selected = !selected
        console.log(selected)


       
       
  
      }

   

    return (
 
        <li style={styles} ><input type="radio" onChange={handleChange} id={nanoid()} className="answer" name={props.question} value={props.value}/>{props.value}</li>
        
    )
           
       
}


