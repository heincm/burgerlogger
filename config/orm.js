const connection = require('./connections');

let tableName = "burgers";

let orm = {

    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    selectAll: function (tableName, callback) {
        let query = "SELECT * FROM " + tableName;

        connection.query(query, function (err, result) {
            if (err){
                console.log("err", err)
            }
            console.log(result)

            callback(result);

        });
    },

    // Here our ORM is creating a simple method for performing a query of a single character in the table.
    // Again, we make use of the callback to grab a specific character from the database.

    updateOne: function (burger, callback) {

        let query = "UPDATE " + tableName + " SET text=? WHERE id=?";

        connection.query(query, [
            burger.burger_name, burger.id
        ], function (err, result) {

            callback(result);

        });

    },

    insertOne: function (burger, callback) {
        let query = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
        burger.devoured = burger.devoured || 0;
        connection.query(query, [
            burger.burger_name, burger.devoured
        ], function (err, result) {

            callback(result);

        });
    },
};

module.exports = orm;


