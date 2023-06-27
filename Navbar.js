import React from 'react'
import "../CSS/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import MyImage from "../images/weblogo.jpeg"
export default function Navbar() {
  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>   
              <li className="nav-item">
                <a className="nav-link" href="/contact">Demo</a>
              </li>   
            </ul>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link but" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link but" href="/register">Signup</a>
        </li>
      </ul>
    </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
  )
}