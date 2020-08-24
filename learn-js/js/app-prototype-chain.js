'use strict';



const parent = {
  name: 'parent',
  amt: 2000,
  getName() {
    return this.name;
  },
};

const child = Object.create(parent);
child.name = 'child';
// console.log(child.amt);
// parent.amt = 4000;
// console.log(child.amt);
// child.amt = 100;
// console.log(child.amt);
// delete child.amt;
// console.log(child.amt);
// console.dir(child);
const child2 = Object.create(parent);
child2.name = 'child2';

// what is the value of this going to be?
console.log( parent.getName() );
console.log( child.getName() );
console.log( child2.getName() );

Array.prototype.map = function(transformFn) {

  console.log('look mom no handle bars!');

  const newArr = [];

  for (let x = 0; x<this.length; x++) {
    newArr.push(transformFn(this[x], x, this));
  }

  return newArr;
}

console.log( [1,2,3,4,5].map(n => n * 2) );