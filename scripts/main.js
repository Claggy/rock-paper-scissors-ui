let myScore = 0;
let compScore = 0;
let round = 1;

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#playerScore');
const computorScore = document.querySelector('#computerScore');
const gameWinner = document.querySelector('#winner');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
  });
  button.addEventListener('click', game);
});

function resetGame() {
  myScore = 0;
  compScore = 0;
  round = 1;
}

function game() {
  let computerSelection = computerPlay();

  updateScore(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  round++;

  if (myScore === 5 || compScore === 5) {
    winner();
  }
}

function playRound(playerSelection, computerSelection) {

  switch (true) {
    case playerSelection === 'rock' && computerSelection === 'paper':
      return `You lose round ${round}! Paper beats rock.`;
      break;

    case playerSelection === 'rock' && computerSelection === 'rock':
      return `Round ${round} is a tie! You both chose ${playerSelection}.`;
      break;

    case playerSelection === 'rock' && computerSelection === 'scissors':
      return `You win round ${round}! Rock beats scissors.`;
      break;

    case playerSelection === 'paper' && computerSelection === 'paper':
      return `Round ${round} is a tie! You both chose ${playerSelection}.`;
      break;

    case playerSelection === 'paper' && computerSelection === 'rock':
      return `You win round ${round}! Paper beats rock.`;
      break;

    case playerSelection === 'paper' && computerSelection === 'scissors':
      return `You lose round ${round}! Scissors beats paper.`;
      break;

    case playerSelection === 'scissors' && computerSelection === 'scissors':
      return `Round ${round} is a tie! You both chose ${playerSelection}.`;
      break;

    case playerSelection === 'scissors' && computerSelection === 'rock':
      return `You lose round ${round}! Rock beats scissors.`;
      break;

    case playerSelection === 'scissors' && computerSelection === 'paper':
      return `You win round ${round}! Scissors beats paper.`;
      break;
  }
}

function updateScore(playerSelection, computerSelection) {
  if (playRound(playerSelection, computerSelection).includes("win")) {
    myScore++;
    playerScore.textContent = myScore;
  } else if (playRound(playerSelection, computerSelection).includes("lose")) {
    compScore++;
    computerScore.textContent = compScore;
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