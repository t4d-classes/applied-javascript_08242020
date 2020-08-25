'use strict';

const randomDelay = () => Math.floor(Math.random() * 1000) + 1000;

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

  if (xhr.status === 200 && xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }

});

xhr.open('GET', 'http://localhost:5050/colors');
xhr.send();

// Exercise

// Create a function named 'myFetch' using the XHR code above to implement the following
// API call

myFetch('http://localhost:5050/colors').then(colors => console.log(colors));