import React, {useContext} from 'react';
import { Context } from '../../Context';

export default function RegStepOne() {
    const {email, setEmail, step} = useContext(Context);
    const side = () => {
        if (step === 2) return "center"
        if (step < 2 ) return "to-right"
        if (step > 2 ) return "to-left"
    }
    return (
        <div className={`${side()}`}>
            <h2>Gib deinen E-Maio Adresse ein</h2>
            <label htmlFor="email">
                <input 
                type="email" 
                id="email" 
                placeholder="E-Mail Adresse oder Benutzername" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <p>
            Mit dem Fortfahren der Registrierung bestätige ich die Hinweise zum Datenschutz sowie die geltenden Nutzungsbedingungen gelesen und akzeptiert zu haben.
            </p>
        </div>
    )
}