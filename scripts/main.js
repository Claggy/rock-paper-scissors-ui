let myScore = 0;
let compScore = 0;
let ties = 0;
let round = 1;

const choices = document.querySelectorAll('.choices');
const playerScore = document.querySelector('#playerScore');
const computorScore = document.querySelector('#computerScore');
const tieTotal = document.querySelector('#ties');
const gameWinner = document.querySelector('#winner');
const reset = document.querySelector('#reset');
const roundNum = document.querySelector('#round');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const roundResult = document.querySelector('#result');

document.getElementById('reset').addEventListener('click', resetGame);

choices.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
  });
  button.addEventListener('click', game);
});

function game() {
  let computerSelection = computerPlay();

  roundNum.textContent = `Round ${round}`;
  playerChoice.textContent = `You chose:\r\n${capitalize(playerSelection)}`;
  computerChoice.textContent = `Computer chose:\r\n${capitalize(computerSelection)}`;

  roundResult.textContent = playRound(playerSelection, computerSelection);
  round++;

  if (myScore === 5 || compScore === 5) {
    winner();
    choices.forEach((button) => {
      button.removeEventListener('click', game);
    });
  }
}

function playRound(playerSelection, computerSelection) {

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'paper':
    case playerSelection === 'paper' && computerSelection === 'scissors':
    case playerSelection === 'scissors' && computerSelection === 'rock':
      compScore++;
      computerScore.textContent = `Computer score:\r\n${compScore}`;
      return `${capitalize(computerSelection)} beats ${playerSelection}!`;
      break;  
      
    case playerSelection === 'rock' && computerSelection === 'rock':
    case playerSelection === 'scissors' && computerSelection === 'scissors':
    case playerSelection === 'paper' && computerSelection === 'paper':
      ties++;
      tieTotal.textContent = `Ties:\r\n${ties}`;
      return `You both chose ${playerSelection}!`;
      break;

    case playerSelection === 'paper' && computerSelection === 'rock':
    case playerSelection === 'rock' && computerSelection === 'scissors':
    case playerSelection === 'scissors' && computerSelection === 'paper':
      myScore++;
      playerScore.textContent = `Your score:\r\n${myScore}`;
      return `${capitalize(playerSelection)} beats ${computerSelection}!`;
      break;
  }
}

function computerPlay() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return 'rock';
  } else if (result === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function winner() {
  if (myScore > compScore) {
    gameWinner.textContent = 'You win!';
  } else if (myScore < compScore) {
    gameWinner.textContent = 'You lose!';
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetGame() {
  myScore = 0;
  compScore = 0;
  ties = 0;
  round = 1;
  roundNum.textContent = 'Choose one:';
  playerScore.textContent = `Your score:\r\n${myScore}`;
  computerScore.textContent = `Computer score:\r\n${compScore}`;
  tieTotal.textContent = `Ties:\r\n${ties}`;
  gameWinner.textContent = '';
  choices.forEach((button) => {
    button.addEventListener('click', game);
  });
}