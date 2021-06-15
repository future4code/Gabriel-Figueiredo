import React, { useState } from 'react'
import axios from 'axios'
import { baseUrlClear } from '../../constant'




function ClearMatches() {

  const [remove, setRemove] = useState([])

  const removeMatches = () => {
    const body = {
      id: "wkbSFXRvGbKQv5uvilMu",
    }
    axios.put(baseUrlClear, body)
      .then((response) => {
        console.log(response.data);
        setRemove(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      })
  }

  return (
    <div>
      <button onClick={removeMatches}>Remove Matches</button>
    </div>
  )
}


export default ClearMatches;