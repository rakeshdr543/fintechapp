import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import config from "./config";

import bodyParser from "body-parser";
import userRoute from "./routes/UserRoute";
import psychologicalAnswerRoute from "./routes/PsychologicalAnswerRoute";
import subjectiveRoute from "./routes/SubjectiveRoute";
import objectiveRoute from "./routes/ObjectiveRoute";

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(
  mongodbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database connected successfully");
  }
);

app.use("/api/users", userRoute, () => {
  console.log("User Data inserted successfully");
});
app.use("/api/answers", psychologicalAnswerRoute, () => {
  console.log("psychologicalAnswers Data inserted successfully");
});
app.use("/api/subjective", subjectiveRoute, () => {
  console.log("Subjective details submitted");
});
app.use("/api/objective", objectiveRoute, () => {
  console.log("objective detail route");
});

app.listen(8000, () => {
  console.log("server is listening at 8000");
});
