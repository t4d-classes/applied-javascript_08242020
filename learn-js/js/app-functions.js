
// const display = msg => {


//   console.dir( msg('hello') );
// }

// display( (greeting => greeting + '!!!!') );


// setTimeout(function() {
//   console.log('a');
// }, 1000);

const doIt = x => {

  return (y) => {
    return x * y;
  };

};

const test = doIt(3);

console.log( test(5) );