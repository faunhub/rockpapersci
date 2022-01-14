function computerPlay() {
    const option = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*3);
    return option[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 0;
        } else if (computerSelection == 'paper') {
            console.log('Player lost. Paper beats Rock.');
            return -1;
        } else {
            console.log('Player won. Rock beats Scissors.');
            return 1;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Player won. Paper beats Rock.');
            return 1;
        } else if (computerSelection == 'paper') {
            return 0;
        } else {
            console.log('Player lost. Scissors beat Paper.');
            return -1;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Player lost. Rock beats Scissors.');
            return -1;
        } else if (computerSelection == 'paper') {
            console.log('Player won. Scissors beat Paper.');
            return 1;
        } else {
            return 0;
        }
    }
}

// function game() {
//     let playerScore =0;
//     let computerScore =0;
//     for (let i =1; i<=5; i++){
//         let playerSelection = prompt('Choose rock, paper or scissors >>').toLowerCase();
//         let computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);
        
//         if (result == 1) {
//             playerScore++;
//         } else if (result == -1) {
//             computerScore++
//         } else {
//             console.log('It\'s a tie.');
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log('YOU WON!');
//     } else if (playerScore < computerScore) {
//         console.log('You LOST!');
//     } else {
//         console.log('IT\'S A TIE!');
//     }
// }


function game(){
    let playerSelection = this.textContent;
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    let result = playRound(playerSelection, computerSelection);
        
    if (result == 1) {
        playerScore++;
    } else if (result == -1) {
        computerScore++;
    } else if (result == 0){
        console.log('It\'s a tie.');
    }
    console.log ('Player: ' + playerScore);
    console.log ('Computer: ' + computerScore);
}

function start(){
    playing = true;
    playerScore =0;
    computerScore =0;
    comp.src = "images/make_choice.gif";
    
}

const player = document.querySelectorAll('.choice');
const comp = document.querySelector('.computer');
let playing = false;
comp.addEventListener('click', start);
player.forEach(choice => choice.addEventListener('click', game));
let playerScore =0;
let computerScore =0;






