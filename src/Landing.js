import React from 'react'

export default function Landing() {
    return (
        <div className="landing-component">
          <header>
              <img 
              src={`${process.env.PUBLIC_URL}/assets/images/fabu-car-logo.png`} 
              alt="FabuCar Logo" title="FabuCar" 
              width="125" 
              height="139"/>
              <h1>Herzlich Willkommen!</h1>
              <p>Das Portal für Kfz-Profis</p>
          </header>  
        </div>
    )
}
