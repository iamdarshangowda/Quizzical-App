import React, { useState } from "react";
import "./styles/App.css";
import Landing from "./components/Landing";
import QuestionList from "./components/QuestionList";

function App() {
  const [start, setStart] = useState(false);
  const [showNoQuestionsError, setShowNoQuestionsError] = useState(false);
  const [gameOption, setGameOption] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  function handleGameStart() {
    setStart((prev) => !prev);
  }

  function handleNoQuestionsError(boolean) {
    setShowNoQuestionsError(boolean);
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setGameOption((prevGameOptions) => ({
      ...prevGameOptions,
      [name]: value,
    }));
  }

  return (
    <main>
      {start ? (
        <QuestionList
          handleGameStart={handleGameStart}
          handleNoQuestionsError={handleNoQuestionsError}
          gameOption={gameOption}
        />
      ) : (
        <Landing
          start={handleGameStart}
          error={showNoQuestionsError}
          options={gameOption}
          change={handleChange}
        />
      )}
    </main>
  );
}

export default App;
