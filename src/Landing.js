import React from 'react';
import { Link } from "react-router-dom";


export default function Landing() {

    return (
        <div className="landing-component">
          <div className="landing-top">
              <img 
              src={`${process.env.PUBLIC_URL}/assets/images/fabu-car-logo.png`} 
              alt="FabuCar Logo" title="FabuCar" 
              width="125" 
              height="139"/>
              <div>
                <h3>Herzlich Willkommen!</h3>
                <p>Das Portal für Kfz-Profis</p>
              </div>
          </div>
          <div className="bottom-container">
              <Link to="registration"><button>Jetzt registrieren</button></Link> 
              <p>Du hast bereits einen Account? <Link to="/login">Anmelden</Link> </p>
          </div>
        </div>
    );
}
