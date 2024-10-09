

import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";


function Test() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res);
            setData(res.data)
            setLoading(false);
        })
        .catch(error=>{

         setError(error.message)
        console.log(error);
        setLoading(true);
        })
    },[])



if(loading){

    return <p>Loading...</p>
}

if (error) {
    return <p>Error is: {error}</p>
}



    return (


        <>
            {data.map(item=>(
                <div>
                    <div>{item.username}</div>
                    <div>{item.email}</div>
                    <div>{item.address.street}</div>
                    <div>{item.address.suite}</div>
                    <div>{item.address.city}</div>
                    <div>{item.address.zipcode}</div>
                    <div>{item.address.geo.lat}</div>
                    <div>{item.address.geo.lng}</div>
                    <div>{item.phone}</div>
                    <div>{item.website}</div>
                    <div>{item.company.name}</div>
                    <div>{item.company.catchPhrase}</div>
                    <div>{item.company.bs}</div>  <div>{item.name}</div>
                    <Button 

                    name={item.name}
                    email={item.email}
                    phone={item.phone}


/>
                  
                </div>
            ))}
        
        </>
    )
}

export default Test;