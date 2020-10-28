import axios from "axios";
import React, { useState } from "react";
import { Route } from "react-router";
import EmailForm from "./EmailForm";
import MobileForm from "./MobileForm";
import NameForm from "./NameForm";
import OTPVerification from "./OTPVerification";

const SignRoutes = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();

  const handleSaveUser = async () => {
    const { data } = await axios.post("/api/users/register", {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    });
    localStorage.setItem("user", JSON.stringify(data));
    console.log("saved data", data);
    const res = localStorage.getItem("user");
    console.log("data from local storage", JSON.parse(res));
  };

  return (
    <div className='content'>
      <Route
        path='/'
        exact={true}
        render={(props) => <NameForm {...props} setName={setName} />}
      />
      <Route
        path='/user/email'
        exact={true}
        render={(props) => <EmailForm {...props} setEmail={setEmail} />}
      />
      <Route
        path='/user/phone'
        render={(props) => (
          <MobileForm {...props} setPhoneNumber={setPhoneNumber} />
        )}
      />

      <Route
        path='/user/verify-otp'
        render={(props) => (
          <OTPVerification
            {...props}
            handleSaveUser={handleSaveUser}
            phoneNumber={phoneNumber}
          />
        )}
      />
    </div>
  );
};
export default SignRoutes;
