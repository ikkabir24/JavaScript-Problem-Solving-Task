// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

const removeDuplicates = (arr) => {
    let aladaJinish = [];

    for (let i = 0; i < arr.length; i++) {
        if (!aladaJinish.includes(arr[i])) {
            aladaJinish.push(arr[i]);
        }
    }

    return aladaJinish;
}
