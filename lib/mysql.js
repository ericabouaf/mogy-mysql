
var mysql = require('mysql');


module.exports = function (input, config, cb) {

    var connection = mysql.createConnection(config);
    connection.connect(function(err) {

        if (err) { return cb(err); }

        connection.query(input.query, function(err, rows, fields) {
            connection.end();
            if (err) { return cb(err); }
            cb(null, rows);
        });

    });

};
