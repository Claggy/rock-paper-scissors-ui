
let myScore = 0;
let compScore = 0;
let round = 1;

const buttons = document.querySelectorAll('button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
  });
  button.addEventListener('click', game);
});


function playGame() {
  myScore = 0;
  compScore = 0;
  round = 1;
  game();
}

function game() {
  let computerSelection = computerPlay();

  if (round === 1 || round === 2 || round === 3 || round === 4) {
    roundScore(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
    if (round >= 3 && (myScore === 3 || compScore === 3)) {
      winner();
    } else {
      round++;
    }

  } else if (round >= 5) {
    roundScore(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    if (myScore === compScore) {
      console.log(`You\'re still tied after ${round} rounds- time for a tiebreaker!`);
      round++;
      game();
    } else {
      winner();
    }
  }
}

function playRound(playerSelection, computerSelection) {
  let currentScore = `Current score is You: ${myScore} Computer: ${compScore}`;

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'paper':
      return `You lose round ${round}! Paper beats rock. ${currentScore}`;
      break;

    case playerSelection === 'rock' && computerSelection === 'rock':
      return `Round ${round} is a tie! You both chose ${playerSelection}. ${currentScore}`;
      break;

    case playerSelection === 'rock' && computerSelection === 'scissors':
      return `You win round ${round}! Rock beats scissors. ${currentScore}`;
      break;

    case playerSelection === 'paper' && computerSelection === 'paper':
      return `Round ${round} is a tie! You both chose ${playerSelection}. ${currentScore}`;
      break;

    case playerSelection === 'paper' && computerSelection === 'rock':
      return `You win round ${round}! Paper beats rock. ${currentScore}`;
      break;

    case playerSelection === 'paper' && computerSelection === 'scissors':
      return `You lose round ${round}! Scissors beats paper. ${currentScore}`;
      break;

    case playerSelection === 'scissors' && computerSelection === 'scissors':
      return `Round ${round} is a tie! You both chose ${playerSelection}. ${currentScore}`;
      break;

    case playerSelection === 'scissors' && computerSelection === 'rock':
      return `You lose round ${round}! Rock beats scissors. ${currentScore}`;
      break;

    case playerSelection === 'scissors' && computerSelection === 'paper':
      return `You win round ${round}! Scissors beats paper. ${currentScore}`;
      break;

    case playerSelection === undefined:  
      break;

    default:
      return 'Invalid input. Choose Rock, Paper, or Scissors.'
  }
}

function roundScore(playerSelection, computerSelection) {
  if (playRound(playerSelection, computerSelection).includes("win")) {
    myScore++;
  } else if (playRound(playerSelection, computerSelection).includes("lose")) {
    compScore++;
  } else if (playRound(playerSelection, computerSelection).includes("tie")) {
    myScore + 0;
    compScore + 0;
  }
}

function winner() {
  let win = `You win! After ${round} rounds, the final score is You: ${myScore} Computer: ${compScore}`;
  let lose = `You lose! After ${round} rounds, the final score is You: ${myScore} Computer: ${compScore}`;

  if (myScore > compScore) {
    console.log(win);
    alert(win);
  } else if (myScore < compScore) {
    console.log(lose);
    alert(lose);
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


function playerChoice() {

}