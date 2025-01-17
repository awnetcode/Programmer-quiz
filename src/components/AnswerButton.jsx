import '../styles/answerButton.css';

// eslint-disable-next-line react/prop-types
const AnswerButton = ({nextQuestion, questionCount}) => {
    return(
        <>
        <button className="answer-button" onClick={() => nextQuestion()}>Next ({questionCount+1} / 20)</button>
        </>
    )
}

export default AnswerButton;