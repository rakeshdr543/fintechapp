import mongoose from "mongoose";
import { Schema } from "mongoose";

const insurancePremiumSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  policyType: { type: String, required: true, minlength: 3, maxlength: 20 },
  premiumAmt: { type: Number, required: true, minlength: 3, maxlength: 10 },
  whichDependent: { type: String, required: true },
  company: { type: String, required: true },
  numberOfYrs_it_goes_on_till: { type: Number, required: true, maxlength: 3 },
});

const insurancePremiumModel = mongoose.model(
  "insurancePremium",
  insurancePremiumSchema
);
export default insurancePremiumModel;
