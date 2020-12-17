import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import { Context } from './Context';
import GoBack from './components/GoBackButton';
import DummyStatusBar from './components/DummyStatusBar';
import RegStepOne from './components/registration-components/RegStepOne';

export default function Registration() {
    let step = 1;

    const [fullName, setFullName] = useState("");

    const handleGoBack = () => {
        console.log("You Clicked Go Back")
    }
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
    console.log(step)
    return (
        <Context.Provider value={{
            fullName, setFullName,
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
