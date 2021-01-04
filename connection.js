const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "!H0bb35!",
    database: "tracker"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as" + connection.threadId);
});

module.exports = connection;