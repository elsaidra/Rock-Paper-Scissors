let array = ["rock", "paper", "scissors"];
function getComputerChoice() {
   let ComputerChoice = array[(Math.floor(Math.random() * array.length))];
   return ComputerChoice;
}
let playerChoice;

//adding the div  

const result = document.querySelector('.result');
const whichIsWhich = document.querySelector('.what');


// function getHumanChoice() {
//     let choice = prompt("rock, paper or scissors?");
//     return choice.toLocaleLowerCase();
// }
let humanScore = 0, computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = playerChoice.toLocaleLowerCase();
    computerChoice = getComputerChoice();
if (humanChoice == computerChoice)
    result.textContent = "tie";
    else if (humanChoice == "rock")
        if (computerChoice == "paper")
            {result.textContent = "paper beats rock,loser";
             computerScore += 1; 
            }
        else 
        {
            result.textContent = "rock beats scissors you won"
            humanScore += 1;
        }
    else if (humanChoice == 'paper')
        if(computerChoice == 'rock')  
        {
            result.textContent = "paper beats rock you won";
            humanScore += 1;
        }
        else 
        {
        result.textContent = "you lose, loser";
        computerScore += 1;
        }
    else if (humanChoice == "scissors")
        if (computerChoice == "paper")
        {
        result.textContent = "you win scissors beat paper";
        humanScore += 1;
        }
        else 
        {
        result.textContent = "you lose,loser";
        computerScore += 1;
        }
      
        
whichIsWhich.textContent = "the computer choose: ", computerChoice;
whichIsWhich.textContent = "you choose", humanChoice;
whichIsWhich.textContent = "human score = " ,humanScore;
whichIsWhich.textContent = "computer score = ", computerScore;

}



//ui 
//adding the event listeners

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', event => {
    playerChoice = rock.textContent
    playRound() 
});

paper.addEventListener('click', event => {
    playerChoice = paper.textContent
    playRound()
});


scissors.addEventListener('click', event => {
    playerChoice = scissors.textContent
playRound()
});

