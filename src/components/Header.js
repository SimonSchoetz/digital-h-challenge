import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import { Link, useLocation } from "react-router-dom";
import GoBack from './GoBackButton';

export default function Header() {
    const {currLocation, setCurrLocation} = useContext(Context);

    const locations = useLocation();
    console.log(locations.pathname)
    useEffect(() => {
        setCurrLocation(locations.pathname)
    }, [setCurrLocation, locations.pathname])
    console.log(currLocation === "/" ? true :false)

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
    )
}
