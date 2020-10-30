import React from "react";
import { Route } from "react-router";
import MutualFundPage from "./MutualFundPage";
import SelectionPage from "./SelectionPage";

const ObjectiveRoutes = () => {
  return (
    <div>
      <Route
        path='/objective'
        exact={true}
        render={(props) => <SelectionPage {...props} />}
      />
      <Route
        path='/mutualFund'
        exact={true}
        render={(props) => <MutualFundPage {...props} />}
      />
    </div>
  );
};

export default ObjectiveRoutes;
