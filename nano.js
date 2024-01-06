
const readline = require('readline');
const open = require('open');

let payCode = "09090";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Your paycode: ', (userInput) => {
    if (userInput === payCode) {
        console.log("Software access granted on your Instagram account.");
    } else if (" UPI payment is successful, you may need to implement this logic ") {
        console.log("Check your UPI services. Payment successful Or Not!");
    } else {
        console.error("Error: Your device is not permitted. Please contact support.");
    }

    rl.close();
});

// index.js


// Check your condition here, for example, if a certain variable is true
// Replace the condition with your specific logic
const condition = true;

if (condition) {
    // Open a new window with the specified URL
    open('https://06c7cf52-b4bd-439a-8b00-b904264742c2-00-18islfmh8w8su.sisko.replit.dev/');
} else {
    // Show an alert if the condition is not met
    console.log('Condition not met!');
}

