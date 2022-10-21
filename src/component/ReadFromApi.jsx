import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import "../styles/ReadFromApi.css"

// https://randomuser.me/api

const fetchData = async () => {
    // on console
  return axios
    .get("https://randomuser.me/api")
    .then((res) => {
        //console.log(res)
        return JSON.stringify(res, null, 2)
    })
    .catch((err) => console.error(err));
};

const ReadFromApi = () => {

    const [randomData, setRandomData]=useState('');

    useEffect(()=>{
        fetchData().then((data)=>{
            setRandomData(data ||"no data")
        })

    },[])

  return (
    <div>
        {/* this did it on console, noe on screen need state & for on page loaod */}

        <h1>Read API Data on Load</h1>
      <pre>{randomData}</pre>
    </div>
  );
};

export default ReadFromApi;
