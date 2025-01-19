import '../styles/answerButton.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const AnswerButton = () => {
    const { questionCount, nextQuestion } = useContext(QuizContext);
    return(
        <>
        <button className="answer-button" onClick={() => nextQuestion()}>Next ({questionCount} / 20)</button>
        </>
    )
}

export default AnswerButton;