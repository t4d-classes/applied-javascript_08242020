'use strict';

// keyword-style functions use call-site this
function doIt() {
  console.log(this);
}

doIt();

window.doIt();

const o = {
  id: 2, doIt: doIt,
};

o.doIt();

console.log(window.doIt === o.doIt);