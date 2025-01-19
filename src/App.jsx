
import SelectCategory from "./components/SelectCategory";
import QuestionContainer from "./components/QuestionContainer";
import AnswersContainer from "./components/AnswersContainer";
import AnswerButton from "./components/AnswerButton"
import './App.css';

import { QiuzProvider } from "./components/QuizProvider";

function App() {
return(
  <>
  <div className="quiz-container">
    <QiuzProvider>
         <SelectCategory />
         <QuestionContainer />
         <AnswersContainer />
         <AnswerButton />
    </QiuzProvider>
  </div>
  </>
)
}

export default App
