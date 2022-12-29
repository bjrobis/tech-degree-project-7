//import { render } from '@testing-library/react';
import React from 'react';
import {Outlet, NavLink} from "react-router-dom";

const QuickLinks = () => (
    
    <span className='main-nav'>
        <ul>
            <li><NavLink to='/'>Click to Use Search Bar</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
        <Outlet />
    </span>
);

export default QuickLinks;