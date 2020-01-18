// Color: F5F5F5

import React from 'react';
import './Header.css';

import DeleleButton from '../DeleteButton/DeleteButton';


const Header = () => {
    return (
        <div className="header">
            <h1>TODO list</h1>
            <DeleleButton />
        </div>
    );
};

export default Header;