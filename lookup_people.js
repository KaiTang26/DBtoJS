const pg = require("pg");

const settings = require("./settings")

const last_name = process.argv[2];


const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE last_name = $1;",
    [last_name],
    (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }

      const printResult =`- ${result.rows[0].id}: ${result.rows[0].first_name} ${result.rows[0].last_name}, born ${result.rows[0].birthdate}`;
      console.log(printResult); //output: 1
      client.end();
  });
});