// Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. Use the alert method to display the result.
(function nameLength() {
    const name = prompt('Enter your name')
    alert(name.length)
})();

// Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
(function nameLetter() {
    const name = prompt('Enter your name')
    const num = prompt('Enter a number')
    alert(name.charAt(num))
})();

// Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
(function fullName() {
    const firstName = prompt('Enter your first name')
    const lastName = prompt('Enter your last name')
    alert(`Your name is: ${firstName} ${lastName}`)
})();

// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
(function foxIndex() {
    const str = 'The quick brown fox jumps over the lazy dog'
    alert(str.indexOf('fox'))
})();

// Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
(function lastFoxIndex() {
    const str = 'The quick brown fox jumps over the lazy fox'
    alert(str.lastIndexOf('fox'))
})();

// Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
(function replaceName() {
    const str = 'The quick brown fox jumped over the lazy dog'
    const name = prompt('Enter your full name')
    alert(str.replace('the lazy dog', name))
})();

// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
(function searchWord() {
    const str = 'The quick brown fox jumps over the lazy dog'
    const word = prompt('Enter a word')
    alert(str.search(word) !== -1 ?`Word found at ${str.search(word)} index` : 'Word not found')
})();

// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
(function extractString() {
    const input = prompt('Enter a string');
    const oldString = 'The quick brown fox jumps over the lazy dog'
    const stringIndex = oldString.indexOf(input);
    if (stringIndex !== -1) {
        const newString = oldString.substring(stringIndex);
        alert(newString.toUpperCase());
    }else{
        alert('String not found')
    }
})();


// Create an application that stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
(function trimString() {
    const str = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
    alert(str.trim().toLowerCase())
})();

// Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
(function capitalizeString() {
    const str = 'the quick brown fox jumps over the lazy dog'
    alert(str.charAt(0).toUpperCase() + str.slice(1))
})();