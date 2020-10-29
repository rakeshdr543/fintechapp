import {
  Button,
  Card,
  CardContent,
  Container,
  createMuiTheme,
  List,
  ListItem,
  MenuItem,
  responsiveFontSizes,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const MobileForm = ({ setPhoneNumber }) => {
  let history = useHistory();
  const [code, setCode] = useState(91);
  const [numberField, setNumberField] = useState();
  const handlePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(`+${code} ${numberField}`);
    history.push("/user/verify-otp");
  };
  return (
    <Container maxWidth='sm'>
      <Card>
        <CardContent>
          <form
            className='form-container'
            onSubmit={handlePhoneNumber}
            onKeyDown={(e) => {
              if (e.key === "Enter") return handlePhoneNumber;
            }}
          >
            <List>
              <ListItem>
                <ThemeProvider theme={theme}>
                  <Typography variant='h4'> Verify using OTP</Typography>
                </ThemeProvider>
              </ListItem>
              <ListItem>
                {/* <TextField
                  id='select'
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  select
                >
                  <MenuItem value={91}>+91</MenuItem>
                  <MenuItem value={44}>+44</MenuItem>
                  <MenuItem value={21}>+21</MenuItem>
                </TextField> */}
                <Select
                  name='countryCode'
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                >
                  <MenuItem value={91}>India (+91)</MenuItem>

                  <MenuItem value={44}>UK (+44)</MenuItem>
                  <MenuItem value={21}>Algeria (+21)</MenuItem>
                </Select>
                <TextField
                  type='text'
                  name='number'
                  id='number'
                  placeholder='Enter Mobile No'
                  maxLength={10}
                  required
                  onChange={(e) => setNumberField(e.target.value)}
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

export default MobileForm;
