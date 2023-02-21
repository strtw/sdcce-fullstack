/*
The Word Translator

 Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr").
 If they enter one of the four codes, display the translated version of "Hello World" for the given language 
 within the console window. If the user enters anything but those four language codes, the application 
 should default to English. The result should be (for example):

Hello World translated in French is: Bonjour le monde

*/

let langCode = prompt("Please enter a language code: \n es, de, en, or fr");
let translation; 
switch(langCode){
    case "es":
    translation = "Hola Mundo";
    break;
    case "de":
    translation = "Hallo Welt"; 
    break;
    case "en":
    translation = "Hello World";
    break;
    case "fr":
    translation = "Bonjour le monde";
    break;
    default: translation = "Hello World";
}

console.log(translation);