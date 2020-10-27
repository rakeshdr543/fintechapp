import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card } from "@material-ui/core";

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
    <div className='form'>
      <Card>
        <form
          className='form-container'
          onSubmit={otpHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") return otpHandler;
          }}
        >
          <h2>Verifying Your Number</h2>
          {success && <ToastContainer position='top-center' />}
          <p>We have sent you an OTP to your number {phoneNumber} </p>
          {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}

          <div className='verify-form'>
            <input
              type='text'
              maxLength={1}
              onChange={(e) => setV1(e.target.value)}
            />
            <input
              type='text'
              maxLength={1}
              onChange={(e) => setV2(e.target.value)}
            />
            <input
              type='text'
              maxLength={1}
              onChange={(e) => setV3(e.target.value)}
            />
            <input
              type='text'
              maxLength={1}
              onChange={(e) => setV4(e.target.value)}
              required
            />
          </div>
          <Button type='submit' variant='contained' color='primary'>
            {" "}
            Next{" "}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default OTPVerification;
