
const addressPropName = 'home address';

const firstName = 'Bob';

// object literal
const person = {
  // key:string, value:anything
  // firstName: firstName,
  firstName, // shorthand property
  lastName: 'Smith',
  [ addressPropName ]: '123 Oak Lane',

  _netWorth: 20000,

  get netWorth() {
    return this._netWorth;
  },

  set netWorth(value) {
    this._netWorth = value;
  },

  // getFullName: function() {
  getFullName() { // shorthand function property
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.getFullName());

console.log(person.netWorth);
console.log(person._netWorth);
person.netWorth = 200;
console.log(person.netWorth);
console.log(person._netWorth);


person.age = 32;

delete person.lastName;

console.log(person);

console.log( person[addressPropName] );


// console.log(JSON.stringify({
//   firstName: 'Bob',
//   lastName: 'Smith',
// }));