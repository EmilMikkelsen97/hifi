const restify = require('restify');
const path = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'mysql'));

module.exports = (app) => {

   app.get('/products', (req, res, next) => {
      let db = mysql.connect();
      db.execute(`SELECT * FROM produkt`, [], (err, rows) => {
         if (err) {
            console.log(err);
         } else {
            res.json(200, rows);
         }
      })
      db.end();
   });

   app.get('/products/:id', (req, res, next) => {
      let id = (isNaN(req.params.id) ? 0 : req.params.id);
      if (id > 0) {
         let db = mysql.connect();
         db.execute(`SELECT * FROM produkt WHERE id = ?`, [req.params.id], (err, rows) => {
            if (err) {
               console.log(err);
            } else {
               res.json(200, rows);
            }
         })
         db.end();
      } else {
         res.json(400, {
            message: 'id ikke valid'
         });
      }
   });

   app.post('/products', (req, res, next) => {

      let name = (req.body.name == undefined ? '' : req.body.name);
      let description = (req.body.description == undefined ? '' : req.body.description);
      let price = (req.body.price == undefined ? 0 : req.body.price);
      let number = (isNaN(req.params.number) ? 0 : req.params.number);
      let image = (req.body.image == undefined ? '' : req.body.image);
      let type = (isNaN(req.params.type) ? 0 : req.params.type);
      price = price.replace(',', '.');

      if (id != 0 && name != '' && description != '' && !isNaN(price) && id > 0 && !isNaN(number) && !isNaN(type) && image != '') {

         let db = mysql.connect();
         db.execute(`INSERT INTO produkt SET navn = ?, beskrivelse = ?, pris = ?, varenr = ?, billede = ?, fk_type = ?`, [name, description, price, id, number, image, type], (err, rows) => {
            if (err) {
               console.log(err);
            } else {
               res.json(200, rows);
            }
         })
         db.end();
      } else {
         res.json(400, {
            message: 'validering fejlede'
         });
      }
   });

   app.put('/products/:id', (req, res, next) => {

      let name = (req.body.name == undefined ? '' : req.body.name);
      let description = (req.body.description == undefined ? '' : req.body.description);
      let price = (req.body.price == undefined ? 0 : req.body.price);
      let id = (isNaN(req.params.id) ? 0 : req.params.id);
      let number = (isNaN(req.params.number) ? 0 : req.params.number);
      let image = (req.body.image == undefined ? '' : req.body.image);
      let type = (isNaN(req.params.type) ? 0 : req.params.type);
      price = price.replace(',', '.');

      if (id != 0 && name != '' && description != '' && !isNaN(price) && id > 0 && !isNaN(number) && !isNaN(type) && image != '') {

         let db = mysql.connect();
         db.execute(`UPDATE produkt SET navn = ?, beskrivelse = ?, pris = ?, varenr = ?, billede = ?, fk_type = ? WHERE id = ?`, [name, description, price, id, number, image, type], (err, rows) => {
            if (err) {
               console.log(err);
            } else {
               res.json(200, rows);
            }
         })
         db.end();
      } else {
         res.json(400, {
            message: 'validering fejlede'
         });
      }
   });

   app.del('/products/:id', (req, res, next) => {
      let id = (isNaN(req.params.id) ? 0 : req.params.id);
      if (id > 0) {
         let db = mysql.connect();
         db.execute(`DELETE FROM produkt WHERE id = ?`, [req.params.id], (err, rows) => {
            if (err) {
               console.log(err);
            } else {
               res.json(204);
            }
         })
         db.end();
      } else {
         res.json(400, {
            message: 'id ikke valid'
         });
      }
   });

   // ========================== static
   app.get('/.*', restify.plugins.serveStatic({
      'directory': 'public',
      'default': 'index.html'
   }));
}