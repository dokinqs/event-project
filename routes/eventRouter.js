const eventRouter = require('express').Router();
const eventController = require('../controllers/eventController');
const respController = require('../controllers/responseController');

eventRouter.route('/')
  .get(
    eventController.getAll,
    respController.sendOkResp,
    respController.sendErrResp);

//get one event id
    eventRouter.route('/:id')
      .get(
        eventController.getOne,
        respController.sendOkResp,
        respController.sendErrResp);

module.exports = eventRouter;
