
const readline = require('readline');

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


