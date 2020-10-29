import {
  Button,
  Card,
  CardContent,
  List,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
  TextField,
  ListItem,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const EmailForm = ({ setEmail }) => {
  let history = useHistory();
  const [emailField, setEmailField] = useState();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail(emailField);
    history.push("/user/phone");
  };
  return (
    <Container maxWidth='sm'>
      <Card>
        <CardContent>
          <form
            onSubmit={handleEmailSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") return handleEmailSubmit;
            }}
            className='form-container'
          >
            <List>
              <ListItem>
                <ThemeProvider theme={theme}>
                  <Typography variant='h4'> Enter Your Email</Typography>
                </ThemeProvider>
              </ListItem>
              <ListItem>
                <TextField
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email address'
                  required
                  onChange={(e) => setEmailField(e.target.value)}
                ></TextField>
              </ListItem>
              <ListItem>
                <Button type='submit' variant='contained' color='primary'>
                  {" "}
                  Next{" "}
                </Button>
              </ListItem>
            </List>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmailForm;
