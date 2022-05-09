import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__links">
                <NavLink to='/posts'>
                    Posts
                </NavLink>
            </div>
            <div className="navbar__links">
                <NavLink to='/about'>
                    About
                </NavLink>
            </div>
        </nav>
    );
};
