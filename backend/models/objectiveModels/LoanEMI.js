import mongoose from "mongoose";
import { Schema } from "mongoose";

const loanEMISchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  typeOfLoan: { type: String, required: true, minlength: 3, maxlength: 10 },
  principalAmt: { type: Number, required: true, minlength: 3, maxlength: 10 },
  intAmt: { type: Number, required: true, maxlength: 5 },
  paid_NotPaid_SinceHowManyTimes: {
    type: Number,
    required: true,
    maxlength: 5,
  },
  dependentName: { type: String, required: true },
  annuityType: { type: String, required: true, minlength: 3 },
});

const loanEMIModel = mongoose.model("LoanEMI", loanEMISchema);
export default loanEMIModel;
