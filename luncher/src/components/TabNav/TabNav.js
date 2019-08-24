import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { MdAccountBox, MdVideocam } from "react-icons/md"
import { TiCompass } from "react-icons/ti";


// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <Menu className='menu'>
            <div className='nav-links'>
                <div className='tabs'>
                    <MdHome /> <NavLink to='/'>Home</NavLink> 
                </div>
                <div className='tabs'>
                    <MdAccountBox/> <NavLink to='/characters'>Characters</NavLink>
                </div>
                <div className='tabs'>
                    <TiCompass /> <NavLink to='/locations'>Locations</NavLink>
                </div>
                <div className='tabs'>
                    <MdVideocam /> <NavLink to='/episodes'>Episodes</NavLink>
                </div>
            </div>
        </Menu>
    )
};

