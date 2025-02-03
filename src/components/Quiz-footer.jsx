import '../styles/quiz-footer.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

import CheaterButton from './CheaterButton';

const QuizFooter = () =>{
    const { questionCount } = useContext(QuizContext);

    return(
        <footer className="quiz-footer">
            <h2>Question: {questionCount + 1} of 20</h2>
            <CheaterButton/>
        </footer>
    )

}

export default QuizFooter;