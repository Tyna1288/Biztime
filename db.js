/** Database for BizTime. */


const { Client } = require("pg");

let Client_URI; 

// If we're running in test "mode", use our test db
// Make sure to create both databases!
if (process.env.NODE_ENV === "test") {
  client_URI = "postgresql://postgres:1234567@localhost:5433/biztime_test";
} else {
  client_URI = "postgresql://postgres:1234567@localhost:5433/biztime";
}

let client = new Client({
  connectionString: client_URI
});


client.connect();


module.exports = client;