import "../styles/questions.css";
import { useState, useEffect } from "react";

import QuestionContainer from "./QuestionContainer";
import AnswerButton from "./AnswerButton";
import AnswersContainer from "./AnswersContainer";

const Questions = () => {
    const [error, setError] = useState(null); // Obsługa błędów

    const [questionCount, setQuestionCount] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [categornies, setcategories] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://quizapi.io/api/v1/questions?category=NodeJs",
                    {
                        headers: {
                            "X-Api-Key": "hqB1z4JM9jKdxXjM4aN32qnV7NXAmNXCOzY0aQN1", // Twój klucz API
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                const fetchedQuestions = result.map(value => value.question);
                setQuestions(fetchedQuestions); // tablica stringów

                const fetchedCategories = result.map(value => value.category);
                setcategories(fetchedCategories); //tablica stringów

                const fetchedAnswers = result.map(value => value.answers);
                setAnswers(fetchedAnswers); //tablica obiektów

               // console.log(fetchedAnswers);

            } catch (error) {
                setError(error.message); // Obsłuż błąd
            }
        };
        

        fetchData();
    }, []); // Brak zależności, bo chcemy tylko raz pobrać dane

    const nextQuestion = () => {
        if (questionCount < questions.length - 1) {
            setQuestionCount(questionCount);
        }
    };

    return(
        <>
        <div className="quiz-container">
        <h1>Category: {categornies[questionCount]}</h1>
        <QuestionContainer 
        question={error ? `Error: ${error}` : questions[questionCount] || "Loading..."}
        />
        <AnswersContainer answers={answers} questionCount={questionCount}/>
        <AnswerButton nextQuestion={nextQuestion} questionCount={questionCount}/>
        </div>
        </>
    );
};

export default Questions;
