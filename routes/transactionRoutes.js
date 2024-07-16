const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add Transaction POST MEthod
router.post("/add-Transaction", addTransaction);

//Edit Transaction POST MEthod
router.post("/edit-Transaction", editTransaction);

//Delete Transaction POST MEthod
router.post("/delete-Transaction", deleteTransaction);

//get Transactions
router.post("/get-Transaction", getAllTransaction);

module.exports = router;