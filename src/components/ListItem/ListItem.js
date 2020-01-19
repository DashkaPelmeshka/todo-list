import React from 'react';

import './ListItem.css';

const ListItem = ({ done, label, onToggleDone }) => {
    return (
        <span onClick={onToggleDone} className="list-item">
            <button type="button" className="btn item-status-button">
            <i className="material-icons">
                { done ? 'check_circle_outline' : 'panorama_fish_eye' }
            </i>
            </button>

            <span className={ (done ? 'text-italic' : null) + " list-item-label" }>
                {label}
            </span>
        </span>
    );
};

export default ListItem;