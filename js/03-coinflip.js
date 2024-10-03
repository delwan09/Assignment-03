// Step 1: Generate a random number using Math.random() and round it using Math.round()
let coinFlip = Math.round(Math.random()) // 0 for heads, 1 for tails

// Step 2: Prompt the user to choose "Heads" or "Tails"
let choice = prompt("Heads or Tails?").toLowerCase() // Convert input to lowercase for comparison

// Step 3: Use nested conditionals to compare the coin flip result and the user's choice
if (coinFlip === 0) {
    // Coin flip resulted in heads
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!")
    } else if (choice === "tails") {
        alert("The flip was heads but you chose tails...you lose!")
    }
} else {
    // Coin flip resulted in tails
    if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!")
    } else if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!")
    }
}

