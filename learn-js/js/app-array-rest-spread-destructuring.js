
const highNums = [9,10,11,12];

const nums = [1,2,3,4,5,6,7,8, ...highNums /* array spread operator */ ];

// array destructuring
const [ first, second, ,fourth, ...others /* array rest operator */ ] = nums;

console.log(first);
console.log(second);
console.log(fourth);
console.log(others);
