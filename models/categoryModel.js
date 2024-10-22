const db = require("../config/database");

const Category = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM categories", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
  create: (category) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO categories (name) VALUES (?)",
        [category.name],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.lastID);
          }
        }
      );
    });
  },
};

module.exports = Category;
