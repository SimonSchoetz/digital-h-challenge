import React, {useContext, useState} from 'react';
import { Context } from '../../Context';
import { Link } from "react-router-dom";

export default function RegStep3({position}) {
    const {email, step, setStep, } = useContext(Context);
    const [isVerified, setIsVerified] = useState(false);
    const [verCode, setVerCode] = useState(["","","","","",""]);

    const fillVerCode= (input, index) => {
        const currCode = [...verCode];
        currCode.splice(index, 1, input)
        setVerCode(currCode)
    }
    const renderVerForm = () => {
        return verCode.map((el, i) => (
            <label key={i} htmlFor={`ver-input-${i}`}>
                <input 
                type="text" 
                id={`ver-input-${i}`} 
                placeholder="" 
                maxLength="1"
                // value={verCode.charAt(i)} 
                onChange={(e) => fillVerCode(e.target.value, i)} />
            </label>
        ))
    }

    const handleMoveOn = () => {
        //For this Demo, otherwise it would automatically do this when successfully verified
        if (isVerified) setStep(step + 1)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("test")
        //This would be wrapped into a function triggered by the confirmed verification
        if (!verCode.includes("")) {
            const joinedCode = verCode.join("")

            const body = { //something like this would be sent to the server for verification
                verifyMe: joinedCode
            }
            console.log(body)
            setIsVerified(true) //this is here just for the Demo
        }
    }
    return (
        <form className={`registration-form ${position}`} onSubmit={handleSubmit}>
            <div className={`registration-top`}>
                <h2>Gib deinen Verifizierungscode ein</h2>
                <p>Wir haben dir eine E-Mail an</p> 
                <p> <Link to="#">{email}</Link> </p> 
                <p>
                geschickt. Bitte gib den darin enthaltenen sechsstelligen Verifizierungscode hier ein.
                </p>
                {renderVerForm()}
                <div className={`bottom-btn-container`}>
                    <button onClick={()=>setStep(step - 1)}>Zurück</button>
                    <input onClick={()=>handleMoveOn()} type="submit" value="Weiter" />
                </div>
            </div>
        </form>
    )
}