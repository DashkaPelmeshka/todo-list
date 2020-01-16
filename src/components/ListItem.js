import React from 'react';

import './ListItem.css';


const ListItem = ({ label, done = false }) => {
    const style = {
        color: done ? 'tomato' : 'black',
    };
    
    return (
    <span style={ style } className="todo-list-item">
        { label }
    </span>);
};

export default ListItem;