import React, {  useState, useContext } from 'react';
import { Context } from './Context';
import RegStep1 from './components/registration-components/RegStep1';
import RegStep2 from './components/registration-components/RegStep2';
import RegStep3 from './components/registration-components/RegStep3';
import RegStep4 from './components/registration-components/RegStep4';
import RegStep5 from './components/registration-components/RegStep5';
import RegStep6 from './components/registration-components/RegStep6';

export default function Registration() {
    const {step} = useContext(Context);

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
        <div className="registration-body">
            <RegStep2 position={side(1)}/>
            <RegStep3 position={side(2)}/>
            <RegStep4 position={side(3)}/>
            <RegStep5 position={side(4)}/>
            <RegStep6 position={side(5)}/>
            <RegStep1 position={side(0)}/>
        </div>
    )
}
