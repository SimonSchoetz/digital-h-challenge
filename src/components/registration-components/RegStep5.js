import React, {useContext, useState } from 'react';
import { Context } from '../../Context';

export default function RegStep2({position}) {
    const {step, setStep} = useContext(Context);
    const [workshop, setWorkshop] = useState("");       
    const [street, setStreet] = useState("");                   
    const [streetNum, setStreetNum] = useState("");             
    const [postCode, setPostCode] = useState("");               
    const [city, setCity] = useState("");                           
    
    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            workshop: workshop,
            street: street,
            streetNum: streetNum,
            postCode: postCode,
            city: city,
        }
       console.log(body) //To Backend
    }
    const isDisabled = !workshop && !street && !streetNum && !postCode && !city;
    return (
        <form className={`registration-form ${position}`} onSubmit={handleSubmit}>
            <div className={`registration-top`}>
                <h3>Sag uns, wo du arbeitest</h3>
                <p>
                Zur Verifizierung benötigen wir den genauen Namen und die Adresse der Werkstatt, in der du arbeitest oder die du betreibst.
                </p>
                <div className="address-form">
                    <label htmlFor="workshop">
                        <input 
                        type="text" 
                        id="workshop" 
                        placeholder="Werkstattname" 
                        value={workshop} 
                        onChange={(e) => setWorkshop(e.target.value)} />
                    </label>
                    <label htmlFor="street" className="big-chunk">
                        <input 
                        type="text" 
                        id="street" 
                        placeholder="Straße" 
                        value={street} 
                        onChange={(e) => setStreet(e.target.value)} />
                    </label>
                    <label htmlFor="streetNum" className="small-chunk">
                        <input 
                        type="text" 
                        id="streetNum" 
                        placeholder="Nr." 
                        value={streetNum} 
                        onChange={(e) => setStreetNum(e.target.value)} />
                    </label>
                    <label htmlFor="postCode" className="small-chunk">
                        <input 
                        type="text" 
                        id="postCode" 
                        maxLength="5"
                        placeholder="PLZ" 
                        value={postCode} 
                        onChange={(e) => setPostCode(e.target.value)} />
                    </label>
                    <label htmlFor="city" className="big-chunk">
                        <input 
                        type="text" 
                        id="city" 
                        placeholder="Stadt" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} />
                    </label>
                </div>
                <div className={`bottom-btn-container`}>
                    <button type="button" onClick={()=>setStep(step - 1)}>Zurück</button>
                    <input type="submit" disabled={isDisabled} onClick={()=>setStep(step + 1)}value="Weiter" />
                </div>
            </div>
        </form>
    );
}