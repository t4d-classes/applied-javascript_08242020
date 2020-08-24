
const nums = [1,2,3,4,5];

console.log( Math.max(...nums, 0) );


const doIt = (a, b, ...c) => {

  console.log(a, b, c);

};

doIt(nums);