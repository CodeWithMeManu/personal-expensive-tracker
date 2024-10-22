const Transaction = require("../models/transactionModel");

const transactionService = {
  getAllTransactions: () => {
    return Transaction.getAll();
  },
  createTransaction: (transaction) => {
    return Transaction.create(transaction);
  },
};

module.exports = transactionService;
