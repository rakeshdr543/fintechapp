import mongoose from "mongoose";
import { Schema } from "mongoose";

const loanEMISchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  typeOfLoan: { type: String, required: true },
  principalAmt: { type: String, required: true },
  intAmt: { type: String, required: true },
  paid_NotPaid_SinceHowManyTimes: { type: String, required: true },
  dependentName: { type: String, required: true },
  annuityType: { type: String, required: true },
});

const loanEMIModel = mongoose.model("LoanEMI", loanEMISchema);
export default loanEMIModel;
