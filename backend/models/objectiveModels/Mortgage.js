import mongoose from "mongoose";
import { Schema } from "mongoose";

const mortageSchema = new mongoose.Schema({
  userId: { type: Schema.ObjectId, ref: "User", required: true },
  amountOfMortgage: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
  },
  intRate: { type: Number, required: true, maxlength: 5 },
  dateOfMortgage: { type: Date, required: true },
  payableForHowManyMonths: { type: Number, required: true, maxlength: 3 },
});

const mortageModel = mongoose.model("Mortage", mortageSchema);
export default mortageModel;
