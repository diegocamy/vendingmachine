import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/VendingMachine.css'

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="vending-machine">
        <div className="vending-welcome">
          <div className="vending-mensaje">
            <h3>BUENO QUE MIERDA VAS A COMPRAR?</h3>
          </div>
          <div className="vending-menu">
            <h3>MENU</h3>
            <ul>
              <li><Link to="/saladito" >SALADITO</Link></li>
              <li><Link to="/coca">COCA</Link></li>
              <li><Link to="/maco">MACONHA</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
