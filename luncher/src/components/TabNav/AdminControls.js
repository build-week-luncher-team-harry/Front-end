import React from 'react';
import { NavLink } from "react-router-dom";
import './TabNav.css';
import NavRouter from '../NavRouter/NavRouter';

export default function TabNav() {
    return (
        <div className='nav-links'>
            <div className='tabs'>
                <NavLink to='/donate' className='inactive' activeClassName='active'>Donate</NavLink>
            </div>
            <div className='tabs'>
                <NavLink to='/admin' className='inactive' activeClassName='active'>Admin</NavLink>
            </div>
            <NavRouter />
        </div>
    )
};