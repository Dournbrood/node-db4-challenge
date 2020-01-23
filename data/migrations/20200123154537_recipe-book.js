exports.up = function (knex) {
    return knex.schema
        .createTable("recipes", table => {
            table.increments();
            table.string("name")
                .notNullable()
                .index();
            table.string("instructions")
                .notNullable();
        })
        .createTable("ingredients", table => {
            table.increments();
            table.string("name")
                .notNullable()
                .index();
        })
        .createTable("recipe_ingredients", table => {
            table.increments();

            table.integer("recipe_id")
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");

            table.integer("ingredient_id")
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");

            table.double("quantity")
                .notNullable()
                .unsigned()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes");
};
