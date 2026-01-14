/**Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array. */

const sumOfArray = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}