import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Box } from "@material-ui/core";




const Contaniner = styled.div ` 
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`
const Titulo = styled.h1 ` 
color: black;
margin-right: 100px;

`



export function HomePage() {

    const history = useHistory()

    const pageTrip= () => {
        history.push("/trips/list")
    }
    const pageAdmin= () => {
        history.push("/login")
    }
  return (
    
    <Contaniner>
      <Titulo >LabeX</Titulo >
      <Box component="div" display="inline" m={2} >
      <Button onClick={pageTrip} variant="outlined" color="secondary" size="small"  >Viagens</Button>
      </Box>
      <Box component="div" display="inline" m={2} >
      <Button onClick={pageAdmin} variant="outlined" color="secondary" size="small">Login</Button>
      </Box>
    </Contaniner>
  );
}

export default HomePage;