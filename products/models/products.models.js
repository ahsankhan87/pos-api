//import db from '../../db/db.js'
const db = require('../../db/db');

class productModel {
  listItems(callback) {
    db.query('SELECT * FROM pos_products', (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }

  getItem(productId, callback) {
    db.query('SELECT * FROM pos_products WHERE id = ?', [productId], (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  }

  addItem(product, callback) {
    db.query('INSERT INTO pos_products SET ?', product, (err, result) => {
      if (err) throw err;
      callback(result.insertId);
    });
  }

  editItem(productId, product, callback) {
    db.query('UPDATE pos_products SET ? WHERE id = ?', [product, productId], (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  }

  deleteItem(productId, callback) {
    db.query('DELETE FROM pos_products WHERE id = ?', [productId], (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  }
}

module.exports = new productModel();