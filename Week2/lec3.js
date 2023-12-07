const readline = require("readline");

const RLinterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
RLinterface.question("Enter First number ", (num1) => {
  RLinterface.question("Enter Second number ", (num2) => {
    const result = Math.max(Number(num1), Number(num2));
    console.log("The maximum of two numbers is: " + result);
  });
});
