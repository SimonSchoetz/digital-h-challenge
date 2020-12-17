import React, {useContext} from 'react';
import { Context } from '../../Context';

export default function RegStepOne() {
    const {fullName, setFullName, step} = useContext(Context);
    const side = () => {
        if (step === 1) {
            return "center"
        } else {
            return "to-left"
        }
    }
    return (
        <div className={`registration-step ${side()}`}>
            <h2>Gib deinen Namen ein</h2>
            <p>
            Wichtig ist, dass du deinen richtigen Namen eingibst, da wir nur so deine Qualifikation zuordnen können.
            </p>
            <p>
            <span>Hinweis:</span> Für eine vollständige Registrierung muss ein Nachweis als Berufs-KFZler erbracht werden.
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
    )
}