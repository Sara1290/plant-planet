SELECT servings, timeframe, pu.username AS author_id, title, ingredients, method, img from plant_recipes pr
JOIN plant_users pu ON pu.id = pr.author_id
WHERE lower(title) like '$1';