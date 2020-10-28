import mongoose from "mongoose";
import { Schema } from "mongoose";

const insurancePremiumSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  policyType: { type: String, required: true },
  premiumAmt: { type: String, required: true },
  whichDependent: { type: String, required: true },
  company: { type: String, required: true },
  numberOfYrs_it_goes_on_till: { type: String, required: true },
});

const insurancePremiumModel = mongoose.model(
  "insurancePremium",
  insurancePremiumSchema
);
export default insurancePremiumModel;
