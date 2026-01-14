// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

const capitalizeWords = (str) => {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalizedWord);
  }

  return result.join(" ");
}