// @desc        Get all transactions
// @route       GET /api/v1/transactons
// @access      Public
exports.getTransactions = (req, res, next) => {
  res.send("GET Transactions");
};

// @desc        Add transaction
// @route       POST /api/v1/transactons
// @access      Public
exports.addTransaction = (req, res, next) => {
  res.send("POST Transaction");
};

// @desc        Delete transaction
// @route       DELETE /api/v1/transactons/:id
// @access      Public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE Transaction");
};
