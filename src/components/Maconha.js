import React from 'react'
import { Link } from 'react-router-dom'

export default function Maconha() {
  const style = {
    fontFamily: 'inherit',
    fontSize: '3 rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }

  const button = {
    border: "none",
    borderRadius: "10px",
    padding: "15px 20px",
    margin: "5px",
    fontFamily: "inherit",
    fontWeight: "bold",
    backgroundColor: "salmon",
    cursor: "pointer"
  }

  return (
    <div style={style}>
      <h1>NO VENDEMOS ESO ACA</h1>
      <button style={button}><Link exact="true" to="/" style={{ textDecoration: "none", color: "black" }}>VOLVER</Link></button>
    </div>
  )
}
