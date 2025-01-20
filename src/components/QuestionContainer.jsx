import '../styles/questionContainer.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const QuestionContainer = () => {

    const { questionCount, questions, loading } = useContext(QuizContext);
    
    return(
        <>
        <div className="question-area">
            <p className="question">{ loading == true ? 'Data loading...' : questions[questionCount]}</p>
        </div>
        </>
    )
}

export default QuestionContainer;