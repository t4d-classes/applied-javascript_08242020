
const nums = [1,2,3,4,5];

// for (let x=0; x<nums.length; x++) {
//   // side effect
//   console.log(nums[x]);
// }

// improper attempt to be declarative
// nums.map(num => console.log(num));

// declaratively correct, semantic purpose of forEach is to perform a side effect
nums.forEach(num => console.log(num));

// imperative
// const doubleNums = [];
// for (let x=0; x<nums.length; x++) {
//   doubleNums.push(nums[x] * 2);
// }

// declarative
const doubleNums = nums.map(num => num * 2);

console.log(doubleNums);