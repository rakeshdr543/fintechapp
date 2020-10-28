import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "20ch",
    minHeight: 29,
    font: 78,
  },
  textField: {
    width: "25ch",
    height: 29,
    fontSize: "250ch",
  },
}));

const FirstSubjectivePage = ({
  userType,
  setUserType,
  company,
  setCompany,
  position,
  setPosition,
  dependent,
  setDependent,
  digitalUse,
  setDigitalUse,
  dob,
  setDob,
  city,
  setCity,
}) => {
  const classes = useStyles();

  const history = useHistory();
  const handleSubmit = () => {
    console.log(
      "user stored details",
      history,
      userType,
      company,
      position,
      dependent,
      digitalUse,
      dob,
      city
    );
    history.push("/subjective/second");
  };

  return (
    <Container maxWidth='md'>
      <Card className='form-subject'>
        <List>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListItem>
                <Typography variant='h3'>Tell Us more about You</Typography>
              </ListItem>
            </Grid>

            <Grid item xs={6}>
              <ListItem>
                <h5>Who you are: </h5>
                <FormControl className={classes.formControl}>
                  <Select
                    value={userType}
                    onChange={(e) => {
                      setUserType(e.target.value);
                    }}
                  >
                    <MenuItem value='student'>Student</MenuItem>
                    <MenuItem value='entrepreneur'>Entrepreneur</MenuItem>
                    <MenuItem value='employee'>
                      Employee(Pvt. or Public)
                    </MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem>
                <h5>Company: </h5>
                <FormControl>
                  <input
                    className='input-field'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </FormControl>
              </ListItem>
              <ListItem>
                <h5>Position: </h5>

                <input
                  style={{ width: "40%" }}
                  className='input-field'
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </ListItem>
              <ListItem>
                <h5>Dependent / Independent:</h5>
                <FormControl>
                  <Select
                    value={dependent}
                    onChange={(e) => setDependent(e.target.value)}
                  >
                    <MenuItem value='dependent'>Dependent</MenuItem>
                    <MenuItem value='independent'>Independent</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <h5>Digital Transaction Usage :</h5>
                <FormControl>
                  <Select
                    value={digitalUse}
                    onChange={(e) => setDigitalUse(e.target.value)}
                  >
                    <MenuItem value='high'>High</MenuItem>
                    <MenuItem value='low'>Low</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem>
                <h5>Date of Birth </h5>
                <FormControl>
                  <input
                    className='input-field'
                    value={dob}
                    type='date'
                    onChange={(e) => setDob(e.target.value)}
                  />
                </FormControl>
              </ListItem>
              <ListItem>
                <h5>City: </h5>
                <FormControl>
                  <input
                    value={city}
                    className='input-field'
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
              </ListItem>
              <ListItem>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  onClick={(e) => {
                    handleSubmit();
                  }}
                >
                  Continue
                </Button>
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Card>
    </Container>
  );
};

export default FirstSubjectivePage;
