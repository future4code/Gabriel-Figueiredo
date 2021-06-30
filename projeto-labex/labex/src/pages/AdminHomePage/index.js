import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function AdminHomePage() {

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
     <button onClick={pageHome}>Home</button>
     <button onClick={tripDetails}>Trip Details</button>
     <button onClick={createTrip}>Create trip</button>
     
    </div>
  );
}

export default AdminHomePage;