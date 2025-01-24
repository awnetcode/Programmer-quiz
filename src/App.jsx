import QuestionContainer from "./components/QuestionContainer";
import AnswersContainer from "./components/AnswersContainer";
import AnswerButton from "./components/AnswerButton";
import QuizHeader from "./components/QuizHeader";
import QuizFooter from "./components/Quiz-footer";
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
         <QuizFooter />
    </QiuzProvider>
  </div>
  </>
)
}

export default App
