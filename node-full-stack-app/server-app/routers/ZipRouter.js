const express = require('express');
const { ObjectID } = require('mongodb');

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

ZipRouter.route('/:id')
  .get(async (req, res) => {

    try {

      if (!ObjectID.isValid(req.params.id)) {
        logger.error('zip object id is invalid: ' + req.params.id);
        res.sendStatus(400);
        return;
      }

      const zip = await Zip.findById(req.params.id);

      if (zip == null) {
        logger.error('zip object with id ' + req.params.id + ' was not found');
        res.sendStatus(404);
        return;
      }

      res.json(zip);

    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }    
  
  });

module.exports.ZipRouter = ZipRouter;