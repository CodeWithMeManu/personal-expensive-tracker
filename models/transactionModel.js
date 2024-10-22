const db = require("../config/database");

const Transaction = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM transactions", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
  create: (transaction) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO transactions (amount, category, date) VALUES (?, ?, ?)",
        [transaction.amount, transaction.category, transaction.date],
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

module.exports = Transaction;
