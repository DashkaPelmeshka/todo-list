// Color: F5F5F5

import React from 'react';
import './Header.css';

import DeleleButton from '../DeleteButton/DeleteButton';

const Header = ({ deleteFunction }) => {
    //deleteFunction();

    return (
        <div className="header">
            <h1>TODO list</h1>
            <DeleleButton onClick={ deleteFunction }/>
        </div>
    );
};

export default Header;