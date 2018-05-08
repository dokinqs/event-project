const apiRouter = require('express').Router();
const apiController = require('../controllers/apiController');

apiRouter.route('/')
  .get(apiController.getAll);

module.exports = apiRouter;
