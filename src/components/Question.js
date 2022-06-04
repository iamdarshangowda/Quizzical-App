import React from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import "../styles/Question.css";

const Question = (props) => {
  const incorrectAnswerElements = props.incorrectAnswer.map((answer) => {
    const incorrectAnswerClassName = `${
      props.selectedAnswer === answer ? "question-btn-selected" : "question-btn"
    }``${
      props.selectedAnswer === answer &&
      props.showAnswer &&
      "question-btn-incorrect"
    }`;

    return (
      <button
        key={nanoid()}
        className={incorrectAnswerClassName}
        onClick={() => props.handleSelectedAnswer(props.id, answer)}
      >
        {decode(answer)}
      </button>
    );
  });

  const correctAnswerClassName = `${
    props.selectedAnswer === props.correctAnswer
      ? "question-btn-selected"
      : "question-btn"
  } ${props.showAnswer && "question-btn-correct"}`;

  const correctAnswerElement = (
    <button
      key={nanoid()}
      className={correctAnswerClassName}
      onClick={() => props.handleSelectAnswer(props.id, props.correctAnswer)}
    >
      {decode(props.correctAnswer)}
    </button>
  );

  incorrectAnswerElements.push(correctAnswerElement);

  const sortedAnswerElements = incorrectAnswerElements.sort((a, b) =>
    a.props.children.localeCompare(b.props.children)
  );

  return (
    <article className="question-container">
      <div>
        <h3 className="question-text">{decode(props.question)}</h3>
        {sortedAnswerElements}
      </div>

      {props.showAnswer &&
        (props.selectedAnswer === props.correctAnswer ? (
          <img
            src={process.env.PUBLIC_URL + "/images/tick.svg"}
            width={35}
            alt="Tick, correct answer"
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + "/images/cross.svg"}
            width={30}
            alt="Cross, wrong answer"
          />
        ))}
    </article>
  );
};
export default Question;
