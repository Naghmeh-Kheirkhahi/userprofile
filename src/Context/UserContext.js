
import React, { createContext, useEffect, useState } from "react";


export const UserContext = createContext();


export const UserProvider = ({ children }) => {

    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || ""; // If there is a username in the local storage, return it, otherwise return an empty string.
    })

    // children are used  to wrap the components that will be used in the app. It is used to connect the components to the UserContext.

    useEffect(() => {
        localStorage.setItem("username", username); // The Key is "username" and the Value is the username
    }, [username]);


    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
