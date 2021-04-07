SELECT pr.id AS plant_recipes_id, pr.servings, pr.timeframe, username AS author_username, pr.title, pr.ingredients, pr.method, pr.img FROM plant_recipes pr
JOIN plant_users pu ON pu.id = pr.author_id
ORDER BY pr.id ASC;

--WORKS--