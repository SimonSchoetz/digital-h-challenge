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
    const [verificationCode, setVerificationCode] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [workshopName, setWorkshopName] = useState("");
    const [street, setStreet] = useState("");
    const [streetNum, setStreetNum] = useState("");
    const [postCode, setPostCode] = useState("");
    const [city, setCity] = useState("")

    //go back and forth in the registration steps
    const [step, setStep] = useState(1);
    const side = i => {
        if (step === i) return "center"
        if (step < i ) return "to-right"
        if (step > i ) return "to-left"
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
                </header>
                    {/* Habe versucht die Components über ein Array zu rendern um die Keys nicht hard coden zu müssen aber nicht zum laufen gebracht*/}
                    <RegStep1 position={side(1)}/>
                    <RegStep2 position={side(2)}/>
                    <RegStep3 position={side(3)}/>
            </div>
        </Context.Provider>
    )
}
