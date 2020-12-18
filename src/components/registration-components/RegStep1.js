import React, {useContext} from 'react';
import { Context } from '../../Context';

export default function RegStep1({i}) {
    const {fullName, setFullName, step,  setStep} = useContext(Context);
    const side = () => {
        if (step === i) {
            return "center"
        } else {
            return "to-left"
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (fullName) setStep(step + 1)
    }

    return (
        <form className={`registration-form ${side()}`} onSubmit={handleSubmit}>
            <div className={`registration-top`}>
                <h2>Gib deinen Namen ein</h2>
                <p>
                Wichtig ist, dass du deinen richtigen Namen eingibst, da wir nur so deine Qualifikation zuordnen können.
                </p>
                <p>
                <span class="important">Hinweis:</span> Für eine vollständige Registrierung muss ein Nachweis als Berufs-KFZler erbracht werden.
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
                    <input type="submit" value="Weiter"/>
            </div>
        </form>
    )
}