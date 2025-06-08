import React from 'react';
import './NavBar.css'
import { NavLink } from "react-router";

function NavBar() {
    return(
    <nav className='navTest'>
        <div className='body'>
            <div className='container flex-center'>
                logo
            </div>
            <div className='container flex-center'>
                <ul className='flex-center'>
                    <li>
                        <NavLink to="/" className='nav-link'>
                            Home
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='nav-link'>
                            About
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink> */}
    </nav>
    )
}
export default NavBar;