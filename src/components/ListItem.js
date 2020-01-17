import React from 'react';

import './ListItem.css';


const ListItem = ({ label, done = false }) => {
    const style = {
        color: done ? 'tomato' : 'black',
    };

    // panorama_fish_eye
    // radio_button_unchecked
    return (
    <span style={ style } className="todo-list-item"
            onClick={ () => {
                done = !done;
                console.log(`YYYY ${label}`);
            }
                 }>
        <i className="material-icons">
            { done ? 'check_circle_outline' : 'panorama_fish_eye' }
        </i>
        <span className="list-item-label">
            { label }
        </span>
    </span>);
};

export default ListItem;