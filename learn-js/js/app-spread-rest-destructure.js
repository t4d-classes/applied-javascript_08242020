
const person = {
  firstName: 'Bob',
  age: 32,
  getInfo() {
    return this.firstName + ' ' + this.age;
  },
};

const person2 = {
  // firstName: person.firstName,
  // age: person.age,
  ...person, // object spread operator
};

console.log(person);
console.log(person2);

// destructuring
// const firstName = person2.firstName;
const { firstName, ...otherProps /* object rest operator */ } = person2;

console.log(firstName);
console.log(otherProps);