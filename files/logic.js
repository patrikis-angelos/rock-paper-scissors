let computerChoice;
let playerChoice;
let numberOfRounds = 3;
let playerScore = 0;
let computerScore = 0;

let player = document.getElementById("choice");

function Game(rounds)
{
    if (playerScore + computerScore < rounds)
    {
        computerChoice = ComputerPlay();
        playerChoice = player.value;
        playerChoice = playerChoice.toLowerCase();

        console.log(playerChoice + " vs " + computerChoice);
        CheckDraw();
    }

    if (playerScore + computerScore === rounds)
    {
        ShowResults();
        ResetScore();
    }
}

function ShowResults()
{
    console.log(playerScore + " - " + computerScore);
    (playerScore > computerScore)?console.log("Winner!!"):console.log("You can try again");
}

function ResetScore()
{
    playerScore = 0;
    computerScore = 0;
}

function CheckDraw()
{
    if (computerChoice === playerChoice)
    {
        console.log("Draw");
    }
    else
    {
        CheckWinner();
    }
}

function CheckWinner()
{
    switch (playerChoice)
    {
        case "rock":
            (computerChoice === "scissors")?Win():Lose();
            break;
        case "paper":
            (computerChoice === "rock")?Win():Lose();
            break;
        case "scissors":
            (computerChoice === "paper")?Win():Lose();
            break;
        default:
            console.log("Non Valid Choice");
            break;
    }
}

function Win()
{
    playerScore += 1;
    console.log("You Win!");
}

function Lose()
{
    computerScore += 1;
    console.log("You Lose :(");
}

function ComputerPlay()
{
    let randomPick = Math.floor(PickRandom(3));
    let choice;
    switch (randomPick)
    {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("Invalid Choice");

    }
    return choice;
}

function PickRandom(number)
{
    return Math.random()*number;
}