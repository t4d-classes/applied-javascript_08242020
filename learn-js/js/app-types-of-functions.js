
console.log(add(1,3)); // valid code

// function declaration
function add(a,b) {
  return a + b;
}

console.log( add(1, 2) /* invocation of a function */ );


// function expression
const add2 = function(a,b) {
  return a + b;
};

console.log(add2(1,3)); // valid code

// arrow function
const add3 = (a,b) => a + b;

const add4 = (a,b) => {
  return a + b;
};

const inc = x => x++;


console.log(add3(1,7)); // valid code
