var mysql = require('mysql');


var mysql_query = function (input, config, cb) {

    var connection = mysql.createConnection(config);
    connection.connect(function(err) {

        if (err) { return cb(err); }

        connection.query(input.query, function(err, rows, fields) {

            connection.end();

            if (err) {
                cb(err);
                return;
            }

            cb(null, rows);

        });

    });

};

exports.mysql = mysql_query;
