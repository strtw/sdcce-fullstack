
//This module will have a private function called calculate and expose four different functions (add, subtract, multiply, and divide). 

// ADD A PRIVATE FUNCTION CALLED CALCULATE

function calculate(operation, a, b) {
    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '-':
        return a * b;
      case '/':
        return a / b;
      default:
        alert('Invalid operation: ' + operation);
    }
  }
  
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////

// ADD FUNCTION
function add(num1, num2){  
    return calculate("+",num1,num2); 
}

// SUBTRACT FUNCTION
function subtract(num1, num2){
    return calculate("-",num1,num2);
}


// MULTIPLY FUNCTION
function multiply(num1, num2){
    return calculate("*",num1,num2);
}

// DIVIDE FUNCTION
function divide(num1, num2){     
    return calculate("/",num1,num2);
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide};