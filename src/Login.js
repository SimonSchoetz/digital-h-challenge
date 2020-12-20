import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import GoBack from './components/GoBackButton';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toLanding, setToLanding] = useState(false);

    if (toLanding) {return <Redirect to="/" />}

    const handleSubmit = e => {
        e.preventDefault();
        const body = {
            "email": email,
            "password": password
        };

        //body would get sent to the server to be processed and validated there
        console.log(body)
        //End of this function would trigger a redirection to the home page
    }

    return (
        <div className="login-component">
            <div className="login-body">
                <div>
                    <h2>
                        Willkommen zurück bei FabuCar
                    </h2>
                    <p>
                        Melde dich mit deiner E-Mail Adresse oder deinem Benutzernamen an. Falls du dein Passwort nicht mehr weißt, klicke einfach auf “vergessen”.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">
                            <input 
                            required 
                            type="email" 
                            id="email" 
                            placeholder="E-Mail Adresse oder Benutzername" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label htmlFor="password">
                            <input 
                            required 
                            type="password" 
                            id="password" 
                            placeholder="Passwort" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <Link to="#">Vergessen</Link>
                    </div>
                    <div className="bottom-btn-container">
                        <button onClick={()=>setToLanding(true)}>Zurück</button>
                        <input 
                        type="submit" 
                        value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}
