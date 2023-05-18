//2.
//Create two classes, one called Cat and another called Dog.
// Both classes should be created using constructor syntax. 
//The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.

/*
class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const Dog = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
}
*/

//2.
//Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

/*
const cat1 = new Cat('meow', 3);
const dog1 = new Dog('woof', 5);
*/

//3
//Create a new class using constructor syntax called Animal. 
//Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.
/*
class Animal {
    constructor() {
        console.log('The Animal has been created')
    }   
}
*/

//4.
//Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. 
//The message should be passed into the constructor at the moment that the Animal class is instantiated.

/*
class Animal {
    constructor(name) {
      console.log(`${name} has been created`);
    }
  }
*/

//5.
//Start over and now create a new class using constructor syntax called Animal. 
//Define five properties within your class including properties type, breed, color, height, and length. 
//These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor,
// set the properties, and then pass in the actual values during the object’s instantiation.

/*
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
  }

const dog = new Animal('dog', 'lab', 'black', '2ft', '3ft'); 
*/

//6.
//Use a for-in loop to loop through and display all of the properties in the Animal class. 
//You should see a total of 5 properties displayed in a list within the console window.

/*
for(let property in dog) {
    console.log(property);
}
*/

//7.

//Now, create a public method called speak.
// Within the speak method you will use a conditional to check the type of Animal being created.
// If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

/*
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
    
speak() {
    if (this.type === 'dog') {
      console.log(`The ${this.color} dog is barking!`);
    } else if (this.type === 'cat') {
      console.log(`The ${this.color} cat is meowing!`);
    }
  }
  }
  

const dog = new Animal('dog', 'lab', 'black', '2ft', '3ft');
dog.speak();
const cat = new Animal('cat', 'tabby', 'orange', '1ft', '2ft');
cat.speak();
*/

//8.

//Now, convert all of your properties to private properties. 
//Then, create a private method called checkType(). 
//In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat.
// Then, create a privileged method called speak that returns the value of the checkType() method. 
//The console window should now display “The <animal type> has made a noise!”

/*
class Animal {
    constructor(type, breed, color, height, length) {
      let _type = type;
      let _breed = breed;
      let _color = color;
      let _height = height;
      let _length = length;
  
      let checkType = function () {
        if (_type === "dog") {
          return "dog";
        } else {
          return "cat";
        }
      };
  
      this.speak = function () {
        console.log(`The ${checkType()} has made a noise!`);
      };
    }
  }
  
  const dog = new Animal("dog", "lab", "black", "2ft", "3ft");
  dog.speak(); 
  
  const cat = new Animal("cat", "tabby", "orange", "1ft", "2ft");
  cat.speak(); 
  */
  
//9.
//Create your own String method called findWords that inherits from the native String Object. 
//This method should find all instances of a specific word within a provided paragraph of text.
// It should then alert out to the user the number of time that word was found in the paragraph. 
//Remember, you’ll need to add your method to the String object’s prototype.
/*
String.prototype.findWords = function(inputWord) {
    const words = this.split(" ");
    let count = 0;
  
    for (const word of words) {
      if (word.toLowerCase() === inputWord.toLowerCase()) {
        count++;
      }
    }
  
    if (count > 0) {
      alert(`The word "${inputWord}" was found ${count} time(s) in the paragraph.`);
    } else {
      alert(`The word "${inputWord}" was not found in the paragraph.`);
    }
  };
*/
  
