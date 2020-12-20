import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const body = {
            "email": email,
            "password": password
        }

        console.log(body) //To Backend
    }

    return (
            <div className="login-body">
                <form onSubmit={handleSubmit}>
                    <div className="top-container">
                        <h3>Willkommen zurück bei FabuCar</h3>
                        <p>
                            Melde dich mit deiner E-Mail Adresse oder deinem Benutzernamen an. Falls du dein Passwort nicht mehr weißt, klicke einfach auf “vergessen”.
                        </p>
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
                    <div className="bottom-container">
                        {/* Not a fan of a button wrapped in a link but this button seems redundant anyways because of 'Zurück' button in the top left corner */}
                        <button>Zurück</button>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
    );
}
