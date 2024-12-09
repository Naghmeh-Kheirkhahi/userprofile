
import React, {useContext} from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";





function Logout() {

    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUsername("");
        localStorage.removeItem("username");

        navigate("/Login");
    }


    return (
        <>
            <button onClick={handleLogout}><i class="fa fa-sign-out"></i> Logout</button>
        </>
    )
}

export default Logout;