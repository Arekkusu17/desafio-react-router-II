import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  let activeClassName = "nav-link bg-light text-dark "
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid ">
        {/* IMAGEN  class name order-lg-3*/}
        <h1 className=''>HELLO</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className={({ isActive }) =>
                isActive ? activeClassName : 'nav-link'
              }>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/pokemon'>Pokémon</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
