// STEP 1
//Convert the following highlighted identifiers to Camel Case notation:

/*
let someMonth
function theMonth()
let currentMonth
let summerMonth
let myLibraryFunction
*/

// STEP 2
//Give an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
/*
10
"Hello World"
true
null
*/

// STEP 3
//Give two examples of complex/variable expressions.
/*
let x = 10;
const y = x + 20;
*/

//STEP 4
//Declare (but do not assign) 9 variables for the following identifiers: 
//First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
/*
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let strZipCode;
let intYourAge;
let strReferralSource;
let boolMayWeContactYou;
*/

//STEP 5
//Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
/*
const intHouseNumber = 1234;
let strFirstName = "Stu";
let strAddress = `${intHouseNumber} Fake Street`;
let strCity = "San" + "Diego";
*/

//STEP 6
//Create a variable.
//Add a number and a string and display the coerced result in the browser’s console window.
/*
let x = 10;
let y = "20";
console.log(x + y);
*/

//STEP 7
//Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result.
//For the second variable, add a number and a Boolean and display the coerced result.

/*
let x = true + "";
console.log(x);
let y = 10 + false;
console.log(y);
*/

//STEP 8
//Is the following string literal valid? If not, how would you fix it?

//It is not valid, the I'm should be escaped with a backslash (fixed below)

//let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
//console.log(someString)

//STEP 9
//Create a variable that produces a null value in the console window.
//Then, create a variable that produces an undefined value in the console window.
/*
let x = null;
console.log(x);
let y;
console.log(y);
*/

//STEP 10
//Use the unary typeof operator on various literals to return the following types within the console window: 
//string, number, Boolean, object, and undefined.

/*
console.log(typeof "Hello World");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof {});
console.log(typeof house);
*/

//STEP 11
//Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

//window.alert("Hello " + "Stu Wood" + ", welcome to the JavaScript class!")

//STEP 12
//Declare a variable called name and set it equal to your name.
//Substitute your name in the previous alert string with the variable instead.

/*
const myName = "Stu Wood";
window.alert("Hello " + myName + ", welcome to the JavaScript class!");
*/

//STEP 13
//Declare a variable called course and set it equal to “JavaScript”.
//Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
//Because these are separate exercises I'm redeclaring the variable here, but normally would not. 
/*
const course = "JavaScript";
const myName = "Stu Wood";
window.alert("Hello " + myName + ", welcome to the " + course + " class!");
*/

//STEP 14
//Rework the above string so that a line break is added right before the word “Welcome”. 

//window.alert("Hello " + myName + ".\n" + "Welcome to the " + course + " class!");

//STEP 15
//Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
/*
let userName = prompt("What is your name?");
window.alert("Hello " + userName + ".\n" + "Welcome to the " + course + " class!");
*/

//STEP 16
//Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
/*
let userName = prompt("What is your name?");
let course = prompt("What class are you taking?");
window.alert("Hello " + userName + ".\n" + "Welcome to the " + course + " class!");
*/

//STEP 17
//Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window.

/*
let x = 10;
let y = 20;
console.log(x + y);
*/

//STEP 18
//Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.
/*
let x = 20;
x += 20;
console.log(x);
*/

//STEP 19
//Declare a variable called x and assign it a value of 20.
//Multiply and assign 5 to that variable and display the result in the console window.
//The result should be 100.
/*
let x = 20;
x *= 5;
console.log(x);
*/

//STEP 20
//Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2. If you got 6.66 try again.
/*
let x = 20 % 3;
x /= 1;
console.log(x);
*/

//STEP 21
//Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
//console.log(10 > 0 || 10 !== 10);

//STEP 22
//Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. 
//The application cannot use the same operators used in the previous application.
//console.log(10 <= 1 && 10 === 10);