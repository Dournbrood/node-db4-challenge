exports.seed = function (knex) {
  return knex('recipes').insert([
    { name: "Egg", instructions: "Add 1 eggs for egg." },
    { name: "Green Eggs And Ham", instructions: "Put 3 green eggs and 1 ham on a plate to irritate the nearest Sam." },
    { name: "Cheebsurger", instructions: "place bunb. gentli place surger on bunB BUT BE CAREFUL NOT TO HURT BUNB!!! apply cheeb an remoof air pocket. place bunb agAIN GO EAT IT GO GO GO" },
    { name: "MEGA Egg", instructions: "Have an egg, and a dream~" }
  ])
};