import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './Landing';
import Registration from './Registration';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Landing/>} />
        <Route exact path="/registration" render={() => <Registration/>} /> 
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
