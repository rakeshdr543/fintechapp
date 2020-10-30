import mongoose, { Schema } from "mongoose";

const nscSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  nameOfCertificate: { type: String, required: true },
  dateOfInvest: { type: String, required: true },
  amount: { type: Number, required: true, maxlength: 10 },
  numberOfCertificates: { type: Number, default: 1, maxlength: 5 },
  purpose: { type: String, minlength: 3 },
  dependentName: { type: String, required: true, minlength: 3 },
});
const nscModel = mongoose.model("NSC", nscSchema);
export default nscModel;
