import QuestionContainer from "./components/QuestionContainer";
import AnswersContainer from "./components/AnswersContainer";
import AnswerButton from "./components/AnswerButton";
import QuizHeader from "./components/QuizHeader";
import './App.css';

import { QiuzProvider } from "./components/QuizProvider";

function App() {
return(
  <>
  <div className="quiz-container">
    <QiuzProvider>
         <QuizHeader/>
         <QuestionContainer />
         <AnswersContainer /> 
         <AnswerButton />
    </QiuzProvider>
  </div>
  </>
)
}

export default App
