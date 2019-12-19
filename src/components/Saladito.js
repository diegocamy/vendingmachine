import React, { Component } from 'react'
import './css/Saladito.css'
import img1 from '../img/saladitos/1.png';
import img2 from '../img/saladitos/2.png';
import img3 from '../img/saladitos/3.png';
import img4 from '../img/saladitos/4.png';
import { Link } from 'react-router-dom';



export default class Saladito extends Component {
  state = {
    saladitos: []
  }

  mostrarSaladitos = () => {
    const arr = [];
    const saladitos = [img1, img2, img3, img4];
    for (let i = 0; i < 70; i++) {
      const random = Math.floor(Math.random() * 4);
      const style = {
        height: '150px',
        position: 'absolute',
        zIndex: -1,
        top: Math.floor(Math.random() * window.innerHeight - 30),
        left: Math.floor(Math.random() * window.innerWidth - 30),
        animation: `aparecer ${Math.floor(Math.random() * 12) + 1}s ease-in, girar ${Math.floor(Math.random() * 12) + 1}s linear infinite both`
      }
      arr.push(<img key={i} alt="saladito" src={saladitos[random]} className="rotate" style={style} />);
    }
    if (this.state.saladitos.length === 0) {
      this.setState({ saladitos: arr })
    }
  }

  render() {
    return (
      <div className="saladito" >
        {this.state.saladitos}
        < div className="saladito-menu" >
          <button className="saladito-btn" onClick={this.mostrarSaladitos}>SALADITO?</button>
          <button className="saladito-volver"><Link exact="true" to="/">VOLVER</Link></button>
        </div>
      </div >
    )
  }
}
