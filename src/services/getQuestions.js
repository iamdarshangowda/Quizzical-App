const getQuestions = async (gameOption) => {
  const { category, difficulty, type } = gameOption;

  let categoryQuery = "";
  let difficultyQuery = "";
  let typeQuery = "";

  if (category !== "") {
    categoryQuery = `&category=${category}`;
  }
  if (difficulty !== "") {
    difficultyQuery = `&difficulty=${difficulty}`;
  }
  if (type !== "") {
    typeQuery = `&type=${type}`;
  }

  let apiUrl = `https://opentdb.com/api.php?amount=5${categoryQuery}${difficultyQuery}${typeQuery}`;

  const res = await fetch(apiUrl);
  const data = await res.json();
  return data.results;
};

export default getQuestions;
