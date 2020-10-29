import {
  Button,
  Card,
  Container,
  FormControl,
  List,
  ListItem,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";

const SecondSubjectivePage = ({
  financeStatus,
  setFinancialStatus,
  relationShip,
  setRelationShip,
  houseType,
  setHouseType,
  language,
  setLanguage,
  location,
  handleSubmitDetails,
}) => {
  const history = useHistory();

  // const [lifeStyle, setLifeStyle] = useState("");
  // const [health, setHealth] = useState("");
  // const [goals, setGoals] = useState("");
  // const [priorities, setPriorities] = useState("");
  const handleClickMap = () => {
    history.push("/getLocation");
  };
  return (
    <Container maxWidth='sm'>
      <Card className='form-subject'>
        {/* <Typography variant='h3' gutterBottom>
      Tell Us more about You
    </Typography> */}
        <List>
          <ListItem>
            <h5>What is your current Financial Status : </h5>
            <FormControl>
              <Select
                value={financeStatus}
                onChange={(e) => {
                  setFinancialStatus(e.target.value);
                }}
              >
                <MenuItem value='Broke halfway throught'>
                  Broke halfway through{" "}
                </MenuItem>
                <MenuItem value='Barely Managing'>Barely Managing </MenuItem>
                <MenuItem value='Manage to save some portion'>
                  Manage to save some portion{" "}
                </MenuItem>
                <MenuItem value='Save more and invest'>
                  Save more and invest{" "}
                </MenuItem>
                <MenuItem value='Looking for investment opportunities with higher returns'>
                  Looking for investment opportunities with higher returns{" "}
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          {/* <ListItem>
          <h5>Lifestyle : </h5>
          <FormControl>
            <Select
              value={lifeStyle}
              onChange={(e) => setLifeStyle(e.target.value)}
            >
              <MenuItem value='Luxury'>Luxury</MenuItem>
              <MenuItem value='Middle class'>Middle class</MenuItem>
              <MenuItem value='Lower Middle Class'>Lower Middle Class</MenuItem>
              <MenuItem value='Below Poverty Line'>Below Poverty Line</MenuItem>
            </Select>
          </FormControl>
        </ListItem> */}

          <ListItem>
            <h5>Relationship : </h5>
            <FormControl>
              <Select
                value={relationShip}
                onChange={(e) => setRelationShip(e.target.value)}
              >
                <MenuItem value='Single'>Single</MenuItem>
                <MenuItem value='Married'>Married</MenuItem>
                <MenuItem value='Divorced'>Divorced</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <h5>House : </h5>
            <FormControl>
              <Select
                value={houseType}
                onChange={(e) => setHouseType(e.target.value)}
              >
                <MenuItem value='rented'>Rented(Family,Friend)</MenuItem>
                <MenuItem value='owned'>Owned</MenuItem>
                <MenuItem value='Company provided'>Company Provided</MenuItem>
                <MenuItem value='staying with parents'>
                  Staying with parents
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <h5>Langauage Preffered : </h5>
            <FormControl>
              <input
                className='input-field'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </FormControl>
          </ListItem>
          <ListItem>
            <h5>Home & Office Location: </h5>
            <FormControl>
              <input value={location} className='input-field' />
              <Button variant='contained' onClick={(e) => handleClickMap()}>
                Fetch automatically
              </Button>
            </FormControl>
          </ListItem>
          {/* <ListItem>
          <h5>Priorities : </h5>
          <FormControl>
            <TextField onChange={(e) => setPriorities(e.target.value)} />
          </FormControl>
        </ListItem> */}
          <ListItem>
            <Button
              variant='contained'
              onClick={handleSubmitDetails}
              color='primary'
            >
              Submit
            </Button>
          </ListItem>
        </List>
      </Card>
    </Container>
  );
};

export default SecondSubjectivePage;
