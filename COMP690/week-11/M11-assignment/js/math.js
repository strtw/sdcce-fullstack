// Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
(function positiveNumber() {
    const num = prompt('Enter a number')
    console.log(Math.abs(num));
})();


// Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
(function roundUp() {
    do {
        var num = prompt('Enter a decimal number')
    } while (isNaN(num))
    console.log(Math.ceil(num));
})();

// Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
(function roundDown() {
    do {
        var num = prompt('Enter a decimal number')
    } while (isNaN(num))
    console.log(Math.floor(num));
})();

// Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
(function largestAndSmallest() {
    const nums = prompt('Enter 5 numbers separated by commas').split(',')
    console.log(Math.max(...nums));
    console.log(Math.min(...nums));
})();


// Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.
(function squareRoot() {
    const num = prompt('Enter a number')
    console.log(Math.sqrt(num));
})();
