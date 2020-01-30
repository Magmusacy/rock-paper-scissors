const comprock = document.querySelector('#comprock');
const comppaper = document.querySelector('#comppaper');
const compscissors = document.querySelector('#compscissors');
// computer's choice
    function computerPlay() {
    let rps = Math.floor(Math.random()*3+1)
    switch (rps) {
        case 1:
            return 'Rock';
            break;
        case  2:
            return 'Paper';
            break;
        case  3:
            return 'Scissors';
            break;
    }
    }
    let computerPoints = 0;
    let playerPoints = 0;
    let playerSelection = "";
    let computerSelection = computerPlay;

    function singleRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toUpperCase();
        comprock.classList.remove('computerplay')
        comppaper.classList.remove('computerplay')
        compscissors.classList.remove('computerplay')
        if (playerPoints === 5 && computerPoints < 5) {
            
            return "Player has won! Congratulations!"
        }
        if (computerPoints === 5 && playerPoints < 5) {
            
            return "Computer has won! Congratulations!"
        }
        switch(computerSelection()) {
            case 'Rock':
            if (playerSelection === 'ROCK') {
                comprock.classList.add('computerplay')
                return `It\'s a tie :O`
            }
            else if (playerSelection === 'PAPER') {
                comprock.classList.add('computerplay')
                playerPoints++
                player_points.textContent = playerPoints;
                return `You won paper beats rock`
            }
            else if (playerSelection === 'SCISSORS') {
                comprock.classList.add('computerplay')
                computerPoints++
                comp_points.textContent = computerPoints;
                return `You lost, Rock beats scissors`
            }
            break;
            case 'Paper':
            if (playerSelection == 'ROCK') {
                comppaper.classList.add('computerplay')
                computerPoints++
                comp_points.textContent = computerPoints;
                return `You lost, paper beats rock`
            }
            else if (playerSelection === 'PAPER') {
                comppaper.classList.add('computerplay')
                return `It\'s a tie :O`
            }
            else if (playerSelection === 'SCISSORS') {
                comppaper.classList.add('computerplay')
                playerPoints++
                player_points.textContent = playerPoints;
                return `You won, Scissors beat Paper`
            }
            break;           
            case 'Scissors':
            if (playerSelection === 'ROCK') {
                compscissors.classList.add('computerplay')
                playerPoints++
                player_points.textContent = playerPoints;
                return `You won! Rock beats scissors`
            }
            else if (playerSelection === 'PAPER') {
               compscissors.classList.add('computerplay')
               computerPoints++
               comp_points.textContent = computerPoints;
               return `You lost! Scissors beat Paper`
            }
            else if (playerSelection === 'SCISSORS') {
                compscissors.classList.add('computerplay')
                return `it\'s a tie! :OOO`
                }
            break;
    } 
    }


   /*function game() {
        for (let i = 0; i<5; i++){
        console.log(singleRound(playerSelection, computerSelection))
        }
        if(playerPoints > computerPoints) {
            console.log("Congratulations!!! you won this EPIC battle with " + playerPoints + " points while the computer lost miserably with "+ computerPoints + " points")
        }
        else if(playerPoints < computerPoints) {
            console.log("Not gonna lie, you are pretty bad at this because you lost with " + playerPoints +" points while the computer won like a PRO with "+ computerPoints + " points")
        }
        else console.log("It's a draw ¯\_(ツ)_/¯")
    }
    //game()
    */
    
    const result = document.querySelector('#result');

    const rock = document.querySelector('#rock');
        rock.addEventListener('click', () => {
        playerSelection = 'ROCK'
        result.textContent = singleRound(playerSelection, computerSelection);
    })

    const paper = document.querySelector('#paper');
        paper.addEventListener('click', () => {
        playerSelection = 'PAPER'
        result.textContent = singleRound(playerSelection, computerSelection);
    })

    const scissors = document.querySelector('#scissors');
        scissors.addEventListener('click', () => {
        playerSelection = 'SCISSORS'
        result.textContent = singleRound(playerSelection, computerSelection);
    })
      
    const player_points = document.querySelector('#pp');
    player_points.textContent = playerPoints;
    const comp_points = document.querySelector('#cp');
    comp_points.textContent = computerPoints;
