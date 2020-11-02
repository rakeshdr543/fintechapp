import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Container } from "@material-ui/core";

const MutualFundPage = () => {
  return (
    <React.Fragment>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h4' align='center'>
          Mutual Funds
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id='address1'
              name='address1'
              label='Day of Investment - New, Intermediate, Experienced Investor'
              fullWidth
              autoComplete='shipping address-line1'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='What purpose - Home, Car, etc'
              fullWidth
              autoComplete='given-name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label='Amount of Investment '
              fullWidth
              autoComplete='family-name'
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id='address2'
              name='address2'
              label='Type - SIP, Lumpsum- Amount'
              fullWidth
              autoComplete='shipping address-line2'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='city'
              name='city'
              label='if SIP for how many months, years, weeks '
              fullWidth
              autoComplete=''
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id='country'
              name='country'
              label='Fund Invested in '
              fullWidth
              autoComplete='shipping country'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color='secondary' name='saveAddress' value='yes' />
              }
              label='Want to add more Mutual Funds'
            />
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary'>
            save Mutual Fund data
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MutualFundPage;
