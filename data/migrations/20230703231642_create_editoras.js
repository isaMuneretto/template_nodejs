/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('editoras', (table) => {
        table.increments();
        table.string("nome", 80).notNullable();
        table.string("cidade", 50).notNullable();
        table.string("estado", 2).notNullable();
        table.string("telefone", 15).notNullable();
        table.string("rua", 60).notNullable();
        table.string("cep", 10).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
