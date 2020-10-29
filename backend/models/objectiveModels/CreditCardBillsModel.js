import mongoose from "mongoose";
import { Schema } from "mongoose";

const creditCardBillSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  totalAmountOfLiability: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10,
  },
  numberOfMonthsPaid: { type: Number, required: true, maxlength: 5 },
  bankForCreditCard: { type: String, required: true },
  intRateOfBank: { type: Number, required: true, maxlength: 5 },
  paid_NotPaid_SinceHowManyTimes: {
    type: Number,
    required: true,
    maxlength: 5,
  },
});

const creditCardBillModel = mongoose.model(
  "creditCardBill",
  creditCardBillSchema
);
export default creditCardBillModel;
