import mongoose from "mongoose";
import { Schema } from "mongoose";

const psychologicalSchema = new mongoose.Schema(
  {
    userId: { type: Schema.ObjectId, ref: "User", required: true },
    q1: {
      type: String,
      required: true,
      max: 1,
    },
    q2: {
      type: String,
      required: true,
      max: 1,
    },
    q3: {
      type: String,
      required: true,
      max: 1,
    },
    q4: {
      type: String,
      required: true,
      max: 1,
    },
    q5: {
      type: String,
      required: true,
      max: 1,
    },
  },
  { timestamps: true }
);
const psychologicalModel = mongoose.model("psychological", psychologicalSchema);

export default psychologicalModel;
