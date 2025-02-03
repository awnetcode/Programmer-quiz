import QuestionContainer from "./components/QuestionContainer";
import AnswersContainer from "./components/AnswersContainer";
import AnswerButton from "./components/AnswerButton";
import QuizHeader from "./components/QuizHeader";
import QuizFooter from "./components/Quiz-footer";
import "./App.css";

import { QuizProvider } from "./components/QuizProvider"; // Poprawiona literówka
import { useContext } from "react";
import { QuizContext } from "./components/QuizProvider";

function QuizContent() {
  const { cheaterModeToggle } = useContext(QuizContext);

  return (
    <div className={cheaterModeToggle ? "container-cheater-mode" : "quiz-container"}>
      <QuizHeader />
      <QuestionContainer />
      <AnswersContainer />
      <AnswerButton />
      <QuizFooter />
    </div>
  );
}

function App() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}

export default App;
