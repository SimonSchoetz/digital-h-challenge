import React, {useContext, useState, useRef, Fragment } from 'react';
import { Context } from '../../Context';
import { Link } from "react-router-dom";

export default function RegStep3({position}) {
    const { email, step, setStep } = useContext(Context);
    const [verCode, setVerCode] = useState(["","","","","",""]); 
    const inputRef = useRef([]);


    const handleCodeInput= (e, index) => {
        const { value } = e.target;
        /*
        ** Full verCode array
        */
        const currCode = [...verCode];
        currCode.splice(index, 1, value);
        setVerCode(currCode);
        /*
        ** Jump to next input field
        */
        if (value) {
            //Check if current field is not the last
            if(index !== verCode.length - 1 ) {
                //Target next input field
                inputRef.current[index+1].focus()
            }
        }
    }
    //Render input forms with dynamically generated refs
    const renderVerForm = () => {
        return verCode.map((el, i) => (
            <Fragment key={i}>
                <label htmlFor={`verInput-${i}`}>
                    <input 
                    type="text" 
                    id={`verInput-${i}`} 
                    ref={el=>(inputRef.current[i] = el)} 
                    maxLength="1"
                    value={verCode[i]} 
                    onChange={e => handleCodeInput(e, i)} />
                </label>
            </Fragment>
        ))
    }

    //Only exists for this demo to make the the navigation work
    const handleSubmit = e => {
        e.preventDefault()
        //This would be wrapped into a function triggered by the confirmed verification
        if (!verCode.includes("")) {
            const joinedCode = verCode.join("")

            const body = {
                verifyMe: joinedCode
            }
            console.log(body) //To Backend
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
                <div className="validation-form">
                    {renderVerForm()}
                </div>
                <div className={`bottom-btn-container`}>
                    <button onClick={()=>setStep(step - 1)}>Zurück</button>
                    {/* disabled condition would need to be backed up by verifcation */}
                    <input disabled={!verCode[5]} onClick={()=>setStep(step + 1)} type="submit" value="Weiter" />
                </div>
            </div>
        </form>
    )
}