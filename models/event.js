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

//create event
function create(event) {
  //the if statement if for users who logged in
  //if the users are not logged in they cannot create
  // if (!event.event_id) event.event_id = null;

  return db.one(`
    INSERT INTO events (event, text, img_url, user_id)
    VALUES ($/event/, $/text/, $/img_url/, $/user_id/)
    RETURNING *
    `, event);
}

module.exports = {
  getAll,
  getOne,
  create
}
