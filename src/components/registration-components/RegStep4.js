import React, {useContext, useState } from 'react';
import { Context } from '../../Context';

export default function RegStep2({position}) {
    const {step, setStep} = useContext(Context);
    const [password, setPassword] = useState("");  
    const [passwordRep, setPasswordRep] = useState("");         
    
    const handleSubmit = e => {
        e.preventDefault()
        if (password === passwordRep) {
            const body = {
                password: password
            }
            console.log(body) //to Backend
        }
    }

    return (
        <form className={`registration-form ${position}`} onSubmit={handleSubmit}>
            <div className={`registration-top`}>
                <h3>Sichere dein Konto mit einem Passwort</h3>
                <label htmlFor="password">
                    <input 
                    type="password" 
                    id="password" 
                    placeholder="Passwort" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label htmlFor="passwordRep">
                    <input 
                    type="password" 
                    id="passwordRep" 
                    placeholder="Passwort wiederholen" 
                    value={passwordRep} 
                    onChange={(e) => setPasswordRep(e.target.value)} />
                </label>
                <p>
                Das Passwort muss mindestens 8 Zeichen lang sein und sowohl Zahlen wie auch Buchstaben enthalten.
                </p>
                <div className={`bottom-btn-container`}>
                    <button type="button" onClick={()=>setStep(step - 1)}>Zurück</button>
                    <input disabled={!password} onClick={()=>setStep(step + 1)} type="submit" value="Weiter" />
                </div>
            </div>
        </form>
    );
}