'use strict';

const randomDelay = () => Math.floor(Math.random() * 1000) + 1000;

const myFetch = (url) => {

  return new Promise(resolve => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
    
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText));
      }
    
    });
    
    xhr.open('GET', url);
    xhr.send();

  });

};


// Exercise

// Create a function named 'myFetch' using the XHR code above to implement the following
// API call

// myFetch('http://localhost:5050/colors').then(colors => console.log(colors));

// Promise.all([
//   fetch('http://localhost:5050/colors').then(res => res.json()),
//   fetch('http://localhost:5050/cars').then(res => res.json())
// ]).then(results => {
//   console.log(results);
// });

// fetch('http://localhost:5050/colors')
//   .then(res => res.json())
//   .then(colors => console.log(colors))
//   .then(() => fetch('http://localhost:5050/cars'))
//   .then(res => res.json())
//   .then(cars => console.log(cars));

const getData = async () => {

  const res = await fetch('http://localhost:5050/colors');
  const colors = await res.json();
  console.log(colors);

  const res2 = await fetch('http://localhost:5050/cars');
  const cars = await res2.json();
  console.log(cars);

};

getData().then(() => console.log('all done'));