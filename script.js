function computerPlay() {
    const option = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*3);
    return option[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            result.innerText = "you tied.";
            comp.src = "images/rock.png";
            return 0;
        } else if (computerSelection == 'paper') {
            result.innerText = "player lost. paper beats rock.";
            comp.src = "images/paper.png";
            return -1;
        } else {
            result.innerText = "player won. rock beats scissors.";
            comp.src = "images/scissors.png";
            return 1;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result.innerText = "player won. paper beats rock.";
            comp.src = "images/rock.png";
            
            return 1;
        } else if (computerSelection == 'paper') {
            result.innerText = "you tied.";
            comp.src = "images/paper.png";
            return 0;
        } else {
            result.innerText = "player lost. scissors beat paper.";
            comp.src = "images/paper.png";
            
            return -1;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result.innerText = "player lost. rock beats scissors.";
            comp.src = "images/rock.png";
            return -1;
        } else if (computerSelection == 'paper') {
            result.innerText = "player won. scissors beat paper.";
            comp.src = "images/paper.png";
            return 1;
        } else {
            result.innerText = "you tied.";
            comp.src = "images/scissors.png";
            return 0;
        }
    }
}

function game(){
    if (!playing){
        return;
    }  
    let playerSelection = this.textContent;
    let computerSelection = computerPlay();
    let compare = playRound(playerSelection, computerSelection);
    
    if (compare == 1) {
        playerScoreCount++;
        playerScore.firstElementChild.textContent = playerScoreCount;
    } else if (compare == -1) {
        computerScoreCount++;
        computerScore.firstElementChild.textContent = computerScoreCount;
    }
    if (playerScoreCount ==5) {
        result.innerText ="you won!!!";
        comp.src ="images/win.png";
        playing =false;
    } else if (computerScoreCount ==5) {
        result.innerText ="you lost";
        comp.src="images/lose.png";
        playing =false;
    }
}

function start(){
    playing = true;
    playerScoreCount =0;
    computerScoreCount =0;
    playerScore.firstElementChild.textContent = 0;
    computerScore.firstElementChild.textContent = 0;
    comp.src = "images/computer_default.png";
}

const player = document.querySelectorAll('.choice');
const comp = document.querySelector('.computer');
const restart = document.querySelector('.restart');
const result = document.getElementById('result');
let playing = false;
comp.addEventListener('click', start);
comp.addEventListener('click', () => comp.src = "images/make_choice.gif");
restart.addEventListener('click', start);
restart.addEventListener('click', () => playing =false)

player.forEach(choice => choice.addEventListener('click', game));

let playerScoreCount =0;
let computerScoreCount =0;
const playerScore = document.getElementById('playerScore');
const computerScore =document.getElementById('computerScore');








