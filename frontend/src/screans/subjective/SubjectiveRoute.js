import axios from "axios";
import React, { useState } from "react";
import { Route } from "react-router";
import Testing from "../Testing";
import FirstSubjectivePage from "./FirstSubjectivePage";
import SecondSubjectivePage from "./SecondSubjectivePage";

const SubjectiveRoute = () => {
  const [userType, setUserType] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState();
  const [dependent, setDependent] = useState("");
  const [digitalUse, setDigitalUse] = useState("");
  const [dob, setDob] = useState();
  const [city, setCity] = useState();

  const [location, setLocation] = useState("");
  const [financeStatus, setFinancialStatus] = useState("");
  const [relationShip, setRelationShip] = useState("");
  const [houseType, setHouseType] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmitDetails = async () => {
    if (
      userType &&
      company &&
      position &&
      dependent &&
      digitalUse &&
      dob &&
      city &&
      location &&
      financeStatus &&
      relationShip &&
      houseType &&
      language
    ) {
      const res = localStorage.getItem("user");
      const user = JSON.parse(res);
      const { data } = await axios.post("/api/subjective", {
        userId: user._id,
        userType: userType,
        company: company,
        position: position,
        dependent: dependent,
        digitalUse: digitalUse,
        dob: dob,
        city: city,
        location: location,
        financeStatus: financeStatus,
        relationShip: relationShip,
        houseType: houseType,
        language: language,
      });
      console.log("subjective inserted", data);
    }
  };
  return (
    <div className='content'>
      <Route
        path='/subjective/first'
        exact={true}
        render={(props) => (
          <FirstSubjectivePage
            {...props}
            userType={userType}
            setUserType={setUserType}
            company={company}
            setCompany={setCompany}
            position={position}
            setPosition={setPosition}
            dependent={dependent}
            setDependent={setDependent}
            digitalUse={digitalUse}
            setDigitalUse={setDigitalUse}
            dob={dob}
            setDob={setDob}
            city={city}
            setCity={setCity}
          />
        )}
      />
      <Route
        path='/subjective/second'
        exact={true}
        render={(props) => (
          <SecondSubjectivePage
            {...props}
            financeStatus={financeStatus}
            setFinancialStatus={setFinancialStatus}
            relationShip={relationShip}
            setRelationShip={setRelationShip}
            houseType={houseType}
            setHouseType={setHouseType}
            language={language}
            setLanguage={setLanguage}
            location={location}
            handleSubmitDetails={handleSubmitDetails}
          />
        )}
      />
      <Route
        path='/getLocation'
        exact={true}
        render={(props) => <Testing {...props} setLocation={setLocation} />}
      />
    </div>
  );
};

export default SubjectiveRoute;
