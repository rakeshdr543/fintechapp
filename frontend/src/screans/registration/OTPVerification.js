import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const OTPVerification = ({ phoneNumber, handleSaveUser }) => {
  let history = useHistory();
  const [v1, setV1] = useState();
  const [v2, setV2] = useState();
  const [v3, setV3] = useState();
  const [v4, setV4] = useState();
  const [otp, setOtp] = useState();
  const [errMsg, setErrorMsg] = useState();
  const [success, setSuceess] = useState(false);

  let check = "1234";
  const notify = () => {
    toast(`OTP verification is Successful !!! 

          You are Redirected to Questions Page in 5 Seconds`);
  };

  const otpHandler = (e) => {
    e.preventDefault();
    setOtp(`${v1}${v2}${v3}${v4}`);

    setTimeout(() => {
      if (otp !== check) {
        setErrorMsg("* Please Enter Correct OTP");
      }
    }, 300);
  };
  useEffect(() => {
    if (otp === check) {
      setErrorMsg("");
      setSuceess(true);
      handleSaveUser();
      setTimeout(() => {
        history.push("/qstns/page1");
      }, 5000);
    }
  });
  useEffect(() => {
    if (success) {
      notify();
    }
  }, [success]);
  return (
    <Container maxWidth='sm'>
      <Card>
        <CardContent>
          <form
            className='form-container'
            onSubmit={otpHandler}
            onKeyDown={(e) => {
              if (e.key === "Enter") return otpHandler;
            }}
          >
            <List>
              <ListItem>
                <ThemeProvider theme={theme}>
                  <Typography variant='h4'> Verifying Your Number</Typography>
                </ThemeProvider>
              </ListItem>
              {success && <ToastContainer position='top-center' />}
              <ListItem>
                <ThemeProvider theme={theme}>
                  <Typography variant='h6'>
                    {" "}
                    We have sent you an OTP to your number {phoneNumber}
                  </Typography>
                </ThemeProvider>
              </ListItem>
              {/* <p>We have sent you an OTP to your number {phoneNumber} </p> */}
              {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
              <ListItem>
                <div className='verify-form'>
                  <TextField
                    type='text'
                    maxLength={1}
                    onChange={(e) => setV1(e.target.value)}
                  />
                  <TextField
                    type='text'
                    maxLength={1}
                    onChange={(e) => setV2(e.target.value)}
                  />
                  <TextField
                    type='text'
                    maxLength={1}
                    onChange={(e) => setV3(e.target.value)}
                  />
                  <TextField
                    type='text'
                    maxLength={1}
                    onChange={(e) => setV4(e.target.value)}
                    required
                  />
                </div>
              </ListItem>
              <ListItem>
                <Button type='submit' variant='contained' color='primary'>
                  {" "}
                  Submit{" "}
                </Button>
              </ListItem>
            </List>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OTPVerification;
