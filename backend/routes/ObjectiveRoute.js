import express from "express";
import Bond from "../models/objectiveModels/Bonds";
import CreditCardBill from "../models/objectiveModels/CreditCardBillsModel";
import Gold from "../models/objectiveModels/GoldSilver";
import InsurancePremium from "../models/objectiveModels/InsurancePremium";
import LoanEMI from "../models/objectiveModels/LoanEMI";
import Mortage from "../models/objectiveModels/Mortgage";
import MutualFund from "../models/objectiveModels/MutualFund";
import NSC from "../models/objectiveModels/NSC";
import PMS from "../models/objectiveModels/PMS";

const router = express.Router();

//Post request for credit card details
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

//Post request for Loan EMI

router.post("/loanEmi", async (req, res) => {
  try {
    const loanEmi = new LoanEMI({
      userId: req.body.userId,
      typeOfLoan: req.body.typeOfLoan,
      principalAmt: req.body.principalAmt,
      intAmt: req.body.intAmt,
      paid_NotPaid_SinceHowManyTimes: req.body.paid_NotPaid_SinceHowManyTimes,
      dependentName: req.body.dependentName,
      annuityType: req.body.annuityType,
    });
    const newLoanEmi = await loanEmi.save();
    console.log("inserted Loan EMI details");
    res.send(newLoanEmi);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Post request for Mortage

router.post("/mortage", async (req, res) => {
  try {
    const mortage = new Mortage({
      userId: req.body.userId,
      amountOfMortgage: req.body.amountOfMortgage,
      intRate: req.body.intRate,
      dateOfMortgage: req.body.dateOfMortgage,
      payableForHowManyMonths: req.body.payableForHowManyMonths,
    });
    const newMortage = await mortage.save();
    console.log("inserted  Mortage details");
    res.send(newMortage);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Post request for Mutual Fund

router.post("/mutualFund", async (req, res) => {
  try {
    const mutualFund = new MutualFund({
      userId: req.body.userId,
      dayOfInvestment: req.body.dayOfInvestment,
      whatPurpose: req.body.whatPurpose,
      amountOfInvestment: req.body.amountOfInvestment,
      type: req.body.type,
      sipMaturity: req.body.sipMaturity,
      fundInvestedIn: req.body.fundInvestedIn,
    });
    const newMutualFund = await mutualFund.save();
    console.log("inserted  Mutual Fund details");
    res.send(newMutualFund);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Post request for Bonds

router.post("/bonds", async (req, res) => {
  try {
    const bond = new Bond({
      userId: req.body.userId,
      bondName: req.body.bondName,
      bondAmountOfInvestment: req.body.bondAmountOfInvestment,
      dateOfInvestment: req.body.dateOfInvestment,
      brokerInvestedThrough: req.body.brokerInvestedThrough,
      purposeOfBonds: req.body.purposeOfBonds,
      dependentName: req.body.dependentName,
    });
    const newBond = await bond.save();
    console.log("inserted Bonds details");
    res.send(newBond);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Post request for NSC

router.post("/nsc", async (req, res) => {
  try {
    const nsc = new NSC({
      userId: req.body.userId,
      investedIn: req.body.investedIn,
      dateOfInvest: req.body.dateOfInvest,
      amount: req.body.amount,
      numberOfCertificates: req.body.numberOfCertificates,
      purpose: req.body.purpose,
      dependentName: req.body.dependentName,
    });
    const newNsc = await nsc.save();
    console.log("inserted NSC details");
    res.send(newNsc);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Post request for PMS / AIF / IREF

router.post("/pms", async (req, res) => {
  try {
    const pms = new PMS({
      userId: req.body.userId,
      investedIn: req.body.investedIn,
      brokerName: req.body.brokerName,
      amountOfInvestment: req.body.amountOfInvestment,
      dateOfInvestment: req.body.dateOfInvestment,
      purposeOfInvestment: req.body.purposeOfInvestment,
      dependentName: req.body.dependentName,
    });
    const newPms = await pms.save();
    console.log("inserted PMS / AIF / IREF details");
    res.send(newPms);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Post request for Gold / Silver

router.post("/gold", async (req, res) => {
  try {
    const gold = new Gold({
      userId: req.body.userId,
      whatForm: req.body.whatForm,
      amount: req.body.amount,
      dateOfInvestment: req.body.dateOfInvestment,
      purpose: req.body.purpose,

      dependentName: req.body.dependentName,
    });
    const newGold = await gold.save();
    console.log("inserted Gold/Silver details");
    res.send(newGold);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

export default router;
