/*
The Rock, Paper, Scissors Game (20 points)

Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.

Our code will break the game into 3 phases:
*/

//Begin by prompting the user for their choice.
//What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

function rockPaperScissors(){
    let userChoice;
    do {
      userChoice = prompt("Please enter rock, paper, or scissors");
      userChoice = userChoice?.toLowerCase(); // optional chaining operator to handle null/undefined values
    } while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' && userChoice !== null);
    
    
    //Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. 
    let computerChoice = Math.round(Math.random() * 2);
    
    let alertMessage;
    
    //Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
    if(computerChoice === 0){
        computerChoice = 'rock';   
    }else if(computerChoice === 1){
        computerChoice = 'paper';
    }else{
        computerChoice = 'scissors';
    }
    
    //A conditional that determines who wins.
    //Create a conditional statement that checks the user’s choice in relation to the computer’s choice. 
    if(userChoice === computerChoice){ //What if the result ends in a tie? Figure out how to handle that as well.
        alertMessage = "It's a tie";
    }else if(userChoice === 'rock'){    
        if(computerChoice === 'paper'){
            alertMessage = "Computer wins";
        }else{  
            alertMessage = "User wins";     
        }
    }else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            alertMessage = "Computer wins";
        }else{          
            alertMessage = "User wins"; 
        }
    }else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){  
            alertMessage = "Computer wins";
        }else{      
            alertMessage = "User wins";
        }                           
    }else{      
        alertMessage = "Invalid choice";    
    }

    //Once a winner is defined, display a message within an alert box indicating who the winner is.
    alert(alertMessage);
    
   
   let playAgain = prompt("Do you want to play again? (y/n)");
    playAgain = playAgain?.toLowerCase(); // optional chaining operator to handle null/undefined values 
    if(playAgain === 'y'){
        rockPaperScissors();
    }
}

rockPaperScissors();

