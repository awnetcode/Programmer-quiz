import '../styles/quiz-footer.css';

import { useContext, useEffect } from 'react';
import { QuizContext } from './QuizProvider';

const QuizFooter = () =>{
    const { markedAnswer, questionCount } = useContext(QuizContext);
    
    useEffect(() => {

    })

    return(
        <footer className="quiz-footer">
            <h2>Question: {questionCount + 1} of 20</h2>
            <h2>(hint) Marked answer: {markedAnswer == true ? 'Correct!' : 'Wrong!'}</h2>
        </footer>
    )

}

export default QuizFooter;