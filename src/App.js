import { useState } from "react";
import "./App.css";

const App = () => {
  const questions = [
    {
      questionText: "What is the full name of Abdul's ?",
      answerOptions: [
        { answerText: "Abdul Rehman", isCorrect: false },
        { answerText: "Abdul Rehman Awan", isCorrect: true },
        { answerText: "Abdul", isCorrect: false },
        { answerText: "Rehman", isCorrect: false },
      ],
    },
    {
      questionText: "What is the Date of Birth of Abdul's ?",
      answerOptions: [
        { answerText: "1 Oct", isCorrect: false },
        { answerText: "30 Oct", isCorrect: false },
        { answerText: "10 Oct", isCorrect: false },
        { answerText: "09 Oct", isCorrect: true },
      ],
    },
    {
      questionText: "How Much Height of Abdul's ?",
      answerOptions: [
        { answerText: "5.9", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "6.1", isCorrect: true },
      ],
    },
    {
      questionText: "What is Abdul's Profession ?",
      answerOptions: [
        { answerText: "Software Engineer", isCorrect: true },
        { answerText: "Writer", isCorrect: false },
        { answerText: "Singer", isCorrect: false },
        { answerText: "Graphic Designer", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the best friend of Abdul's ?",
      answerOptions: [
        { answerText: "Wakeel", isCorrect: false },
        { answerText: "Abdullah", isCorrect: true },
        { answerText: "Mani", isCorrect: false },
        { answerText: "Mubeen", isCorrect: false },
      ],
    },
    {
      questionText: "Abdul's mostly like ?",
      answerOptions: [
        { answerText: "Tea", isCorrect: false },
        { answerText: "Cold Drink", isCorrect: false },
        { answerText: "Coffee", isCorrect: true },
        { answerText: "Green Tea", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const addAnswerHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

const handleRestartQuiz = () => {
  setCurrentQuestion(0);
  setShowScore(false);
  setScore(0);
};

  
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => addAnswerHandler(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;