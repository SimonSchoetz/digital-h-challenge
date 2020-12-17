import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import { Context } from './Context';
import GoBack from './components/GoBackButton';
import DummyStatusBar from './components/DummyStatusBar';
import RegStepOne from './components/registration-components/RegStepOne';

export default function Registration() {
    const [backToLanding, setBackToLanding] = useState(false)

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [workshopName, setWorkshopName] = useState("");
    const [street, setStreet] = useState("");
    const [streetNum, setStreetNum] = useState("");
    const [postCode, setPostCode] = useState("");
    const [city, setCity] = useState("")

    //if form is not empty, ask if use really wants to do this and lose his progress
    const handleGoBack = () => {
            setBackToLanding(true)
    }

    //go back and forth in the registration steps
    let step = 1;
    const nextStep = input => {
        if (!input && step <= 1) {
            return
        } else {
            input ? step ++ : step --
        }
        
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(step)
    }

    if (backToLanding) {
        return <Redirect to="/" />
    }

    return (
        <Context.Provider value={{
            fullName, setFullName,
            email, setEmail,
            verificationCode, setVerificationCode,
            password, setPassword,
            passwordRepeat, setPasswordRepeat,
            workshopName, setWorkshopName,
            street, setStreet,
            streetNum, setStreetNum,
            postCode, setPostCode,
            city, setCity
          }}>
            <div className="registration-component">
                <header>
                    <DummyStatusBar />
                    <div className="log-reg-header">
                    <div onClick={()=>handleGoBack()}><GoBack /></div>
                        <h2>Registrierung</h2>
                    </div>
                </header>
                <form onSubmit={handleSubmit}>
                    <RegStepOne />
                    <div className="bottom-btn-container">
                            <button onClick={()=>nextStep(false)}>Zurück</button>
                            <button onClick={()=>nextStep(true)}>Weiter</button>
                            {/* <input 
                            type="submit" 
                            value="Weiter" /> */}
                    </div>
                </form>
            </div>
        </Context.Provider>
    )
}
