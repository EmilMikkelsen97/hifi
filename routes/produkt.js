const mysql = require('mysql2');
const db = mysql.createConnection({
	'host': 'localhost',
	'user': 'root',
	'password': '',
	'database': 'hifi'
});

module.exports = (app) => {
	app.get('/products', (req, res) => {
		const query = ('SELECT * FROM produkt')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});
};