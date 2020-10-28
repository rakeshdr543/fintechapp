import { Schema } from "mongoose";
import mongoose from "mongoose";

const subjectiveSchema = new mongoose.Schema(
  {
    userId: { type: Schema.ObjectId, ref: "User", required: true },
    userType: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      max: 32,
    },
    company: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    position: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    dependent: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    digitalUse: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    dob: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    city: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    location: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    financeStatus: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    relationShip: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    houseType: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    language: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
  },
  { timestamps: true }
);

const subjectiveModel = mongoose.model("Subjective", subjectiveSchema);
export default subjectiveModel;
