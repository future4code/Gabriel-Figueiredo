import React from "react";
import { useHistory } from "react-router-dom";

function ApplicationFromPage() {

  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }
  return (
    <div>
     <button onClick={pageHome}>ApplicationFromPage</button>
    </div>
  );
}

export default ApplicationFromPage;