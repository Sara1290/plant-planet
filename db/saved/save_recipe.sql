-- SELECT * FROM saved_plant_recipes spr
-- JOIN plant_recipes pr ON spr.plant_recipes_id = pr.id
-- JOIN plant_users pu ON spr.plant_users_id = pu.id;
--^^^ maybe i need to use this for seeing the details of the saved recipes^^--

INSERT INTO saved_plant_recipes
(plant_users_id, plant_recipes_id)
VALUES
($1, $2);