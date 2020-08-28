const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const { DB_USER, DB_PASS, DB_CLUSTER_HOST, PORT } = process.env;

const sampleTrainingUri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER_HOST}/sample_training?retryWrites=true&w=majority`;
global.sampleTrainingConn = mongoose.createConnection(sampleTrainingUri, { useNewUrlParser: true, useUnifiedTopology: true });

const appToolsUri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER_HOST}/app-tools?retryWrites=true&w=majority`;
global.appToolsConn = mongoose.createConnection(appToolsUri, { useNewUrlParser: true, useUnifiedTopology: true });

const { logger } = require('./logger');
const { ZipRouter } = require('./routers/ZipRouter');
const { createRestRouter } = require('./routers/RestRouter');
const { Car } = require('./models/Car');
const { Color } = require('./models/Color');

process.on('exit', () => {
  logger.info('existing server...');
  global.sampleTrainingConn.close();
  global.appToolsConn.close();
});

const app = express();

app.use(bodyParser.json());

app.use('/api/zips', ZipRouter);
app.use('/api/colors', createRestRouter(Color));
app.use('/api/cars', createRestRouter(Car));
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

