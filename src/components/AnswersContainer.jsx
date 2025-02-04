import '../styles/answersContainer.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const AnswersContainer = () => {

    const { questionCount, answers, loading, checkAnswer, correctLetter } = useContext(QuizContext);

    return(
        <>
        <div className="answers-container">
            <ul className='answers-list'>
                <li className={ correctLetter === 'a' ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox" 
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'a');
                        }
                    }}
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_a}
                </li>
                <li className={ correctLetter === 'b' ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox"
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'b');
                        }
                    }}                                    
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_b}
                </li>
                <li className={ correctLetter === 'c' ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox" 
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'c');
                        }
                    }}                                    
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_c}
                </li>
                <li className={ correctLetter === 'd' ? 'bordered-answer' : ''}>
                    <input 
                    className='answer-checkbox' 
                    type="checkbox"
                    onClick={(e) => {
                        if (e.target.checked) {
                            checkAnswer(e, 'd');
                        }
                    }}                                    
                    />
                    {loading == true ? 'Wait...' : answers[questionCount].answer_d}
                </li>
            </ul>
            
        </div>
        </>
    )
}

export default AnswersContainer;