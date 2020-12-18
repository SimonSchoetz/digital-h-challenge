import React, {useContext} from 'react';
import { Context } from '../../Context';
import { Link } from "react-router-dom";

export default function RegStep2({i}) {
    const {email, setEmail, step, setStep} = useContext(Context);
    const side = () => {
        if (step === i) return "center"
        if (step < i ) return "to-right"
        if (step > i ) return "to-left"
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (email) setStep(step + 1)
    }

    return (
        <form className={`registration-form ${side()}`} onSubmit={handleSubmit}>
            <div className={`registration-top`}>
                <h2>Gib deinen E-Mail Adresse ein</h2>
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
                <div className={`bottom-btn-container`}>
                        <button onClick={()=>setStep(step - 1)}>Zurück</button>
                        <input type="submit" value="Weiter"/>
                </div>
            </div>
        </form>
    )
}