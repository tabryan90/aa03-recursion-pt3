/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  if (!arr.length) {
    return [];
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let el1 = arr[i];
    newArr.push(el1);


  }

  console.log(newArr);
}

console.log(flatten([1, [2, [3]]])); // [1, 2, 3]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
