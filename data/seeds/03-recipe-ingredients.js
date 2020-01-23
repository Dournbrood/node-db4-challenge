exports.seed = function (knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1.0 },
    { recipe_id: 2, ingredient_id: 2, quantity: 3.0 },
    { recipe_id: 2, ingredient_id: 3, quantity: 1.0 },
    { recipe_id: 3, ingredient_id: 4, quantity: 1.0 },
    { recipe_id: 3, ingredient_id: 5, quantity: 1.0 },
    { recipe_id: 3, ingredient_id: 6, quantity: 2.0 },
    { recipe_id: 4, ingredient_id: 1, quantity: 1.0 },
    { recipe_id: 4, ingredient_id: 7, quantity: 1.0 },
  ])
};
