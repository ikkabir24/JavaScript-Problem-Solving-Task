// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

const factorial = (num) => {
    let factorealDemo = 1;

    for (let i = 1; i <= num; i++) {
        factorealDemo = factorealDemo * i;
    }

    return factorealDemo;
}