'use strict';

function doIt() {
  console.log(this);

  // const that = this;

  // function inner() {
  //   console.log(that);
  // }

  // lexical-this
  const inner = () => {
    console.log(this);
  }

  inner();
}

const o = {
  id: 2, doIt: doIt,
};

o.doIt();

