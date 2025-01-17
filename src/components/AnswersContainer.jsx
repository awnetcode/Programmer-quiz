import '../styles/answersContainer.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const AnswersContainer = () => {

    const { questionCount, answers } = useContext(QuizContext);

    return(
        <>
        <div className="answers-container">
            <ul className='answers-list'>
                <li><input className='answer-checkbox' type="checkbox" ></input>{answers[questionCount].answer_a}</li>
                <li><input className='answer-checkbox' type="checkbox" ></input>{answers[questionCount].answer_b}</li>
                <li><input className='answer-checkbox' type="checkbox" ></input>{answers[questionCount].answer_c}</li>
                <li><input className='answer-checkbox' type="checkbox" ></input>{answers[questionCount].answer_d}</li>
            </ul>
            
        </div>
        </>
    )
}

export default AnswersContainer;