UPDATE plant_recipes pr
SET servings = $1, timeframe = $2, author_id = $3, title = $4, ingredients = $5, method = $6, img = $7
WHERE pr.id = $8;
