/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

***********************************************************************/

// For Loops
const arrowMirrorArray = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++){
    let ele = array[i];
    newArray.push(ele);
  }
  for (let i = array.length-1; i >= 0; i--){
    let ele = array[i];
    newArray.push(ele);
  }
  return newArray;
}

// const arrowMirrorArray = (array) => {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++){
//     let ele = array[i];
//     newArray.push(ele);
//   }

//   let reversedArray = array.reverse();
//   console.log("Reversed: ", reversedArray)

//   newArray.concat(reversedArray);
//   // newArray.push(reversedArray);

//   return console.log(newArray);
// }

// const arrowMirrorArray = (array) => {
//   let newArray = array.slice(0);

//   return console.log(newArray.concat().reverse(array));
// }

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
