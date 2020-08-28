const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();

const { logger } = require('./logger');

const { DB_USER, DB_PASS, DB_CLUSTER_HOST, PORT } = process.env;

const sampleTrainingUri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER_HOST}/sample_training?retryWrites=true&w=majority`;
global.sampleTrainingConn = mongoose.createConnection(sampleTrainingUri, { useNewUrlParser: true, useUnifiedTopology: true });

process.on('exit', () => {
  logger.info('existing server...');
  global.sampleTrainingConn.close();
});

const app = express();

app.use(
  '/', /* route */
  express.static('./public'), /* middleware function */
);

app.listen(PORT, (err) => {

  if (err) {
    logger.error('Error: ' + err);
    return;
  }

  logger.info(`server listening on port ${PORT}`);

});

