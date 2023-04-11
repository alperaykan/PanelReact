import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';


function useSporcular() {
    const [response,SetResponse] = useState([]);
    const [doldu, SetDoldu] = useState(false);

    useEffect(() => {
      const fetch = () => {
        getSporcular();
      }
      fetch();
    },[])

    const Detay = (e) => {
      console.log(e);
    }

    const getSporcular = async () => {
      await axios.get("https://apipanel.performa.nz/api/Sporcular").then(
        (res) => {
          console.log(res);
          console.log(res.data);
          console.log(res.data.data);
          var data = res.data.data;
          SetResponse(data);
          
          if(data.length != 0){
            SetDoldu(true);
            console.log(response);
          }
        }
      ).catch(err => {
          console.log(err);
          toast.error(err)
      })
    };

  return ({
    response,
    SetResponse,
    doldu, 
    SetDoldu,
    Detay
  })
}

export default useSporcular