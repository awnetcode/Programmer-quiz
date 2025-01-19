import '../styles/questionContainer.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const QuestionContainer = () => {

    const { category, questionCount, questions } = useContext(QuizContext);
    
    return(
        <>
        <div className="question-area">
            <h1>Category: {category}</h1>
            <p className="question">{questions[questionCount]}</p>
        </div>
        </>
    )
}

export default QuestionContainer;