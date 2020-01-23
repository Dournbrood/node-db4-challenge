const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

//This contains all info in the database, sort of organized.
/*
select r.name as recipe_name, i.name as ingredient_name, ri.quantity as ingredient_quantity, r.instructions as instructions
from recipe_ingredients as ri 
left join recipes as r
on r.id = ri.recipe_id
join ingredients as i 
on i.id = ri.ingredient_id
order by r.id 
*/

function getRecipes() {
    return db("recipes as r").select("r.name");
}

function getShoppingList(id) {
    return db("recipe_ingredients as ri")
        .select("i.name as ingredient_name", "ri.quantity as ingredient_quantity")
        .leftJoin("recipes as r", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .where("r.id", id)
        .orderBy("r.id");
}

function getInstructions(id) {
    return db("recipes as r").select("r.ingredients").where("r.id", id);
}