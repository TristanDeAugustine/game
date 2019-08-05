const main = () => {
  if (document.querySelector("h1.hello-world")) {
    document.querySelector("h1.hello-world").textContent = "Hello, World!";
  }
};

// Team 1

const team = document.querySelector("Teams");

const team1 = document.querySelector("Team-1");

const team1name = document.querySelector("Team-1-name");

const team1score = document.querySelector("team-1-score");

const team1input = document.querySelector("team-1-input");

const updateteam1name = document.querySelector("update-team-1-name");

const team1add1button = document.querySelector(".team-1-add-1-button");

const team1subtract1button = document.querySelector("team-1-subtract-1-button");

// Team 2

const team2 = document.querySelector("team-2");

const team2score = document.querySelector("team-2-score");

const team2input = document.querySelector("team-2-input");

const updateteam2name = document.querySelector("update-team-2-name");

const team2add1button = document.querySelector("team-2-add-1-button");

const team2subtract1button = document.querySelector("team-2-subtract-1-button");

//function add 1 to team 1

const add1ToTeamScore = () => {
  console.log("button was clicked");

  //getting

  const currentScore = document.querySelector(".team-1-score").textContent;

  //updating

  const newScore = parseInt(currentScore) + 1;

  //updating in html

  document.querySelector(".team-1-score").textContent = newScore;
};

document
  .querySelector(".team-1-add-1-button")
  .addEventListener("click", add1ToTeamScore);

team1add1button.addEventListener("click", add1ToTeamScore);

//function subtract 1 from team 1

const subtract1ToTeamScore = () => {
  console.log("button was clicked");

  //getting

  const currentScore = document.querySelector(".team-1-score").textContent;

  //updating

  const newScore = parseInt(currentScore) - 1;

  //updating in html

  document.querySelector(".team-1-score").textContent = newScore;
};

document
  .querySelector(".team-1-subtract-1-button")
  .addEventListener("click", subtract1ToTeamScore);

team1subtract1button.addEventListener("click", subtract1ToTeamScore);

document.addEventListener("DOMContentLoaded", main);
