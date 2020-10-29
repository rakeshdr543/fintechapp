import React from "react";
import ObjectiveRoutes from "../screans/objective/ObjectiveRoutes";
import QuestionRoutes from "../screans/questions/QuestionRoutes";
import SignRoutes from "../screans/registration/SignRoutes";
import SubjectiveRoute from "../screans/subjective/SubjectiveRoute";

const RouteNavigation = () => {
  return (
    <main className='main'>
      <SignRoutes />
      <QuestionRoutes />
      <SubjectiveRoute />
      <ObjectiveRoutes />
    </main>
  );
};

export default RouteNavigation;
