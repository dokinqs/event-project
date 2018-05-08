const Event = require('../models/event');

function getAll(req, res, next) {
  Event.getAll()
    .then(data => {
      res.locals.events = data;
      next();
    }).catch(next);
}

function getOne(req, res, next) {
  Event.getOne(req.params.id)
  .then(data => {
    res.locals.events = data;
    next();
  }).catch(next);
}

module.exports = {
  getAll,
  getOne
}
