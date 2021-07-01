import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function TripDetailsPage() {

  const [detail, setDetailPage] = useState("")
  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trip/Z8NOkDl2y02uZc2Zc8jC", {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      console.log("Logado", response.data.trip);
      setDetailPage(response.data.trip)
    })
    .catch((error) => {
      console.log("não logado", error.response);
    })
  },[])
  return (
    <div>
     <h1>TripDetailsPage</h1>
     <button onClick={pageHome}>Home</button>
    </div>
  );
}

export default TripDetailsPage;