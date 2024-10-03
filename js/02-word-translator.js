// Prompt the user to input a language code
let languageCode = prompt("Enter a language code (es, de, en, fr):").toLowerCase()

// Initialize a variable to store the translated message
let message;

// Use conditional statements to translate "Hello World" based on the user prompt language code
if (languageCode === "es") {
    message = "Hola Mundo"
} else if (languageCode === "de") {
    message = "Hallo Welt" 
} else if (languageCode === "fr") {
    message = "Bonjour le monde"
} else {
    message = "Hello World"
}

// Display the translated message in the console
console.log(`Hello World translated in ${languageCode} is: ${message}`)
