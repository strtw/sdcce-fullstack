// Solve the following string/math/number/function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.

// Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
(function sortString(str) {
    console.log(str.split('').sort().join(''));
})('webmaster')

// Sample Data and Output
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
 

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
(function upperCase(str) {  
  const split = str.split(' ');
  const upper = split.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  console.log(upper.join(' '));
})('the quick brown fox')   
   

// Sample Data and Output
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'
 

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
(function vowelCount(str) { 
    const vowels = str.match(/[aeiou]/gi);
    console.log(vowels.length);
})('The quick brown fox')
// Sample Data and Output
// Example string: 'The quick brown fox'
// Expected Output: 5
 

// Write a JavaScript function that generates a string id (specified length) of random characters.
(function randomString(length) {
    let result = '';
    for(let i = 0; i < length; i++) {
        const randomFlag = Math.floor(Math.random() * 2); // 0 or 1
        const randomCharCode = Math.floor(Math.random() * 36); 
        const offset = randomCharCode < 26 ? 97 : 48; // if the char code is less than 26, it's a letter, otherwise it's a number
        result += randomFlag ? String.fromCharCode(randomCharCode + offset).toUpperCase() : String.fromCharCode(randomCharCode + offset);
    }
    console.log(result);
})(5)


// Sample Data and Output
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
 

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

(function longestCountryName(countries) {   
    const longest = countries.reduce((a, b) => a.length > b.length ? a : b);
    console.log(longest);
})(["Australia", "Germany", "United States of America"])

// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"