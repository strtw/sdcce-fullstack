/*The “Grade Assigner” Application

Usage: Use else if or switch statements

Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.

*/

let number = 0;
let message;

while(number < 1 || number > 100){
    number = parseInt(prompt("Please enter a number between 1 and 100"));
}

switch(true){
    case number < 60:
        message = "You received an F";
        break;
    case number >= 60 && number <= 69:
        message = "You received a D";
        break;
    case number >= 70 && number <= 79:
        message = "You received a C";
        break;
    case number >= 80 && number <= 89:
        message = "You received a B";
        break;
    case number >= 90 && number <= 100:     
        message = "You received an A";
        break;
}

console.log(message);