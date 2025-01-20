import '../styles/answerButton.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const AnswerButton = () => {
    const { questionCount, nextQuestion } = useContext(QuizContext);
    return(
        <>
        <button className="answer-button" onClick={() => nextQuestion()}>
            {questionCount < 19 ? `Next (${questionCount + 1} / 20)` : 'Well Done!'}
            </button>
        </>
    )
}

export default AnswerButton;