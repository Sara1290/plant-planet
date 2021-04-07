CREATE TABLE plant_users (
id SERIAL PRIMARY KEY, 
username VARCHAR(255) NOT NULL,
email TEXT UNIQUE NOT NULL,
password VARCHAR(50) NOT NULL,
prof_pic TEXT
)

CREATE TABLE plant_recipes (
id SERIAL PRIMARY KEY,
serve INTEGER,
timeframe TIME,
author_id INTEGER REFERENCES plant_users(id),
title VARCHAR(255) NOT NULL,
ingredients TEXT NOT NULL,
method TEXT NOT NULL,
img TEXT NOT NULL, 
)

CREATE TABLE saved_plant_recipes (
id SERIAL PRIMARY KEY,
plant_recipes_id INTEGER REFERENCES plant_recipes(id),
plant_users_id INTEGER REFERENCES plant_users(id)
)

