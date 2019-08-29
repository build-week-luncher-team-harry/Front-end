import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import './TabNav.css';
// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <Menu className='menu'>
            <div className='nav-links'>
                <div className='tabs'>
                    <NavLink to='/donate'>DONATE</NavLink>
                </div>
                <div className='tabs'>
                    <NavLink to='/admin'>ADMIN</NavLink>
                </div>
                <div className='tabs'>
                    <NavLink to='/admin/add-school'>Add School</NavLink>
                </div>
            </div>
        </Menu>
    )
};

