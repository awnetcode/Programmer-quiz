import '../styles/quizHeader.css';
import SelectCategory from './SelectCategory';
import { useContext } from 'react';
import { QuizContext } from './QuizProvider';



const QuizHeader = () => {

    const { category, difficulty, questionCount, score } = useContext(QuizContext);

    return(
        <>
        <div className="header-container">
            <SelectCategory/>
            <div className="question-info">
                <h1>Category: {category}</h1>
                <h4>Difficulty: {difficulty[questionCount]}</h4>
            </div>
            <div className="score-count">
                <h2>Score: {score}</h2>
            </div>
        </div>
        </>
    )
}

export default QuizHeader;