import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context";

export const Navbar = () => {


    const {isAuth, setIsAuth} = useContext(AuthContext)

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
