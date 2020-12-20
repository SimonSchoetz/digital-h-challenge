import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";


export default function Landing() {

    const [goToReg, setGoToReg] = useState(false)

    if (goToReg) {
        return <Redirect to="/registration" />
    }
       

    return (
        <div className="landing-component">
          <div className="landing-top">
              <img 
              src={`${process.env.PUBLIC_URL}/assets/images/fabu-car-logo.png`} 
              alt="FabuCar Logo" title="FabuCar" 
              width="125" 
              height="139"/>
              <div>
                <h2>Herzlich Willkommen!</h2>
                <p>Das Portal für Kfz-Profis</p>
              </div>
          </div>
          <div className="bottom-container">
              <button onClick={() => setGoToReg(true)}>Jetzt registrieren</button>
              <p>Du hast bereits einen Account? <Link to="/login">Anmelden</Link> </p>
          </div>
        </div>
    )
}
