'use strict';


const outer = () => {

  let t = 2;
  
  setTimeout(function updateT() {
    t = 4;
  }, 2000);

  return () => {
    console.log(t);
  };

}

const inner = outer();

inner();

setTimeout(function callInner() {
  inner();
}, 4000);

// console.dir(inner);