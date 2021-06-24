import React from "react";
import { useHistory } from "react-router-dom";


export function HomePage() {

    const history = useHistory()

    const pageTrip= () => {
        history.push("/trips/list")
    }
    const pageAdmin= () => {
        history.push("/login")
    }
  return (
    
    <div>
     <button onClick={pageTrip}>Ver Viagem</button>
     <button onClick={pageAdmin}>Admin</button>
    </div>
  );
}

export default HomePage;