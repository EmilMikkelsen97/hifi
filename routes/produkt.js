const mysql = require('mysql2');
const db = mysql.createConnection({
	'host': 'localhost',
	'user': 'root',
	'password': '',
	'database': 'hifi'
});

// alle produkter
module.exports = (app) => {
	app.get('/products', (req, res) => {
		const query = ('SELECT * FROM produkt ORDER BY fk_type ASC')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// seneste produkter
	app.get('/products/seneste', (req, res) => {
		const query = ('SELECT * FROM produkt ORDER BY id DESC LIMIT 4')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// cdafspillere
	app.get('/products/cdafspillere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 1')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// dvdafspillere
	app.get('/products/dvdafspillere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 2')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// effektforstaerkere
	app.get('/products/effektforstaerkere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 3')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// foorstaerkere
	app.get('/products/foorstaerkere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 4')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// højtalere
	app.get('/products/hojtalere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 5')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});
	
	// intforstaerkere
	app.get('/products/intforstaerkere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 6')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// pladespillere
	app.get('/products/pladespillere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 7')

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	// roerforstaerkere
	app.get('/products/roerforstaerkere', (req, res) => {
		const query = ('SELECT * FROM produkt WHERE fk_type = 8')

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