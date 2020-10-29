import React from "react";
import { Route } from "react-router";
import SelectionPage from "./SelectionPage";

const ObjectiveRoutes = () => {
  return (
    <div>
      <Route
        path='/objective'
        exact={true}
        render={(props) => <SelectionPage {...props} />}
      />
    </div>
  );
};

export default ObjectiveRoutes;
