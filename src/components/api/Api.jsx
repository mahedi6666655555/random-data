import React, { useEffect, useState } from 'react';

const Api = () => {
    let [api,setAis]=useState([])

    useEffect(()=>{

        fetch("https://random-data-api.com/api/v2/appliances")
        .then(res=>res.json())
        .then((data)=>console.log(data))

    },[])
    return (
        <div>
            
        </div>
    );
};

export default Api;