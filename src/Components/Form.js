
import React from "react";
import { useState } from "react";
import './Form.css';



function Form() {


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const showInformation = () => {

    }






    

    return (
        <div class="container">

            <h2>Registration Form</h2>

            <form action="/action_page.php">
                <label for="fname">First Name: </label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..."/>

                <br/>
                <label for="lname">Last Name: </label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..."/>

                <br/>
                <label for="birthdate">Birth Date: </label>
                <input type="date" id="birthdate" name="birthdate" placeholder="Your birth date..."/>

                <br/>
                <label for="email">Email Address: </label>
                <input type="email" id="email" name="email" placeholder="Your email address..."/>

                <br/>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" placeholder="Your username..."/>

                <br/>
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" placeholder="Your password..."/>

                <br/>
                <button type="submit" class="btn" onClick={showInformation}>Submit</button>

            </form>

            <br/><br/><br/><br/><br/>

            <div>
                <h3>Form Data</h3>
                <p><b>Name: </b></p>
                <p><b>Birth Date: </b></p>
                <p><b>Email Address: </b></p>
                <p><b>Username: </b></p>
                <p><b>Password: </b></p>
            </div>
        </div>
    )
}




export default Form;