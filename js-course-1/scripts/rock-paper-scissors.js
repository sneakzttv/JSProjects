// Retreiving score values from local storage (only supports strings)
console.log(JSON.parse(localStorage.getItem('score')));
      
// Setting score object from saved data, setting default value if not present
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// Update score
updateScoreElement();

// Setting a default value if no JSON is present in local storage (default operator above is best practice)

// Check if score is null 
// if (score === null) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };
// };

// // !score can also be used as it checks if its null (default operator above is best practice)
// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };
// };

function playGame(playerMove) {
  // Variables
  const computerMove = pickComputerMove();
  let result = '';

  // Match functionality
  // Scissors
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  // Paper
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  // Rock
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  };
  
  // Update the score object
  if (result === 'You win') {
    score.wins ++;
  } else if (result === 'You lose') {
    score.losses ++;
  } else if (result === 'Tie') {
    score.ties ++;
  };

  // Saving to localStorage to keep scores saved between session (only supports strings)
  localStorage.setItem('score', JSON.stringify(score));

  // Update score
  updateScoreElement();

  // Display result
  document.querySelector('.js-result')
    .innerHTML = result;
  document.querySelector('.js-moves')
    .innerHTML =`You
    <img src="images/${playerMove}-emoji.png"
    class="move-icon">
    <img src="images/${computerMove}-emoji.png"
    class="move-icon">
    Computer`;
};

function pickComputerMove() {
  // Variables
  // Math.random generates a random number between 0 and less than 1
  const randomNumber = Math.random()
  let computerMove = '';
  
  // Computer picks move via random number generation
  // Less than as opposes to less than or equal to so things dont overlap
  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber > 0 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber > 0 && randomNumber < 1) {
    computerMove = 'scissors';
  };
  // optional to return a value, variable or calculation, blank return will return undefined. Ends the function immediately.
  return computerMove;
};

// Updates the score element
function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Resets the score object
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  // Removing localStorage score
  localStorage.removeItem('score');
  updateScoreElement();
};