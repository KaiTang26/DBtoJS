const knex = require('knex');

const settings = require("./settings");

const person = new Object();

// person.id = 6;
person.first_name = "Kai";
person.last_name = "Tang";
person.birthdate = "1990-10-26";

console.log(person);

const db = knex({
  client: 'pg',
  connection: settings,
});

// db('famous_people').insert(person).toString();
db('famous_people').insert(person).then((result)=>{

  console.log("insertted");

});
// db('famous_people').where({last_name:'Tang'}).del();

db.destroy();