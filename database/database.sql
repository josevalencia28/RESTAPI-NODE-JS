CREATE DATABASE firsapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users(name, email) VALUES
    ('Jose luis', 'joseluisvalencia654@gmail.com'),
    ('Ronaldo', 'ronaldo@gmail.com'),
    ('Alvaro Borelly', 'aborelly@gamil.com');

