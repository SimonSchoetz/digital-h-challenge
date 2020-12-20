import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Context } from './Context';
import Landing from './Landing';
import Registration from './Registration';
import Login from './Login';
import Header from './components/Header';

function App() {
  //for selective rendering
  const [currLocation, setCurrLocation] = useState("/");
  //Database relevant
  const [email, setEmail] = useState(""); //RegStep 2
  //go back and forth in the registration steps
  const [step, setStep] = useState(0);
  return (
    <Context.Provider value={{
      currLocation, setCurrLocation,
      email, setEmail,
      step, setStep
    }}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Landing/>} />
          <Route exact path="/login" render={() => <Login/>} /> 
          <Route exact path="/registration" render={() => <Registration/>} /> 
        </Switch>
      </div>
    </BrowserRouter>
        </Context.Provider>
  );
}

export default App;
