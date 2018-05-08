CREATE DATABASE events_db;

\c events_db

DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event VARCHAR(255),
  text TEXT NOT NULL,
  img_url TEXT,
  user_id INTEGER REFERENCES user (id) DROP CASCADE

);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  pw_digest VARCHAR(255)
);

CREATE TABLE likes (
  events_id INTEGER REFERENCES events (id) DROP CASCADE
  user_id INTEGER REFERENCES user (id) DROP CASCADE
);
