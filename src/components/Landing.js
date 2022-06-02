import React from "react";

export default function Landing(props) {
  return (
    <div className="landing">
      <h1>Quizzical</h1>
      <p>Test your knowledge</p>
      {props.error && (
        <h2 className="noQuestions-text">
          Oops! We couldn't find any questions with these options!
        </h2>
      )}
      <section className="input-container">
        {/* Category */}
        <div className="category">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={props.options.category}
            onChange={props.change}
          >
            <option value="">Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
        {/* Difficulty */}
        <div className="difficulty">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={props.options.difficulty}
            onChange={props.change}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </section>
      {/* Type */}
      <section className="type">
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={props.options.type}
          onChange={props.change}
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
      </section>
      <button className="btn btn-dark btn-lg" onClick={props.start}>
        Start Quiz
      </button>
      <img
        className="blob-up"
        src={process.env.PUBLIC_URL + "/images/blob-up.png"}
        alt="blob-up"
      />
      <img
        className="blob-down"
        src={process.env.PUBLIC_URL + "/images/blob-down.png"}
        alt="blob-down"
      />
    </div>
  );
}
