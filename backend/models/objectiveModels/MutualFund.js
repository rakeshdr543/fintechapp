import mongoose from "mongoose";
import { Schema } from "mongoose";

const mutualFundSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  dayOfInvestment: { type: String, required: true, maxlength: 20 },
  whatPurpose: { type: String, required: true, maxlength: 100 },
  amountOfInvestment: { type: Number, maxlength: 10, required: true },
  type: { type: String, maxlength: 10, required: true },
  sipMaturity: { type: String, maxlength: 20, default: 1 },
  fundInvestedIn: { type: String, required: true, minlength: 3 },
});
const mutualFundModel = mongoose.model("MutualFund", mutualFundSchema);
export default mutualFundModel;
