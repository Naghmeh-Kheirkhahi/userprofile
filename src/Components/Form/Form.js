
import React, { useState } from "react";
import './Form.css';


function Form() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);



    const showInformation = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <form onSubmit={showInformation}>
                <label htmlFor="fname">First Name: </label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..."
                    value={fname} onChange={(e) => setFname(e.target.value)} />

                <br />
                <label htmlFor="lname">Last Name: </label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..."
                    value={lname} onChange={(e) => setLname(e.target.value)} />

                <br />
                <label htmlFor="birthdate">Birth Date: </label>
                <input type="date" id="birthdate" name="birthdate" placeholder="Your birth date..."
                    value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />

                <br />
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email" name="email" placeholder="Your email address..."
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                <br />
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" placeholder="Your username..."
                    value={username} onChange={(e) => setUsername(e.target.value)} />

                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" placeholder="Your password..."
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <br />
                <button type="submit" className="btn">Submit</button>
            </form>

            <br /><br /><br /><br /><br />

            {submitted && (
                <div>
                    <h3>Form Data</h3>
                    <p><b>Name: </b>{fname} {lname}</p>
                    <p><b>Birth Date: </b>{birthDate}</p>
                    <p><b>Email Address: </b>{email}</p>
                    <p><b>Username: </b>{username}</p>
                    <p><b>Password: </b>{password}</p>
                </div>
            )}
        </div>
    )
}

export default Form;
















// The Second Way of Writing the Form Component
// 
// 
// import React, { useState } from "react";
// import './Form.css';
// 
// function Form() {
//     const [formData, setFormData] = useState({
//         fname: '',
//         lname: '',
//         birthDate: '',
//         email: '',
//         username: '',
//         password: ''
//     });
// 
//     const [submitted, setSubmitted] = useState(false);
// 
// 
// 
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     }
// 
//     const showInformation = (e) => {
//         e.preventDefault();
//         setSubmitted(true);
//     }
// 
// 
// 
//     return (
//         <div className="container">
//             <h2>Registration Form</h2>
//             <form onSubmit={showInformation}>
//                 <label htmlFor="fname">First Name: </label>
//                 <input type="text" id="fname" name="fname" placeholder="Your name..."
//                     value={formData.fname} onChange={handleChange} />
// 
//                 <br />
//                 <label htmlFor="lname">Last Name: </label>
//                 <input type="text" id="lname" name="lname" placeholder="Your last name..."
//                     value={formData.lname} onChange={handleChange} />
// 
//                 <br />
//                 <label htmlFor="birthdate">Birth Date: </label>
//                 <input type="date" id="birthdate" name="birthDate" placeholder="Your birth date..."
//                     value={formData.birthDate} onChange={handleChange} />
// 
//                 <br />
//                 <label htmlFor="email">Email Address: </label>
//                 <input type="email" id="email" name="email" placeholder="Your email address..."
//                     value={formData.email} onChange={handleChange} />
// 
//                 <br />
//                 <label htmlFor="username">Username: </label>
//                 <input type="text" id="username" name="username" placeholder="Your username..."
//                     value={formData.username} onChange={handleChange} />
// 
//                 <br />
//                 <label htmlFor="password">Password: </label>
//                 <input type="password" id="password" name="password" placeholder="Your password..."
//                     value={formData.password} onChange={handleChange} />
// 
//                 <br />
//                 <button type="submit" className="btn">Submit</button>
//             </form>
// 
//             <br /><br /><br /><br /><br />
// 
//             {submitted && (
//                 <div>
//                     <h3>Form Data</h3>
//                     <p><b>Name: </b>{formData.fname} {formData.lname}</p>
//                     <p><b>Birth Date: </b>{formData.birthDate}</p>
//                     <p><b>Email Address: </b>{formData.email}</p>
//                     <p><b>Username: </b>{formData.username}</p>
//                     <p><b>Password: </b>{formData.password}</p>
//                 </div>
//             )}
//         </div>
//     )
// }
// 
// export default Form;