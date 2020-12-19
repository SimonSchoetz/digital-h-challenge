import React, {  useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from './Context';
import GoBack from './components/GoBackButton';
import DummyStatusBar from './components/DummyStatusBar';
import RegStep1 from './components/registration-components/RegStep1';
import RegStep2 from './components/registration-components/RegStep2';
import RegStep3 from './components/registration-components/RegStep3';

export default function Registration() {

    //Database relevant
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [workshopName, setWorkshopName] = useState("");
    const [street, setStreet] = useState("");
    const [streetNum, setStreetNum] = useState("");
    const [postCode, setPostCode] = useState("");
    const [city, setCity] = useState("");

    //go back and forth in the registration steps
    const [step, setStep] = useState(0);
    const side = i => {
        if (step === i) return "center"
        if (step < i ) return "to-right"
        if (step > i ) return "to-left"
    }

    //Tried to render the components via this loop (so I don't have to hard code the position numbers) but it breaks the whole app. Left it here to maybe get feedback on this issue to understand what's going on here

    // const steps = [<RegStep1 />,<RegStep2 />,<RegStep3 />]
    // const renderSteps = () => {
    //     return steps.map((Step, i) => (
    //         <Step key={i} position={side(i)} />
    //     ))
    // }
    return (
        <Context.Provider value={{
            fullName, setFullName,
            email, setEmail,
            password, setPassword,
            passwordRepeat, setPasswordRepeat,
            workshopName, setWorkshopName,
            street, setStreet,
            streetNum, setStreetNum,
            postCode, setPostCode,
            city, setCity,
            step, setStep
          }}>
            <div className="registration-component">
                <header>
                    <DummyStatusBar />
                    <div className="log-reg-header">
                    <Link to="/"><GoBack /></Link>
                        <h2>Registrierung</h2>
                    </div>
                </header><div className="form-wrapper">
                    <RegStep1 position={side(0)}/>
                    <RegStep2 position={side(1)}/>
                    <RegStep3 position={side(2)}/>
                </div>
            </div>
        </Context.Provider>
    )
}
