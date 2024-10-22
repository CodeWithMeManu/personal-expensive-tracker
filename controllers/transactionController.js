const transactionService = require("../services/transactionService");

exports.getAllTransactions = (req, res) => {
  transactionService
    .getAllTransactions()
    .then((transactions) => res.json(transactions))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.createTransaction = (req, res) => {
  const transaction = req.body;
  transactionService
    .createTransaction(transaction)
    .then((id) => res.status(201).json({ id }))
    .catch((err) => res.status(500).json({ error: err.message }));
};
