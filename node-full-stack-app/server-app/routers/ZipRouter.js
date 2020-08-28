const express = require('express');
const { ObjectID } = require('mongodb');

const { Zip } = require('../models/Zip');
const { logger } = require('../logger');

const ZipRouter = express.Router();

// collection uri
ZipRouter.route('/')
  .get(async (req, res) => {

    try {
      const zips = await Zip.find(null, null, { skip: 0, limit: 10 });
      res.json(zips);
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }

  })
  .post(async (req, res) => {

    try {

      const newZip = new Zip(req.body);
      const savedZip = await newZip.save();

      res.json(savedZip);

    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }

  });

// member uri
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
  
  })
  .put(async (req, res) => {

    try {
      await Zip.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(204);
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }

  })
  .delete(async (req, res) => {

    try {
      await Zip.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }

  });

module.exports.ZipRouter = ZipRouter;