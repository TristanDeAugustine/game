const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

// Team 1

const team = document.querySelector('.teams')

const team1 = document.querySelector('.team-1')

const team1name = document.querySelector('.team-1-name')

const team1score = document.querySelector('.team-1-score')

const team1input = document.querySelector('.team-1-input')

const updateteam1name = document.querySelector('.update-team-1-name')

const team1add1button = document.querySelector('.team-1-add-1-button')

let quarterCounter = 0

// Team 2

const team2 = document.querySelector('.team-2')

const team2score = document.querySelector('.team-2-score')

const team2input = document.querySelector('.team-2-input')

const updateteam2name = document.querySelector('.update-team-2-name')

const team2add1button = document.querySelector('.team-2-add-1-button')

const team2subtract1button = document.querySelector('.team-2-subtract-1-button')

// function add 1 to team 1

const add1ToTeamScore = () => {
  console.log('button was clicked')

  //getting

  const currentScore = document.querySelector('.team-1-score').textContent

  // updating

  const newScore = parseInt(currentScore) + 1
  if (newScore > 21) {
    document.querySelector('.team-1-score').textContent = 21
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', add1ToTeamScore)

team1add1button.addEventListener('click', add1ToTeamScore)

// function subtract 1 from team 1

const subtract1ToTeamScore = () => {
  console.log('button was clicked')

  // getting

  const currentScore = document.querySelector('.team-1-score').textContent

  // updating

  const newScore = parseInt(currentScore) - 1
  if (newScore < 0) {
    document.querySelector('.team-1-score').textContent = 0
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
  // updating in html
}

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtract1ToTeamScore)

const team1subtract1button = document.querySelector('.team-1-subtract-1-button')
team1subtract1button.addEventListener('click', subtract1ToTeamScore)

// function add 1 to team 2

const addToTeamScore = () => {
  console.log('button was clicked')

  // getting

  const currentScore = document.querySelector('.team-2-score').textContent

  // updating

  const newScore = parseInt(currentScore) + 1
  if (newScore > 21) {
    document.querySelector('.team-2-score').textContent = 21
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }

  let quarter = document.querySelector('.quarter-2-number')
  quarter.innerHTML = quarterCounter
}

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addToTeamScore)

team2add1button.addEventListener('click', addToTeamScore)

// function subtract 1 from team 2

const subtractToTeamScore = () => {
  // get the current score
  // subtract
  // check if the new score < 0
  // update the HTML accordly

  console.log('button was clicked')

  // getting

  const currentScore = document.querySelector('.team-2-score').textContent

  // updating

  const newScore = parseInt(currentScore) - 1
  if (newScore < 0) {
    document.querySelector('.team-2-score').textContent = 0
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }
}

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractToTeamScore)

team2subtract1button.addEventListener('click', subtractToTeamScore) // change team 1 name

// change team name 1
const team1UpdateName = () => {
  console.log('New name was typed into box, button was clicked')
  const currentName = document.querySelector('.team-1-name')
  const team1Input = document.querySelector('.team-1-input')
  currentName.innerHTML = team1Input.value
}

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', team1UpdateName)

// change team name 2
const team2UpdateName = () => {
  console.log('New name was typed into box, button was clicked')
  const currentName = document.querySelector('.team-2-name')
  const team2Input = document.querySelector('.team-2-input')
  currentName.innerHTML = team2Input.value
}

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', team2UpdateName)

const reset = () => {
  console.log('button was clicked, reset')
  // reset team 1 score
  // reset team 2 score
  document.querySelector('.team-2-score').textContent = 10
  document.querySelector('.team-1-score').textContent = 10
}
document.querySelector('.reset').addEventListener('click', reset)
