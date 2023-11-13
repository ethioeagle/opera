// Get two numbers from the user
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

// Check if the input is valid
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
} else {
    // Add the two numbers
    var sum = num1 + num2;

    // Display the result
    console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
}

