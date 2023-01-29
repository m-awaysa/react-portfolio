import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <nav className=" navbar navbar-expand-lg bg-custom-secondary  text-uppercase fw-bold fs-6 p-4">
        <div className="container">
          <Link className="navbar-brand text-light  fs-4" to="/home">Start Bootstrap</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-light">

              <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to="/home">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    )
  }
}
