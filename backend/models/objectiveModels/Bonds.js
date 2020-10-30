import mongoose from "mongoose";
import { Schema } from "mongoose";

const bondSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  bondName: { type: String, required: true, minlength: 1 },
  bondAmountOfInvestment: { type: Number, required: true, maxlength: 10 },
  dateOfInvestment: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  brokerInvestedThrough: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  purposeOfBonds: { type: String, minlength: 3 },
  dependentName: { type: String, required: true, minlength: 3 },
});
const bondModel = mongoose.model("Bond", bondSchema);
export default bondModel;
