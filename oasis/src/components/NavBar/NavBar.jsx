import React from 'react';
import './NavBar.css'
import { NavLink } from "react-router";

function NavBar() {
    return(
    <nav className='navTest'>
        <div className='body'>
            <div className='logo'>
                Oasis
            </div>
            <div className='container flex-center'>
                <ul className='flex-center'>
                    <li>
                        <NavLink to="/home" className='nav-link'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='nav-link'>
                            About
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