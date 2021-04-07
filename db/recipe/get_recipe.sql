SELECT * FROM plant_recipes
WHERE id = $1;


--this just gets all the recipes from a single user.
-- SELECT servings, timeframe, username as author_id, title, ingredients, method, img from plant_recipes pr
-- JOIN plant_users pu ON pu.id = pr.author_id
-- WHERE pr.id = 1;

