import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'
import VendingMachine from './components/VendingMachine';
import Saladito from './components/Saladito'
import Coca from './components/Coca'
import Maconha from './components/Maconha'

function App() {
  return (
    <div className="app">
      <nav className="vending-nav">
        <NavLink activeClassName="nav-active" exact to="/">HOME</NavLink>
        <NavLink activeClassName="nav-active" exact to="/saladito">SALADITO</NavLink>
        <NavLink activeClassName="nav-active" exact to="/coca">COCA</NavLink>
        <NavLink activeClassName="nav-active" exact to="/maco">MACONHA</NavLink>
      </nav>
      <div className="contenido">
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/saladito" component={Saladito} />
          <Route exact path="/coca" component={Coca} />
          <Route exact path="/maco" component={Maconha} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
