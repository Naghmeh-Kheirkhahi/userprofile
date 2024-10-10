

import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";


function Test() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // the default of the error in useState is null because there is no error by default.

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                setData(res.data)
                setLoading(false);
            })
            .catch(error => { // we use it to show the errors found.

                setError(error.message)
                console.log(error);
                setLoading(true); // when we face any error , the web page must be loaded.
            })
    }, [])



    if (loading) { // when loading is true, the web page will be loaded and this bellow message will be shown.

        return <p>Loading...</p>
    }

    if (error) { // when error is true, the web page will have error and this bellow message will be shown.
        return <p>Error is: {error}</p>
    }



    return (


        <>
            {data.map(item => (
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

                    <Button/>

                </div>
            ))}

        </>
    )
}

export default Test;