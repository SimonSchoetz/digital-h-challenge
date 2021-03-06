import React, {useContext} from 'react';
import { Context } from '../../Context';
import { Link } from "react-router-dom";

export default function RegStep2({position}) {
    const {email, setEmail, step, setStep} = useContext(Context);
    
    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            email: email
        }
        //If you don't see this console.log it's probably because you didn't submit something that looks like an email (input type email validation)
        console.log(body); //To Backend
    }
    return (
        <>
            <form className={`${position}`} onSubmit={handleSubmit}>
                <div className={`top-container step-2`}>
                    <h3>Gib deinen E-Mail Adresse ein</h3>
                    <label htmlFor="email">
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="E-Mail Adresse oder Benutzername" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <p>
                    Mit dem Fortfahren der Registrierung bestätige ich die <Link to="#">Hinweise zum Datenschutz</Link> sowie die geltenden <Link to="#">Nutzungsbedingungen</Link> gelesen und akzeptiert zu haben.
                    </p>
                </div>
                <div className={`bottom-container`}>
                    <button type="button" onClick={()=>setStep(step - 1)}>Zurück</button>
                    <input disabled={!email} onClick={()=>setStep(step + 1)} type="submit" value="Weiter" />
                </div>
            </form>
        </>
    );
}