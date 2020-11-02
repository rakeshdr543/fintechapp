import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Container } from "@material-ui/core";
import { useHistory } from "react-router";

export default function SelectionPage({ handleSelectedPages }) {
  const history = useHistory();
  const [creditCard, setCreditCard] = useState(false);
  const [insurancePremium, setInsurancePremium] = useState(false);
  const [loanEMI, setLoanEMI] = useState(false);
  const [mortage, setMortage] = useState(false);
  const [mutualFunds, setMutualFunds] = useState(false);
  const [items, setItems] = useState([]);

  const handleSelection = async (e) => {
    handleSelectedPages(items);
    console.log(items);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setItems([...items, e.target.name]);
    } else {
      const newItems = [...items];
      setItems(newItems.filter((name) => name != e.target.name));
    }
  };
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
                  name='creditCard'
                  checked={creditCard}
                  onClick={(e) => {
                    setCreditCard(!creditCard);
                    handleChange(e);
                  }}
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
                  name='insurancePremium'
                  checked={insurancePremium}
                  onClick={(e) => {
                    setInsurancePremium(!insurancePremium);
                    handleChange(e);
                  }}
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
                  onClick={(e) => {
                    setLoanEMI(!loanEMI);
                    handleChange(e);
                  }}
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
                  onClick={(e) => {
                    setMortage(!mortage);
                    handleChange(e);
                  }}
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
                  name='mutualFunds'
                  checked={mutualFunds}
                  onClick={(e) => {
                    setMutualFunds(!mutualFunds);
                    handleChange(e);
                  }}
                />
              }
              label='Mutual Funds'
            />
          </Grid>
        </Grid>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSelection}
          className=''
        >
          Continue
        </Button>
      </Container>
    </React.Fragment>
  );
}
