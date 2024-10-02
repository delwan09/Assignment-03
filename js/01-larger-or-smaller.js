// Get the first integer input from the user
let num1 = parseInt(prompt("Enter the first integer:"));

// Get the second integer input from the user
let num2 = parseInt(prompt("Enter the second integer:"));

// Compare the two numbers and display the larger one or if they are equal
if (num1 > num2) {
    document.write("The larger number is: " + num1);
} else if (num1 < num2) {
    document.write("The larger number is: " + num2);
} else {
    document.write("Both numbers are equal.");
}
