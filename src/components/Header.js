import React, { useEffect, useContext } from 'react';
import { Context } from '../Context';
import { Link, useLocation } from "react-router-dom";
import GoBack from './GoBackButton';

export default function Header() {
    const {currLocation, setCurrLocation} = useContext(Context);

    //determine location path for dynamic header rendering
    const locations = useLocation();
    useEffect(() => {
        setCurrLocation(locations.pathname)
    }, [setCurrLocation, locations.pathname]);

    return (
        <>
            <header>
            {currLocation !== "/" ? 
             <div className="log-reg-header">
                <Link to="/"><GoBack /></Link>
                {currLocation === "/login" ? 
                <h2>Login</h2>
                : <h2>Registrierung</h2>
                }
            </div>
            : null}
               
            </header>
        </>
    );
}
