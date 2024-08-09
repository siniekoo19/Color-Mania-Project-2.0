CREATE DATABASE game;

USE game;

CREATE TABLE user(
    email VARCHAR(50) PRIMARY KEY,
    highest_score INT DEFAULT 0,
    password VARCHAR(50) NOT NULL
);