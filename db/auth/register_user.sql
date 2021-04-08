INSERT INTO plant_users 
(username, email, password, prof_pic)
VALUES
($1, $2, $3, $4)
returning *;