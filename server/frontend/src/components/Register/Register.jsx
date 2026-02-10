import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        // منطق إرسال البيانات إلى الـ API
    };

    return (
        <div className="register_container">
            <div className="header">
                <span className="text">Sign Up</span>
            </div>
            <form onSubmit={register}>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required/>
                    </div>
                    <div className="input">
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                </div>
                <div className="submit_container">
                    <button type="submit" className="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
