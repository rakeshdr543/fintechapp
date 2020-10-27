import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Card, Container, Grid, List, ListItem } from "@material-ui/core";
import { useHistory } from "react-router";

const FifthQpage = ({ setAnsFive, handleSaveAnswers }) => {
  let history = useHistory();
  // const [option,setOption]=useState('')
  const [seconds, setSeconds] = useState(7);

  const handleChange = async (choice) => {
    // setOption(choice);
    // setAnsFive(option);
    setTimeout(() => {
      // handleSaveAnswers();
      history.push("/subjective/first");
    }, 200);
  };

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      history.push("/subjective/first");
    }
    return () => {
      handleSaveAnswers();
    };
  });
  return (
    <Box>
      <Container>
        <div className='q-container'>
          <div className='timer'>
            <span className='timer-container'>{seconds}</span>
          </div>
          <List>
            <h2>
              5. You've allocated work to a person, but the individual fails to
              accomplish it . What would you do ?{" "}
            </h2>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItem>
                    {" "}
                    <p
                      onClick={(e) => {
                        setAnsFive("a");
                        handleChange();
                      }}
                    >
                      A. Punish him/her to show him how it should be with you{" "}
                    </p>
                  </ListItem>
                  <ListItem>
                    {" "}
                    <p
                      onClick={(e) => {
                        setAnsFive("b");
                        handleChange();
                      }}
                    >
                      B. Make him/her listen about importance of responsibility{" "}
                    </p>{" "}
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem>
                    {" "}
                    <p
                      onClick={(e) => {
                        setAnsFive("c");
                        handleChange();
                      }}
                    >
                      C. Forgive the person for this time{" "}
                    </p>
                  </ListItem>
                  <ListItem>
                    {" "}
                    <p
                      onClick={(e) => {
                        setAnsFive("d");
                        handleChange();
                      }}
                    >
                      D. Understand why it didn't happen{" "}
                    </p>
                  </ListItem>
                </Grid>
              </Grid>
            </Card>
          </List>
        </div>
      </Container>
    </Box>
  );
};

export default FifthQpage;
