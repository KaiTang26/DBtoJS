const knex = require('knex');

const settings = require("./settings");

const last_name = process.argv[2];

const db = knex({
  client: 'pg',
  connection: settings,
});

db('famous_people').where({last_name:last_name}).select('*').then((result)=>{

  const printResult =`- ${result[0].id}: ${result[0].first_name} ${result[0].last_name}, born ${result[0].birthdate.toISOString().split('T')[0]}`;

  console.log(printResult);

});

db.destroy();