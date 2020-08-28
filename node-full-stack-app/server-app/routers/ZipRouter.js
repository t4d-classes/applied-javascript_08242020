const express = require('express');

const { Zip } = require('../models/Zip');
const { logger } = require('../logger');


const ZipRouter = express.Router();

ZipRouter.route('/')
  .get(async (req, res) => {

    try {
      const zips = await Zip.find(null, null, { skip: 0, limit: 10 });
      res.json(zips);
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }

  });

module.exports.ZipRouter = ZipRouter;