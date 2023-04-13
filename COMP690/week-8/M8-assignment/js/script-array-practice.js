//Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
let movieArray = ["The Sandlot", "Shawshank Redemption", "Oh brother where art thou", "Happy Gilmore", "Bill and Ted's Excellent Adventure"];

//Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
let movies = new Array(5);

//Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
movies[0] = movieArray[0];
movies[1] = movieArray[1];
movies[2] = movieArray[2];
movies[3] = movieArray[3];
movies[4] = movieArray[4];

//Then, use the console to display the first movie in your array.
console.log(movies[0]);


//Copy your code from step 2. Add a new movie into the 3rd position within your array. 
movies.splice(2, 0, "TMNT");

//Then, use the console to display the length of the array.
console.log(movies.length);

//Declare an array called movies using literal notation. 
 movies = [];
//Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
movies[0] = movieArray[0];
movies[1] = movieArray[1];
movies[2] = movieArray[2];
movies[3] = movieArray[3];
movies[4] = movieArray[4];

//Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
delete movies[0];
console.log(movies);

//Declare an array called movies using literal notation. 
 movies = [];

//Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
movies[0] = movieArray[0];
movies[1] = movieArray[1];
movies[2] = movieArray[2];
movies[3] = movieArray[3];
movies[4] = movieArray[4];
movies[5] = "Ace Ventura";
movies[6] = "The Mask";


//Now, use a for/in loop to iterate through the array and display each movie within the console window.
for(let i in movies){   
    console.log(movies[i]);
}

//Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
for(let i of movies){
    console.log(i);
}

//Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
for(let i of movies.sort()){
    console.log(i);
}

//Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. 
let leastFavMovies = ["Twilight 3", "Ninja Turtles 3", "Jaws 3"];

//Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

console.log("Movies I like:");  
console.log("");
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log("...");
console.log("");
console.log("Movies I regret watching:");
console.log("");
console.log(leastFavMovies[0]);
console.log(leastFavMovies[1]);
console.log(leastFavMovies[2]);
console.log("...");


//Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
movies = movies.concat(leastFavMovies);
console.log(movies.reverse());

//Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
console.log(movies[movies.length - 1]);

//Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
console.log(movies.shift());

//Programmatically retrieve the movies in your array that you do not like and return their indices. 
let indices = [leastFavMovies.indexOf("Twilight 3"), leastFavMovies.indexOf("Ninja Turtles 3"), leastFavMovies.indexOf("Jaws 3")];


//Then, using those indices, programmatically add movies that you do like.
let newMovies = ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"];
for(let i of indices){
    movies.splice(indices[i], 1, newMovies[i]);
}

//Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:

movies = [["The Matrix", 1], ["The Matrix Reloaded", 2], ["The Matrix Revolutions", 3], ["The Sandlot", 4], ["Shawshank Redemption", 5]];


//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
let movieNames = movies.filter(function(movie){ 
    return typeof movie[0] === "string";        
});

//Create a string array called employees using literal notation and populate the array with several employee names. 
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

//Then, create an anonymous function called showEmployee. The function should accept a parameter.
//Call this function, passing in the employees array into the function as a parameter. 
//Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

//Employees:

/*
"ZAK"
"JESSICA"
"MARK"
"FRED"
"SALLY"

*/
let showEmployee = function(employees){  
    for(let i of employees){
        console.log(`"${i}"`, "\n"); 
    }
    
};

showEmployee(employees);

//Write a JavaScript function to filter false, null, 0 and blank values from an array.
function filterValues(arr){
    return arr.filter(function(value){
        return value !== false && value !== null && value !== 0 && value !== "";
    });
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//Expected Result: [58, "abcd", true]

//Write a JavaScript function to get a random item from an array. 
//So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
function getRandomItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomItem([1, 2, 3, 4, 5]));

//Write a JavaScript function to get the largest number from a numeric array.
function getLargestNumber(arr){
    return Math.max(...arr);
}
console.log(getLargestNumber([1, 2, 3, 4, 5]));