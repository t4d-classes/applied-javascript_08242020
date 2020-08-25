'use strict';

const randomDelay = () => Math.floor(Math.random() * 1000) + 1000;

class Promise {

  constructor(fn) {

    this._resolveFns = [];
    this._rejectFns = [];

    const resolveFn = data =>
      this._resolveFns.forEach(fn => fn(data));
    const rejectFn = data =>
      this._rejectFns.forEach(fn => fn(data));

    fn(resolveFn, rejectFn);
  }

  then(fn) {
    this._resolveFns.push(fn);
  }

  catch(fn) {
    this._rejectFns.push(fn);
  }

}

console.log('task 1: create promise');

const p = new Promise((resolve, reject) => {

  console.log('task 1: call fn passed to promise');

  setTimeout(() => {
    console.log('task 2: call resolve');
    resolve('a');
  }, randomDelay());

});

console.log('task 1: register fn with then');
p.then(result => {
  console.log('task 2: output result');
  console.log(result);
});

console.log('task 1: output');
console.log('here');