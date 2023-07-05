import React, { useEffect, useState } from "react"
import Question from "./Question.js"



// Find a way to alter the state every time an answer is clicked.

export default function App(){
    const [questions, setQuestions] = useState([])
    const [startQuiz, setStartQuiz] = useState(false)
    const [quizTemplate, setQuizTemplate] = useState()
    const [checkAnswers, setCheckAnswers] = useState(false)
    const [startNew, setStartNew] = useState(false)
    const [quizResults, setQuizResults] = useState([])

    const [answers, setAnswers] = useState({})


  //   correctAnswers.map()

  //   const styles = {
  //     backgroundColor: (props.value === props.correctAnswer) && checkAnswers ? "#94D7A2" : "#F8BCBC"
  // }
    
    useEffect(() => {
      getQuestions()
      console.log("ma boi is clicked!")
        
    },[startNew] )

    
    function getQuestions(){

        fetch("https://opentdb.com/api.php?amount=5&category=31")
            .then(response => response.json())
            .then(data => {
                // console.log(data.results)
                setQuestions(data.results)
                })
    }
    
    function getResults(){
      setCheckAnswers(prevState => !prevState)
      // setStartQuiz(prevState => !prevState)

      

    }

    function renderQuiz(){

        // getQuestions()
      setStartQuiz(prevState => !prevState)

      const correctAnswers = questions.map(item => item.correct_answer)
  
      const renderQuizTemplate = questions.map(item => <Question value={item} checked={checkAnswers} answers={answers}/>)

      setQuizTemplate(renderQuizTemplate)
 
       }
      
    return (
        <main>
            
            { 
              !startQuiz &&
              <div className="start-page">
                <h1 className="title" >Quizzical</h1>
                <p>Let's see how smart you are!</p>
                <button className="start-quiz-btn" onClick={renderQuiz}>Start Quiz</button>
              </div>
            }
            {startQuiz && quizTemplate}
            
            
         
            {startQuiz  && <button className="start-quiz-btn" onClick={getResults}>Check Answers</button>}

            { checkAnswers &&
            <div className="scores">
              <p className="score" >You scored 3 correct answers</p> 
              <button className="start-quiz-btn" onClick={renderQuiz}>Play again</button>
            </div>
            }
            
        </main>
    )
}
