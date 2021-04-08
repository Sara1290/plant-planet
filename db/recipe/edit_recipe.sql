UPDATE plant_recipes
SET servings = $2, timeframe = $3, author_id = $4, title = $5 ingredients = $6, method = $7, img = $8 
WHERE id = $1;