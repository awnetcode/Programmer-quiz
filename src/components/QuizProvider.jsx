import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QiuzProvider = ({ children }) => {

const [category, setCategory] = useState('NodeJs');
const [error, setError] = useState(null); // Obsługa błędów
const [questionCount, setQuestionCount] = useState(0);
const [questions, setQuestions] = useState([]);
const [categornies, setCategories] = useState([]);
const [answers, setAnswers] = useState([]);

const nextQuestion = () => {
    setQuestionCount(questionCount + 1);
}


const newQuiz = () =>{
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

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            const fetchedQuestions = result.map(value => value.question);
            setQuestions(fetchedQuestions); // tablica stringów

            const fetchedCategories = result.map(value => value.category);
            setCategories(fetchedCategories); //tablica stringów

            const fetchedAnswers = result.map(value => value.answers);
            setAnswers(fetchedAnswers); //tablica obiektów

            

            } catch(error) {
            setError(error.message);
            }
    }
    setQuestionCount(1);
    fetchData();
}


useEffect(() =>{
    newQuiz();
},[]);

    return(
        <QuizContext.Provider value={{
            category, setCategory,
            error, setError,
            questionCount, setQuestionCount,
            questions, setQuestions,
            answers, setAnswers,
            categornies, setCategories,
            nextQuestion,
        }}>
            {children}
        </QuizContext.Provider>
    )
}