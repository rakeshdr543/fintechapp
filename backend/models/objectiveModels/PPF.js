import mongoose, { Schema } from "mongoose";

const ppfSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  startDate: { type: String, required: true },
  amountDepositedPerYear: { type: Number, required: true },
  whichAccount: { type: Number, required: true },
  dateOfInvestment: { type: String, required: true },
  purposeOfInvestment: { type: String },
  dependentName: { type: String, required: true, minlength: 3 },
  goalAmount: { type: Number },
  amountDeposited: { type: Number },
  yoursPlannedTill: { type: Number },
  yearsDeposited: { type: Number },
});
const ppfModel = mongoose.model("PPF", ppfSchema);
export default ppfModel;
