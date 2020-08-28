const express = require('express');

const app = express();

app.use(
  '/', /* route */
  express.static('./public'), /* middleware function */
);

app.listen(3050, (err) => {

  if (err) {
    console.log(err);
    return;
  }

  console.log('server listening on port 3050');

});

