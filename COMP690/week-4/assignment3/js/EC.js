//EC PART1:
//If it’s anything other than “y” or “n”, the prompt should simply reappear until the user enters a valid entry.


let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }

    do{
        again = prompt('Run application again? (y or n)', 'y');
    }
    while(again !== 'y' && again !== 'n')
   
} while (again === 'y');
console.log('Application has exited.');

//EC PART 2:
/*
Your job in this part of the assignment is to validate those entries. 
Within investment, the number should be numeric. 
Within rate, the number should be numeric and between 0 and a realistic rate like 6%. 
For years, the number should be numeric and between 1 and 30.
*/

// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
while(isNaN(investment)){
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
}

do{
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
}
while(isNaN(rate) || rate <= 0 || rate >= 6)

do{
    years = parseInt(prompt('Enter the number of years you want to invest for'));
}
while(isNaN(years) || years < 0 || years > 30)



// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);