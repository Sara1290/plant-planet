-- SELECT * FROM saved_plant_recipes
-- WHERE plant_users_id = $1;

SELECT * FROM saved_plant_recipes spr
JOIN plant_recipes pr ON spr.plant_recipes_id = pr.id
JOIN plant_users pu ON spr.plant_users_id = pu.id
WHERE plant_users_id = $1;