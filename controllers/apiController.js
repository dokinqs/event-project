const Api = require('../models/api');

function getAll(req, res, next) {
  Api.getAll()
    .then(data => {
      res.locals.apis = data;
      next();
    }).catch(next);
}

module.exports = {
  getAll
}
