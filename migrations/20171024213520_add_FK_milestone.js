
exports.up = function(knex, Promise) {
  return knex.schema.table('milestones', (table)=>{

    table.integer('famoue_people_id');

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', (table)=>{

    table.dropColumn('famoue_people_id');

  })

};
