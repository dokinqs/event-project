const db = require('../config/connection');

function getAll() {
  return db.any(`
    SELECT * FROM events
    `);
}

function getOne(id) {
  return db.one(`
    SELECT * FROM events
    WHERE id = $1
    `, id);
}

module.exports = {
  getAll,
  getOne
}
