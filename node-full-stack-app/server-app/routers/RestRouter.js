const express = require('express');
const { ObjectID } = require('mongodb');

const { logger } = require('../logger');

module.exports.createRestRouter = (Model) => {

  const RestRouter = express.Router();

  // collection uri
  RestRouter.route('/')
    .get(async (req, res) => {

      try {
        const resources = await Model.find(null, null, { skip: 0, limit: 10 });
        res.json(resources);
      } catch (err) {
        logger.error(err);
        res.sendStatus(500);
      }

    })
    .post(async (req, res) => {

      try {

        const newResource = new Model(req.body);
        const savedResource = await newResource.save();

        res.json(savedResource);

      } catch (err) {
        logger.error(err);
        res.sendStatus(500);
      }

    });

  // member uri
  RestRouter.route('/:id')
    .get(async (req, res) => {

      try {

        if (!ObjectID.isValid(req.params.id)) {
          logger.error('resource id is invalid: ' + req.params.id);
          res.sendStatus(400);
          return;
        }

        const resource = await Model.findById(req.params.id);

        if (resource == null) {
          logger.error('resource with id ' + req.params.id + ' was not found');
          res.sendStatus(404);
          return;
        }

        res.json(resource);

      } catch (err) {
        logger.error(err);
        res.sendStatus(500);
      }    
    
    })
    .put(async (req, res) => {

      try {
        await Model.updateOne({ _id: req.params.id }, req.body);
        res.sendStatus(204);
      } catch (err) {
        logger.error(err);
        res.sendStatus(500);
      }

    })
    .delete(async (req, res) => {

      try {
        await Model.deleteOne({ _id: req.params.id });
        res.sendStatus(204);
      } catch (err) {
        logger.error(err);
        res.sendStatus(500);
      }

    });

  return RestRouter;

};
