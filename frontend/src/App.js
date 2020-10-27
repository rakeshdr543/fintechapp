import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import RouteNavigation from "./components/RouteNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <NavBar />
        </header>
        <RouteNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
