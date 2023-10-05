function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
//1. Loop through the array.
//2. For each element, loop again and add it to all subsequent elements.
//3. If any sum equals the target, return true.
//4. If no pairs add up to the target, return false.

/*
  Add written explanation of your solution here
*/
function hasTargetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === target) {
              return true;
          }
      }
  }
  return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(hasTargetSum([1, 3, 5, 2, 4], 9));  // true (5 + 4)
console.log(hasTargetSum([10, 15, 3, 7], 17)); // true (10 + 7)
console.log(hasTargetSum([4, 5, 1, 8], 3));    // true (1 + 2)

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
function hasTargetSum(arr, target) {
  let numbers = new Set();
  for (let num of arr) {
      if (numbers.has(target - num)) {
          return true;
      }
      numbers.add(num);
  }
  return false;
}

