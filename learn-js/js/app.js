'use strict';

const randomDelay = () => Math.floor(Math.random() * 1000) + 1000;

// window.setTimeout(() => {
//     console.log('a');

//     window.setTimeout(() => {
//         console.log('b');

//         window.setTimeout(() => {
//             console.log('c');
//         }, randomDelay());
      
//     }, randomDelay());

// }, randomDelay());

function allDone() {
  console.log('all done');
}

window.setTimeout(() => {
  console.log('a');
}, randomDelay());

window.setTimeout(() => {
  console.log('b');
}, randomDelay());

window.setTimeout(() => {
  console.log('c');
}, randomDelay());

// Objective: Call the allDone function when all three setTimeout callbacks complete

// Rules:
// 1. The calls to the setTimeout function must all occur in the same task
// 2. The delays are random, and cannot be hard coded
// 3. You may not wrap the allDone in its own setTimeout which some massive delay
// 4. You may NOT use Promises

