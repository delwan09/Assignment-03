// Step 1: Collect a number between 1 and 100 from the user
let score = parseInt(prompt("Enter a score between 1 and 100:"))

// Step 2: Check if the number is within the valid range (1-100)
if (score < 1 || score > 100 || isNaN(score)) {
    console.log("Only numbers between 1 and 100 are accepted.")
} else {
    // Step 3: Assign a grade based on the score using a switch statement
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("You received an A")
            break
        case (score >= 80 && score <= 89):
            console.log("You received a B")
            break
        case (score >= 70 && score <= 79):
            console.log("You received a C")
            break
        case (score >= 60 && score <= 69):
            console.log("You received a D")
            break
        default:
            console.log("You received an F")
            break
    }
}

