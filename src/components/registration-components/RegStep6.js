import React, { useContext } from 'react';
import { Context } from '../../Context';

export default function RegStep2({position}) {
    const {step, setStep} = useContext(Context);

    const initiateUpload = () => {
        console.log("User tries to upload img");
    }               
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("User wants to continue without uploading");
    }

    return (
        <form className={`registration-form ${position}`} onSubmit={handleSubmit}>
            <div className={`top-container step-6`}>
                    <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/verification-icon.svg`} 
                    alt="Placeholder for a certificate"
                    width="140" 
                    height="171"/>
                    <h3>Du bist wirklich Profi</h3>
                    <p>
                    Mach ein Foto von deinem Meister- oder Gesellenbrief bzw, Servicetechniker-Zertifikat oder Ausbildungsvertrag. Visitenkarten o.ä. sind leider kein gültiger Nachweis. Die Daten werden nicht veröffentlicht und dienen nur der Verifizierung.
                    </p>
            </div>
            <div className={`bottom-container`}>
                <p>
                Du kannst diesen Schritt überspringen. Bis dahin kannst Du nur mitlesen, nach 5 Tagen blockt dich das System.
                </p>
                <button type="button" className="upload-img-btn" onClick={() => initiateUpload()}>
                    Bild hochladen
                </button>
                <button type="button" onClick={()=>setStep(step - 1)}>Zurück</button>
                <input type="submit" value="Ab zu FabuCar!" />
            </div>
        </form>
    );
}