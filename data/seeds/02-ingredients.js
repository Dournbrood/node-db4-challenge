exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: "Eggs" },
    { name: "Green Eggs" },
    { name: "Ham" },
    { name: "Cheeb" },
    { name: "Surger" },
    { name: "Bunbs" },
    { name: "A dream" }
  ])
};