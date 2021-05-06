const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	// port: 3606,
	user: 'root',
	password: '',
	database: 'infoTravel',
});

connection.connect(err => {
	if (err) {
		console.error(`>>> Error connecting: ${err.sqlMessage} \n >>> ${err.stack}`);
		return;
	}

	console.log('>>> Connected as id ' + connection.threadId);
});

module.exports = connection;
