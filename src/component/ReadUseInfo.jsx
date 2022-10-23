import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import "../styles/ReadUseInfo.css"

// https://randomuser.me/api

const fetchData = async () => {
    // on console
  return axios
    .get("https://randomuser.me/api")
    .then((data) => {
        //console.log(res)
        return data
    })
    .catch((err) => console.error(err));
};

const getUserInfo=(useInfo)=>{
    const {name: {first,last}}=useInfo;
    console.log(first,last);
    return `${first} ${last}`

}

const ReadUseInfo = () => {

    const [userInfo, setUserInfo]=useState([]);

    useEffect(()=>{
        fetchData().then((data)=>{
            console.log(data);
            setUserInfo(data.data.results)
        })
        
    },[])
    
    // console.log(userInfo);
  return (
    <div>

        <h1>3. Read User Info from API</h1>

        {
            userInfo.map((userinfo, index)=>(
                <div key={index}>
                    <p>{getUserInfo(userinfo)}</p>
                    <div>
                        <img src={userinfo.picture.thumbnail} alt='/' />
                    </div>
                </div>
            ))
        }
    </div>
  );
}

export default ReadUseInfo
