CREATE DATABASE events_db;

\c events_db

DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event VARCHAR(255),
  text TEXT NOT NULL,
  img_url TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  event_id INTEGER REFERENCES events (id) DROP CASCADE
);