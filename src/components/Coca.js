import React, { Component } from 'react'
import '../components/css/Coca.css'
import coca from '../img/coca.png'
import { Link } from 'react-router-dom';

export default class Coca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: '',
      precio: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(evt) {
    this.setState({ cantidad: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const valor = 70;
    this.setState({ precio: `$ ${valor * this.state.cantidad}` })
  }


  render() {
    return (
      <div className="coca">
        <div className="precio">{this.state.precio}</div>
        <div className="coca-menu">
          <div className="coca"><img src={coca} alt="coca" /></div>
          <div className="coca-form">
            <form action="submit" onSubmit={this.handleSubmit} >
              <label htmlFor="cantidad">Cuantas?<br />
                <input type="number" onChange={this.handleChange} name="cantidad" id="cantidad" placeholder="0" value={this.state.cantidad} />
              </label>
              <button>OK</button>
              <button style={{ backgroundColor: "black" }}><Link exact="true" to="/" style={{ color: "white", textDecoration: "none" }}>VOLVER</Link></button>
            </form>
          </div>
          <div className="coca"><img src={coca} alt="coca" /></div>
        </div>
      </div>
    )
  }
}



