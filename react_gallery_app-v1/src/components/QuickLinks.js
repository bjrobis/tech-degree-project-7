import { render } from '@testing-library/react';
import React from 'react';
import {NavLink} from "react-router-dom";

const QuickLinks = () => {
    render(
      
        <ul className='main-nav'>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
    );
}

export default QuickLinks;