'use strict';

class Person {

  static create(fullName) {
    return new Person(...fullName.split(' '));
  }

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  getFullName() {
    return this.firstName +  ' ' + this.lastName;
  }

}

console.log(Person.create('Timmy Johnson'));

class Student extends Person {

  constructor(studentId, firstName, lastName) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  getRecordInfo() {
    return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
  }
}

const student = new Student(1, 'Sally', 'Thompkins');
console.log(student.getRecordInfo());
console.log(student.getFullName());
console.dir(student);

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person2.prototype.getFullName = function() {
  return this.firstName +  ' ' + this.lastName;
};

function Student2(studentId, firstName, lastName) {
  this._super(firstName, lastName);
  this.studentId = studentId;

}

// extends
Student2.prototype = Object.create(Person2.prototype);
Student2.prototype.constructor = Student2;
Student2.prototype._super = Person2;

Student2.prototype.getRecordInfo = function() {
  return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
};

const student2 = new Student2(1, 'Sally', 'Thompkins');
console.dir(student2);



console.dir(Person);
console.dir(Person2);