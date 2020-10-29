import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Container } from "@material-ui/core";

export default function SelectionPage() {
  const [creditCard, setCreditCard] = useState(false);
  const [insurancePremium, setInsurancePremium] = useState(false);
  const [loanEMI, setLoanEMI] = useState(false);
  const [mortage, setMortage] = useState(false);
  const [outstandingBills, setOutstandingBills] = useState(false);
  return (
    <React.Fragment>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h4' align='center'>
          Select all the areas where you have allocated your money
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  name='Credit Card Bills'
                  checked={creditCard}
                  onClick={(e) => setCreditCard(!creditCard)}
                />
              }
              label='Credit Card Bills'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  name='Insurance Premium'
                  checked={insurancePremium}
                  onClick={(e) => setInsurancePremium(!insurancePremium)}
                />
              }
              label='Insurance Premium'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  name='loanEMI'
                  checked={loanEMI}
                  onClick={(e) => setLoanEMI(!loanEMI)}
                />
              }
              label='Loan EMI'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  name='mortage'
                  checked={mortage}
                  onClick={(e) => setMortage(!mortage)}
                />
              }
              label='Mortage'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  name='outstandingBills'
                  checked={outstandingBills}
                  onClick={(e) => setOutstandingBills(!outstandingBills)}
                />
              }
              label='Outstanding Bills'
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
