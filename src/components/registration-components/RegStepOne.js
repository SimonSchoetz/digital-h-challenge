import React, {Fragment, useContext} from 'react';
import { Context } from '../../Context';

export default function RegStepOne() {
    const {fullName, setFullName} = useContext(Context);
    return (
        <Fragment>
            <h2>Gib deinen Namen ein</h2>
            <p>
            Wichtig ist, dass du deinen richtigen Namen eingibst, da wir nur so deine Qualifikation zuordnen können.
            </p>
            <p>
            <span>Hinweis:</span> Für eine vollständige Registrierung muss ein Nachweis als Berufs-KFZler erbracht werden.
            </p>
            <label htmlFor="fullName">
                <input 
                required 
                type="fullName" 
                id="fullName" 
                placeholder="E-Mail Adresse oder Benutzername" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} />
            </label>
        </Fragment>
    )
}