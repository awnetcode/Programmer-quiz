/* eslint-disable react/prop-types */
import '../styles/answersContainer.css';

const AnswersContainer = ({answers, questionCount}) => {
    return(
        <>
        <div className="answers-container">
            <ul>
                <li><input type="checkbox" checked=""></input>{answers[questionCount].answer_a}</li>
                <li><input type="checkbox" checked=""></input>{answers[questionCount].answer_b}</li>
                <li><input type="checkbox" checked=""></input>{answers[questionCount].answer_c}</li>
                <li><input type="checkbox" checked=""></input>{answers[questionCount].answer_d}</li>
            </ul>
            
        </div>
        </>
    )
}

export default AnswersContainer;