/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('autores', (table) => {
        table.increments();
        table.string("nome", 80).notNullable();
        table.string("sobrenome", 60).notNullable();
        table.integer("idade", 2).notNullable();
        table.string("data_nascimento", 12).notNullable();
        table.string("sexo", 2).notNullable();
        table.string("telefone", 15).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("autores");
};



