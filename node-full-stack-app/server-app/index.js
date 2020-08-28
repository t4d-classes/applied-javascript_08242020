const express = require('express');

require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(
  '/', /* route */
  express.static('./public'), /* middleware function */
);

app.listen(PORT, (err) => {

  if (err) {
    console.log('Error: ' + err);
    return;
  }

  console.log(`server listening on port ${PORT}`);

});

