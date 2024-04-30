let arry = ["rock", "paper", "scissors"];
function getComputerChoice() {
   let ComputerChoice = arry[(Math.floor(Math.random() * arry.length))];
   return ComputerChoice;
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?");
    return choice.toLocaleLowerCase();
}
let humanScore = 0, computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
if (humanChoice == computerChoice)
    console.log("tie");
    else if (humanChoice == "rock")
        if (computerChoice == "paper")
            {console.log("paper beats rock,loser");
             computerScore += 1; 
            }
        else 
        {
            console.log("rock beats scissors you won")
            humanScore += 1;
        }
    else if (humanChoice == 'paper')
        if(computerChoice == 'rock')  
        {
            console.log("paper beats rock you won");
            humanScore += 1;
        }
        else 
        {
        console.log("you lose, loser");
        computerScore += 1;
        }
    else if (humanChoice == "scissors")
        if (computerChoice == "paper")
        {
        console.log("you win scissors beat paper");
        humanScore += 1;
        }
        else 
        {
        console.log("you lose,loser");
        computerScore += 1;
        }
      
        
/* console.log("the computer choose: ", computerChoice);
console.log("you choose", humanChoice);
console.log("human score = " ,humanScore);
console.log("computer score = ", computerScore); */

}
function playGame() {
    for(let i = 0; i < 5; i++)
    {
        playRound();
    }
    if(humanScore == computerScore)
    console.log("tie");
    else if (humanScore > computerScore)
    console.log("you won");
else 
console.log("loser");
console.log("computer got :", computerScore);
console.log("you got: ", humanScore);

}