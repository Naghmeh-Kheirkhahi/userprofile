
import React, {useContext} from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";


// protected route component used in the UserPanel page, checks if there is a username in the local storage. If there is no username, it will redirect to the Login page and in this way, it protects the userpanel or any page we wanna protect. also, children are used to wrap the UserPanel component or more than one components in the App.js file and they will be covered and protected by ProtectedRoute component. (with the help of Outlet)

// function ProtectedRoute({children}) {  

//     const { username } = useContext(UserContext);

//     if(!username) {
//         return <Navigate to='/Login' replace /> // if there is no username in the LS, it will redirect us to the Login page even we want to accsess the userpanel manually by entering its URL. and also we use replace to prevent the user from going back to the previous page from login.
//     }

//     return children;
// }

// export default ProtectedRoute;





// we use Outlet instead of children to wrap more than one component in the App.js file and they will be covered and protected by ProtectedRoute component.

function ProtectedRoute() {

    const { username } = useContext(UserContext);

    if(!username) {
        return <Navigate to='/Login' replace />
    }

    return <Outlet />;
}

export default ProtectedRoute;
