exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('conditions', (table) => {
    table.increments('id')
    table.string('name')
    table.string('symptoms')
    table.string('patient_id')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('conditions')
};
