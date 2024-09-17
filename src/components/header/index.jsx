import React from 'react';
import './header.scss'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <h2>Is Takip</h2>

            <nav>
                <NavLink to="/">Is Listesi</NavLink>
                <NavLink to="/create">Is Ekle</NavLink>
            </nav>
        </header>
    );
};

export default Header;
