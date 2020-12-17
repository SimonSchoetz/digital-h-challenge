import React from 'react'

export default function Landing() {
    return (
        <div className="landing-component">
          <header>
              <h1>Herzlich Willkommen!</h1>
              <img src={`${process.env.PUBLIC_URL}/assets/images/fabu-car-logo.png`} alt="FabuCar Logo" title="FabuCar"/>
          </header>  
        </div>
    )
}
