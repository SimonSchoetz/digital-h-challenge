import React, { useContext, useState } from 'react';
import { Context } from '../../Context';

export default function RegStep1({position}) {
    const {step,  setStep} = useContext(Context);
    const [fullName, setFullName] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            fullName: fullName
        }
        console.log(body) //To Backend
    }

    return (
        <form className={`${position}`} onSubmit={handleSubmit}>
            <div className="top-container step-1">
                <h3>Gib deinen Namen ein</h3>
                <p>
                Wichtig ist, dass du deinen richtigen Namen eingibst, da wir nur so deine Qualifikation zuordnen können.
                </p>
                <p>
                <span className="important">Hinweis:</span> Für eine vollständige Registrierung muss ein Nachweis als Berufs-KFZler erbracht werden.
                </p>
                <label htmlFor="fullName">
                    <input 
                    type="fullName" 
                    id="fullName" 
                    placeholder="E-Mail Adresse oder Benutzername" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} />
                </label>
            </div>
            <div className={`bottom-container`}>
                    <button type="button" disabled onClick={()=>setStep(step - 1)}>Zurück</button>
                    <input disabled={!fullName} onClick={()=>setStep(step + 1)} type="submit" value="Weiter" />
            </div>
        </form>
    )
}