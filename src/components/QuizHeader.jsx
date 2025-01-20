import '../styles/quizHeader.css';
import SelectCategory from './SelectCategory';
import { useContext } from 'react';
import { QuizContext } from './QuizProvider';



const QuizHeader = () => {

    const { category } = useContext(QuizContext);

    return(
        <>
        <div className="header-container">
            <SelectCategory/>
            <h1>Category: {category}</h1>
        </div>
        </>
    )
}

export default QuizHeader;