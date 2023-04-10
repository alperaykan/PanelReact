import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useSporcular() {
    const [sporcular,SetSporcular] = useState([]);
    const [dolu, SetDolu] = useState(false);

    useEffect(() => {
      getSporcular();
    },[])

    const getSporcular = () => {
      axios.get("https://apipanel.performa.nz/api/Sporcular").then(
        (res) => {
          SetSporcular(res.data.data);
          SetDolu(true);
          console.log(sporcular);
          console.log(dolu);
        }
      )
    };

  return (
    sporcular,
    SetSporcular,
    dolu, 
    SetDolu
  )
}

export default useSporcular