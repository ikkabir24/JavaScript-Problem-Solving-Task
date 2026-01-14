// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

const findMaxNumber = (arr) => {
    let theMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > theMax) {
            theMax = arr[i];
        }
    }

    return theMax;
}