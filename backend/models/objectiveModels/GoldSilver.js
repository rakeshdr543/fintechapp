import mongoose, { Schema } from "mongoose";

const goldSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  whatForm: { type: String, required: true },
  amount: { type: Number, required: true },
  dateOfInvestment: { type: String, required: true },
  purpose: { type: String, minlength: 3 },
  dependentName: { type: String, required: true, minlength: 3 },
});
const goldModel = mongoose.model("Gold", goldSchema);
export default goldModel;
