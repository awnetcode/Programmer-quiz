import '../styles/answersContainer.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const AnswersContainer = () => {

    const { questionCount, answers, loading, checkAnswer, cheatMode } = useContext(QuizContext);

    return(
        <>
        <div className="answers-container">
            <ul className='answers-list'>
                <li className={cheatMode == true ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox" 
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'a');
                        }
                    }}
                    checked={false}
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_a}
                </li>
                <li className={cheatMode == true ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox"
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'b');
                        }
                    }} 
                    checked={false}                                      
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_b}
                </li>
                <li className={cheatMode == true ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox" 
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'c');
                        }
                    }}
                    checked={false}                                       
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_c}
                </li>
                <li className={cheatMode == true ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox"
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'd');
                        }
                    }}
                    checked={false}                                       
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_d}
                </li>
            </ul>
            
        </div>
        </>
    )
}

export default AnswersContainer;