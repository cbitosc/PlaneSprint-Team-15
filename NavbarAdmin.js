import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
function NavbarAdmin() {
  return (
    <div>
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
                <a className="nav-link" href="/allcourses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addquestion">Add questions</a>
              </li>   
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>   
              <li className="nav-item">
                <a className="nav-link" href="/login"><Link to="/login">Logout</Link></a>
              </li>   
            </ul>
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    </div>
          </div>
        </div>
      </nav>
    </header>
    </div>
    </div>
  )
}

export default NavbarAdmin