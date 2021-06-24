import React from "react";
import { useHistory } from "react-router-dom";

function ListTripsPage() {

  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }
  const pageRegister = () => {
    history.push("/trips/application")
  }
  return (
    <div>
     <button onClick={pageHome}>ListTripsPage</button>
     <button onClick={pageRegister}>Inscrever-se</button>
    </div>
  );
}

export default ListTripsPage;