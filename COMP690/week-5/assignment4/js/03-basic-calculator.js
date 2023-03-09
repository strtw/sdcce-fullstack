
import { add, subtract, multiply, divide } from './modules/calculator.js';

//The Basic Calculator (25 points)

//In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions and modules. 


    function evaluate(){
    let number1 = parseInt(prompt("Enter a number"));

    //Then, prompt the user for a second number and store that in a variable. Convert that to a number.
    let number2 = parseInt(prompt("Enter a second number"));
    
    //and then finally ask them what kind of operation they want to perform,either add, subtract, multiply, or divide. 
    let operation;
    do{
        operation = prompt("Enter an operation to perform (+, -, *, /)");
        calculate(operation, number1, number2);  
    }while(operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/");
         
    //Use a switch statement to evaluate the operation parameter being passed in. 
    //Depending on what it is, perform that operation by calling the appropriate function from the module.

    function calculate(){
        switch(operation){
            case "*":
                alert(add(number1, number2));
                break;
            case "-":
                alert(subtract(number1, number2));
                break;
            case "*":
                alert(multiply(number1, number2));
                break;
            case "/":
                alert(divide(number1, number2));
                break;  
        }
    }
}
evaluate();



