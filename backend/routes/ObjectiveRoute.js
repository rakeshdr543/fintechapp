import express from "express";
import CreditCardBill from "../models/objectiveModels/CreditCardBillsModel";
import InsurancePremium from "../models/objectiveModels/InsurancePremium";

const router = express.Router();

//Post request for credicard details
router.post("/creditCardBill", async (req, res) => {
  try {
    const creditCardBill = new CreditCardBill({
      userId: req.body.userId,
      totalAmountOfLiability: req.body.totalAmountOfLiability,
      numberOfMonthsPaid: req.body.numberOfMonthsPaid,
      bankForCreditCard: req.body.bankForCreditCard,
      intRateOfBank: req.body.intRateOfBank,
      paid_NotPaid_SinceHowManyTimes: req.body.paid_NotPaid_SinceHowManyTimes,
    });
    const newCreditCardBill = await creditCardBill.save();
    console.log("inserted creditCardBill details");
    res.send(newCreditCardBill);
  } catch (error) {
    res.status(401).send({ message: "Invalid Creditcard bill Data" });
  }
});

//Post request for Insurance premium
router.post("/insurancePremium", async (req, res) => {
  try {
    const insurancePremium = new InsurancePremium({
      userId: req.body.userId,
      policyType: req.body.policyType,
      premiumAmt: req.body.premiumAmt,
      whichDependent: req.body.whichDependent,
      company: req.body.company,
      numberOfYrs_it_goes_on_till: req.body.numberOfYrs_it_goes_on_till,
    });
    const newInsurancePremium = await insurancePremium.save();
    console.log("inserted Insurance Premium details");
    res.send(newInsurancePremium);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});
export default router;
