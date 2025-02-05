import '../styles/answerButton.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const AnswerButton = () => {
    const { questionCount, sendAnswer } = useContext(QuizContext);
    return(
        <>
        <button className="answer-button" onClick={() => {
if (questionCount < 19) {
    sendAnswer();
     }
     }}
     >
            {questionCount < 19 ? `Save & go Next` : 'Well Done!'}
            </button>
        </>
    )
}

export default AnswerButton;