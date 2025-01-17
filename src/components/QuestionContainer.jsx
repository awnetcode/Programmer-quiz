import '../styles/questionContainer.css';

// eslint-disable-next-line react/prop-types
const QuestionContainer = ({question}) => {

    return(
        <>
        <div className="question-area">
            <p className="question">{question}</p>
        </div>
        </>
    )
}

export default QuestionContainer;