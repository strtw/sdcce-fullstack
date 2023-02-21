/* 

Larger or Smaller?

Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. 
Then, display only the larger of the two within the browser window. 
Don’t forget to handle the fact that the two could be equal.

*/

let num1 = prompt("enter a number");
let num2 = prompt("enter another number");

while(num1 === num2){
    num2 = prompt("please enter a different number");
}

document.write(num1 > num2 ? num1 : num2);