import React from "react";
import ApplicationFromPage from "./pages/ApplicationFormPage"
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AdminHomePage from "./pages/AdminHomePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

const ContainerRota = styled.div ` 
background-image: url("https://mmedia.eluniversal.com/17805/un-viaje-espacial-largo-puede-alterar-tejido-gastrointestinal-de-astronautas-6744.jpg");
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
min-width: 100vw;
min-height: 100vh;
`




export function App() {
  return (
    <ContainerRota>
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
    </ContainerRota>
  );
}

export default App;
