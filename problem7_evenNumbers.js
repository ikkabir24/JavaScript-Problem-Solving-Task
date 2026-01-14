// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

const filterEvenNumber = (arr) => {
    let evenNumb = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 === 0){
            evenNumb.push(arr[i])
        }
    }
    return evenNumb;
}