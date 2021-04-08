--gets one recipe, based on unique recipe id, and shows the username for the author id column.
SELECT servings, timeframe, pu.username AS author_id, title, ingredients, method, img from plant_recipes pr
JOIN plant_users pu ON pu.id = pr.author_id
WHERE pr.id = $1;


--this just gets all the recipes from a single user.
-- SELECT servings, timeframe, username as author_id, title, ingredients, method, img from plant_recipes pr
-- JOIN plant_users pu ON pu.id = pr.author_id
-- WHERE pr.id = 1;

