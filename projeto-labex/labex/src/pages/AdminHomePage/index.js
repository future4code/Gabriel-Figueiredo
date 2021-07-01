import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AdminHomePage() {

  const [detail, setDetailPage] = useState("")

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

  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }

  const tripDetails = () => {
    history.push("/admin/trips/:id")
  }

  const createTrip = () => {
    history.push("/admin/trips/create")
  }
  return (
    <div>
     <h1>AdminHomePage</h1>
     <p>Nome : {detail.name}</p>
     <button onClick={pageHome}>Home</button>
     <button onClick={tripDetails}>Trip Details</button>
     <button onClick={createTrip}>Create trip</button>
     
    </div>
  );
}

export default AdminHomePage;