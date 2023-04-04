import React, { useState } from 'react';

const MyForm = props => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password};
        console.log("Hello, " + newUser)
    };

    return(
        <div>
            <form onSubmit={createUser} className="form-center">
                <div className="form-fields">
                    <label>First Name</label>
                    <input type="text" onChange={e => setFirstname(e.target.value)} />
                </div>
                <div className="form-fields">
                    <label>Last Name</label>
                    <input type="text" onChange={e => setLastname(e.target.value)} />
                </div>
                <div className="form-fields">
                    <label>Email</label>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-fields">
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-fields">
                    <label>Confirm Password</label>
                    <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </div>
            </form>
            <div className="form-output">
                <p>First Name {firstname}</p>
                <p>Last Name {lastname}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmPassword}</p>
            </div>
        </div>
    );
};

export default MyForm;

