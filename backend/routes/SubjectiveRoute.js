import express from "express";
import SubjectiveSchema from "../models/SubjectiveSchema";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const subjective = new SubjectiveSchema({
      userId: req.body.userId,
      userType: req.body.userType,
      company: req.body.company,
      position: req.body.position,
      dependent: req.body.dependent,
      digitalUse: req.body.digitalUse,
      dob: req.body.dob,
      city: req.body.city,
      location: req.body.location,
      financeStatus: req.body.financeStatus,
      relationShip: req.body.relationShip,
      houseType: req.body.houseType,
      language: req.body.language,
    });
    const newSubjective = await subjective.save();
    console.log("inserted subjective");
    res.send(newSubjective);
  } catch (error) {
    res.status(401).send({ message: "Invalid Subjective Details" });
  }
});
export default router;
