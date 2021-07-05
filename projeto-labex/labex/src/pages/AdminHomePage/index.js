import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div ` 
border: 2px solid white;

`
const Card = styled.div ` 
background-color: white;
border: 2px solid yellow;
display: flex;
justify-content: space-around;
align-self: center;
width: 400px;
`

function AdminHomePage() {

  const [listaViagem, setListaViagem] = useState([])
  const [remove, setRemove] = useState("")
  const params = useParams()
  useEffect(() => {
    trip()
  },[])
  const trip = () => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trips`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      setListaViagem(response.data.trips)
    })
    .catch((error) => {
      console.log("não logado", error.response);
    })
  }

  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }

  const tripDetails = (id) => {
    history.push(`/admin/trips/${id}`)
  }

  const createTrip = () => {
    history.push("/admin/trips/create")
  }


const deleteTrip = (id) => {
  const token = localStorage.getItem("token")
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trips/${id}`, {
    headers: {
      auth: token
    }
  })
  .then((response) => {
    setRemove(response.data)
    trip()
  })
  .catch((error) => {
    console.log("nao foi removido", error.response);
  })
}
return (
  <div>
    <Container>
     <h1>AdminHomePage</h1>
     {listaViagem.map((lista) => {
       return <Card key={lista.id} >
         <p  onClick={() =>tripDetails(lista.id)}>{lista.name}</p>
         <button onClick={() => deleteTrip(lista.id)}>Delete</button>
       </Card >
     })}
     </Container>
     <button onClick={pageHome}>Home</button>
     <button onClick={createTrip}>Create trip</button>
     
    </div>
  );
}

export default AdminHomePage;