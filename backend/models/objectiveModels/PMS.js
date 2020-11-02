import mongoose, { Schema } from "mongoose";

const pmsSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  investedIn: { type: String, required: true },
  brokerName: { type: String, required: true },
  amountOfInvestment: { type: Number, required: true },
  dateOfInvestment: { type: String, required: true },
  purposeOfInvestment: { type: String },
  dependentName: { type: String, required: true, minlength: 3 },
});
const pmsModel = mongoose.model("PMS", pmsSchema);
export default pmsModel;
