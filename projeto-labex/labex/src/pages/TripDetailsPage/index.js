import React from "react";
import { useHistory } from "react-router-dom";

function TripDetailsPage() {

  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }
  return (
    <div>
     <h1>TripDetailsPage</h1>
     <button onClick={pageHome}>Home</button>
    </div>
  );
}

export default TripDetailsPage;