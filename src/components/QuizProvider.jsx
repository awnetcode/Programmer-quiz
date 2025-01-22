import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QiuzProvider = ({ children }) => {

const [category, setCategory] = useState('React');
const [error, setError] = useState(null); // Obsługa błędów
const [questionCount, setQuestionCount] = useState(0);
const [score, setScore] = useState(0);
const [questions, setQuestions] = useState([]);
const [categories, setCategories] = useState([]);
const [answers, setAnswers] = useState([{},{},{},{}]);
const [correctAnswers, setCorrectAnswers] = useState([{},{},{},{}]);
const [difficulty, setDifficulty] = useState('');
const [loading, setLoading] = useState(false);

const nextQuestion = () => {
    if (questionCount < questions.length-1){
        setQuestionCount(questionCount + 1);
    }
}

const changeCategory = (e) =>{
    const currentCategory = e.target.value;
    setCategory(currentCategory);
}

const checkAnswer = (e, answerKey) => {
    const values = Object.values(correctAnswers[questionCount]);

    const markAnswer = `answer_${answerKey}_correct`;
    const isCorrect = correctAnswers[questionCount][markAnswer];

    console.log(values);

/* Na przyszłość: Jeśli użyjesz kropkowej notacji (correctAnswers[questionCount].markAnswer), JavaScript spróbuje znaleźć właściwość o statycznej nazwie markAnswer, która nie istnieje, co prowadzi do błędu.
Notacja nawiasów kwadratowych: 
const obj = { name: "Alice" };
const key = "name";
console.log(obj[key]);
Notacja kropkowa:
console.log(obj.name);
 */
    console.log(isCorrect);


    if (isCorrect == true) {
        console.log("trafiony");
    }else{
        console.log("pudło")
    }
}

const scoreCount = () =>{
    setScore(score + 10);
}


const newQuiz = () =>{
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://quizapi.io/api/v1/questions?category=${category}`,
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

            const fetchedDifficulty = result.map(value => value.difficulty);
            setDifficulty(fetchedDifficulty); //tablica stringów

            const fetchedCorrectAnswers = result.map(value => value.correct_answers);
            setCorrectAnswers(fetchedCorrectAnswers);


            //console.log(result);
            //console.log(questionCount);
            //console.log(correctAnswers[questionCount].answer_a_correct);
            
            } catch(error) {
            setError(error.message);
            } finally {
                setLoading(false)
            }
    };
    fetchData();
}


useEffect(() =>{
    newQuiz();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[category]);

    return(
        <QuizContext.Provider value={{
            category, setCategory,
            error, setError,
            questionCount, setQuestionCount,
            questions, setQuestions,
            answers, setAnswers,
            categories, setCategories,
            loading, difficulty,
            score,
            nextQuestion,
            changeCategory,
            checkAnswer,
            scoreCount
        }}>
            {children}
        </QuizContext.Provider>
    )
}