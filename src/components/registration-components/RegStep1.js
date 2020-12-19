import React, { useContext} from 'react';
import { Context } from '../../Context';

export default function RegStep1({position}) {
    const {fullName, setFullName, step,  setStep} = useContext(Context);

    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <form className={`registration-form ${position}`} onSubmit={handleSubmit}>
        <div className="registration-top">
                <h2>Gib deinen Namen ein</h2>
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
            <div className={`bottom-btn-container`}>
                    <button disabled onClick={()=>setStep(step - 1)}>Zurück</button>
                    <input disabled={!fullName} onClick={()=>setStep(step + 1)} type="submit" value="Weiter" />
            </div>
        </form>
    )
}