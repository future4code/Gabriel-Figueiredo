import React from "react";
import ApplicationFromPage from "./pages/ApplicationFormPage"
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AdminHomePage from "./pages/AdminHomePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
      <HomePage/>
      </Route>
      <Route exact path={"/trips/list"}>
     <ListTripsPage/>
     </Route>
     <Route exact path={"/trips/application"}>
     <ApplicationFromPage/>
     </Route>
     <Route exact path={"/login"}>
     <LoginPage/>
     </Route>
     <Route exact path={"/admin/trips/list"}>
     <AdminHomePage/>
     </Route>
     <Route exact path={"/admin/trips/create"}>
     <CreateTripPage/>
     </Route>
     <Route exact path={"/admin/trips/:id"}>
     <TripDetailsPage/>
     </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
