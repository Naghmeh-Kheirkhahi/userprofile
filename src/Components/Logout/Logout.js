
import React, {useContext} from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";





function Logout() {

    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUsername("");
        localStorage.removeItem("username");

        navigate("/Login"); // After the user logs out, they will be redirected to the Login page and they can't go back to the UserPanel page by clicking the back button because there is nothing in the last state of username of useState and LS , so the UserPanel page is protected by the ProtectedRoute component in the App.js file. After that, the ProtectedRoute component checks if there is a username in the local storage. If there is no username, it will redirect to the Login page and in this way, it protect will the userpanel or any page we wanna protect.
    }


    return (
        <>
            <Link onClick={handleLogout}><i class="fa fa-sign-out"></i><p> Log out</p></Link>
        </>
    )
}

export default Logout;