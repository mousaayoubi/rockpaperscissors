const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if  (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'master') {
      return userInput;
    } else {
      console.log('You have to choose between rock, paper or scissors');
    }
  };
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Game is a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins';
      } else {
        return 'User wins';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer Wins';
      } else {
        return 'User wins';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Compuer wins';
      } else {
        return 'User wins';
      }
    }
    if (userChoice === 'master') {
      return 'User wins';
    }
  };
  const playGame = () => {
    let userChoice = getUserChoice('master');
    console.log('The user\'s choice is '+userChoice);
    let computerChoice = getComputerChoice();
    console.log('The computer\'s choice is '+computerChoice);
    
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();