import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
// import MyImage from '../Images/weblogo.jpeg'
function NavbarUser() {
  return (
    <div >
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/allcoursesuser">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>    
              <li className="nav-item">
                <a className="nav-link" href="/login"><Link to="/login">Logout</Link></a>
              </li> 
            </ul>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      
    </div>
    
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default NavbarUser