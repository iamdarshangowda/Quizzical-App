import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../styles/QuestionList.css";
import getQuestions from "../services/getQuestions";
import Question from "./Question";

export default function QuestionList({
  handleGameStart,
  handleNoQuestionsError,
  gameOption,
}) {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [checkAnswerBtn, setCheckAnswerBtn] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const allQuestionsAnswered = questionsArray.every(
    (question) => question.selectedAnswer !== ""
  );

  useEffect(() => {
    getQuestions(gameOption).then((questions) => {
      if (questions.length === 0) {
        handleGameStart();
        handleNoQuestionsError(true);
        return;
      } else {
        handleNoQuestionsError(false);
      }
      return setQuestionsArray(
        questions.map((question) => {
          return {
            ...question,
            id: nanoid(),
            selectedAnswer: "",
            showAnswer: false,
          };
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (questionsArray.length !== 0 && allQuestionsAnswered) {
      let correctAnswerCount = 0;

      questionsArray.forEach((question) => {
        if (question.correct_answer === question.selectedAnswer) {
          correctAnswerCount++;
        }
      });

      setCorrectAnswerCount(correctAnswerCount);
      setCheckAnswerBtn(true);
    }
  }, [questionsArray]);

  const handleSelectedAnswer = (questionId, answer) => {
    if (!gameOver) {
      setQuestionsArray((prev) =>
        prev.map((question) =>
          question.id === questionId
            ? { ...question, selectedAnswer: answer }
            : question
        )
      );
    }
  };

  const checkAnswers = () => {
    if (allQuestionsAnswered) {
      setGameOver(true);

      setQuestionsArray((prev) =>
        prev.map((question) => ({
          ...question,
          showAnswer: true,
        }))
      );
    }
  };

  const resetGame = () => {
    setCheckAnswerBtn(false);
    setGameOver(true);
    handleGameStart();
  };

  const questionElements = questionsArray.map((question) => (
    <Question
      key={question.id}
      id={question.id}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswer={question.incorrect_answers}
      difficulty={question.difficulty}
      category={question.category}
      selectedAnswer={question.selectedAnswer}
      showAnswer={question.showAnswer}
      handleSelectedAnswer={handleSelectedAnswer}
    />
  ));
  return (
    <div className="questionList-container">
      {questionElements}
      <section className="bottom-container">
        {gameOver && <h3>Your scored {correctAnswerCount}/5 correct answer</h3>}
        <button
          className={`btn-primary ${
            checkAnswerBtn ? "btn-check-answers" : "btn-check-answers-disabled"
          }`}
          onClick={gameOver ? resetGame : checkAnswers}
        >
          {gameOver ? "Play again" : "Check answers"}
        </button>
      </section>
    </div>
  );
}
