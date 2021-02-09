const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    require: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    require: [true, "Please add a positive or a negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.Model("Transaction", TransactionSchema);
