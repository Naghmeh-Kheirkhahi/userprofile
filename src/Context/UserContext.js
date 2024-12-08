
import React, { createContext, useEffect, useState } from "react";


export const UserContext = createContext();


export const UserProvider = ({ children }) => {

    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || ""; // If there is a username in the local storage, return it, otherwise return an empty string.
    })

    useEffect(() => {
        localStorage.setItem("username", username); // The Key is "username" and the Value is the username
    }, [username]);


    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
