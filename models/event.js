const db = require('../config/connection');

function getAll() {
  return db.any(`
    SELECT * FROM events
    `);
}

module.exports = {
  getAll
}
