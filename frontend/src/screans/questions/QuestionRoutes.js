import React, { useState } from "react";
import { Route } from "react-router";
import axios from "axios";
import FirstQpage from "./FirstQpage";
import SecondQpage from "./SecondQpage";
import ThirdQpage from "./ThirdQpage";
import FourthQpage from "./FourthQpage";
import FifthQpage from "./FifthQpage";

const QuestionRoutes = () => {
  const [saved, setSaved] = useState(false);
  const [ansOne, setAnsOne] = useState();
  const [ansTwo, setAnsTwo] = useState();
  const [ansThree, setAnsThree] = useState();
  const [ansFour, setAnsFour] = useState();
  const [ansFive, setAnsFive] = useState();

  const handleSaveAnswers = async () => {
    console.log("checking ans in ", ansOne, ansTwo, ansThree, ansFour, ansFive);
    if (ansOne && ansTwo && ansThree && ansFour && ansFive && !saved) {
      const { data } = await axios.post("/api/answers", {
        userId: "12345",
        q1: ansOne,
        q2: ansTwo,
        q3: ansThree,
        q4: ansFour,
        q5: ansFive,
      });
      setSaved(true);
      console.log("saved data", data);
    }
  };

  return (
    <div className='content'>
      <Route
        path='/qstns/page1'
        exact={true}
        render={(props) => <FirstQpage {...props} setAnsOne={setAnsOne} />}
      />

      <Route
        path='/qstns/page2'
        exact={true}
        render={(props) => <SecondQpage {...props} setAnsTwo={setAnsTwo} />}
      />

      <Route
        path='/qstns/page3'
        exact={true}
        render={(props) => <ThirdQpage {...props} setAnsThree={setAnsThree} />}
      />

      <Route
        path='/qstns/page4'
        exact={true}
        render={(props) => <FourthQpage {...props} setAnsFour={setAnsFour} />}
      />

      <Route
        path='/qstns/page5'
        exact={true}
        render={(props) => (
          <FifthQpage
            {...props}
            setAnsFive={setAnsFive}
            handleSaveAnswers={handleSaveAnswers}
          />
        )}
      />
    </div>
  );
};

export default QuestionRoutes;
