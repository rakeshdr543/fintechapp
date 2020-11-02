import React, { useState } from "react";
import { Route } from "react-router";
import CreditCardBills from "./pages/CreditCardBills";
import InsurancePremium from "./pages/InsurancePremium";
import MutualFundPage from "./pages/MutualFundPage";
import SelectionPage from "./SelectionPage";

const ObjectiveRoutes = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedPages = (items) => {
    setSelectedItems(items);
  };
  return (
    <div>
      <Route
        path='/objective'
        exact={true}
        render={(props) => (
          <SelectionPage
            {...props}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleSelectedPages={handleSelectedPages}
          />
        )}
      />
      <Route
        path='/mutualFund'
        exact={true}
        render={(props) => <MutualFundPage {...props} />}
      />

      <Route
        path='/creditCard'
        exact={true}
        render={(props) => <CreditCardBills {...props} />}
      />
      <Route
        path='/insurancePremium'
        exact={true}
        render={(props) => <InsurancePremium {...props} />}
      />
    </div>
  );
};

export default ObjectiveRoutes;
