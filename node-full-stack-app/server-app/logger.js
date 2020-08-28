const winston = require('winston');

const { LOG_LEVEL, NODE_ENV } = process.env;

// Node 14 - ES2020
const logLevel = LOG_LEVEL ?? 'error';
const nodeEnv = NODE_ENV ?? 'production';

// Node 12 - ES2019
// const logLevel = (LOG_LEVEL == null) ? 'error' : LOG_LEVEL;
// const nodeEnv = (NODE_ENV == null) ? 'production' : NODE_ENV;

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.json(),
  defaultMeta: { service: 'rest-app' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (nodeEnv !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}