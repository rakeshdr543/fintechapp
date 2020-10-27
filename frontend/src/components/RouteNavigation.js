import React from "react";
import QuestionRoutes from "../screans/questions/QuestionRoutes";
import SignRoutes from "../screans/registration/SignRoutes";
import SubjectiveRoute from "../screans/subjective/SubjectiveRoute";

const RouteNavigation = () => {
  return (
    <main className='main'>
      <SignRoutes />
      <QuestionRoutes />
      <SubjectiveRoute />
    </main>
  );
};

export default RouteNavigation;
