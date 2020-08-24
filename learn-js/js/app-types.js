
let t;

console.log(typeof t);

t = 'hello!';
console.log(typeof t);

t = 2;
console.log(typeof t);

t = 2n;
console.log(typeof t);

t = false;
console.log(typeof t);

t = Symbol('test');
console.log(typeof t);

t = null;
console.log(typeof t);

t = { id: 1, name: 'Bob' }; // object literal
console.log(typeof t);

// t = new Array(1,2,3,4);
t = [1,2,3,4] // array literal
console.log(typeof t);
console.log(t instanceof Array);

t = new Date();
console.log(typeof t);
console.log(t instanceof Date);

t = () => {};
console.log(typeof t);
