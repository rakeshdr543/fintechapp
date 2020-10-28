import mongoose from "mongoose";
import { Schema } from "mongoose";

const creditCardBillSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  totalAmountOfLiability: { type: String, required: true },
  numberOfMonthsPaid: { type: String, required: true },
  bankForCreditCard: { type: String, required: true },
  intRateOfBank: { type: String, required: true },
  paid_NotPaid_SinceHowManyTimes: { type: String, required: true },
});

const creditCardBillModel = mongoose.model(
  "creditCardBill",
  creditCardBillSchema
);
export default creditCardBillModel;
