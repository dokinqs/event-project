const db = require('../config/connection');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

function register(cred) {
  console.log(cred)
  return bcrypt.hash(cred.password, saltRounds)
    .then(hash => {
      const newUser = {
        email: cred.email,
        pw_digest: hash
      };
      return db.one(`
        INSERT INTO users (username, email, pw_digest)
        VALUES ($/username/, $/email/, $/pw_digest/)
        RETURNING id, email, username
      `, newUser)
    });
}

module.exports = {
  register
}
