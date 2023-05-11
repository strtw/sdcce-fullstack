
// Create an application that gets the number of days in a month. Display that result within the console window.
(function daysInMonth(month, year) {
   console.log( new Date(year, month, 0).getDate());
})()

// Create an application that gets the month name from a particular date. Display that result within the console window.
(function monthName() { 
    const date = new Date()
    console.log(date.toLocaleString('default', { month: 'long' }));
})();

// Create an application that tests whether a date is a weekend. Display that result within the console window.

(function isWeekend() { 
    const date = new Date()
    const day = date.getDay()

    console.log(day === 6 || day === 0 ? 'weekend' : 'not weekend')
})();

// Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
(function yesterday() { 
    const date = new Date()
    const day = date.getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   console.log(days[day - 1] || days[6]);
})();

// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
(function currentDay() {    
    const date = new Date()
    const day = date.getDay()
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
   console.log(days[day]);
})();