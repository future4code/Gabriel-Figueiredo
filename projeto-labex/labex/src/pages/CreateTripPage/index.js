import React from "react";
import { useHistory } from "react-router-dom";

function CreateTripPage() {
  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }
  return (
    <div>
     <h1>CreateTripPage</h1>
     <button onClick={pageHome}>Create trip</button>
    </div>
  );
}

export default CreateTripPage;