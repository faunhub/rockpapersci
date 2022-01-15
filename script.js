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

function game(){
    
    let playerSelection = this.textContent;
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    let result = playRound(playerSelection, computerSelection);
        
    if (result == 1) {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
    } else if (result == -1) {
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
    } else if (result == 0){
        comp.src = "images/tie.png";
        setTimeout(() => comp.src="images/make_choice.gif", 500);
    }
    console.log ('Player: ' + playerScoreCount);
    console.log ('Computer: ' + computerScoreCount);
}

function start(){
    playing = true;
    playerScoreCount =0;
    computerScoreCount =0;
    comp.src = "images/computer_default.png";
}


const player = document.querySelectorAll('.choice');
const comp = document.querySelector('.computer');
const restart = document.querySelector('.restart');
let playing = false;
comp.addEventListener('click', start);
comp.addEventListener('click', () => comp.src = "images/make_choice.gif");
restart.addEventListener('click', start);

player.forEach(choice => choice.addEventListener('click', game));
let playerScoreCount =0;
let computerScoreCount =0;
let playerScore = document.getElementById('playerScore');
let computerScore =document.getElementById('computerScore');






