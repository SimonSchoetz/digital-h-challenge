import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import DummyStatusBar from './components/DummyStatusBar';

export default function Landing() {

    const [goToReg, setGoToReg] = useState(false)

    if (goToReg) {
        return <Redirect to="/registration" />
    }
       

    return (
        <div className="landing-component">
          <header>
            <DummyStatusBar />
          </header>
          <div>
              <img 
              src={`${process.env.PUBLIC_URL}/assets/images/fabu-car-logo.png`} 
              alt="FabuCar Logo" title="FabuCar" 
              width="125" 
              height="139"/>
              <h1>Herzlich Willkommen!</h1>
              <p>Das Portal für Kfz-Profis</p>
          </div>
          <div className="bottom-btn-container">
              <button onClick={() => setGoToReg(true)}>Jetzt registrieren</button>
              <p>Du hast bereits einen Account? <Link to="/login">Anmelden</Link> </p>
          </div>
        </div>
    )
}
