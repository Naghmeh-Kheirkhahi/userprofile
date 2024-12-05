
import react, {useContext} from 'react';

import {UserContext} from '../../Context/UserContext';

function DisplayUsername() {

    const {username} = useContext(UserContext);
    console.log('current username:' + username);

    return (
        <>
            <div>
                <br /> <br /> <br /> <br /> <br /> <br />
                <h1>Hello, {username}! Welcome to Your Panel!</h1>
            </div>
        </>
    )
}


export default DisplayUsername;