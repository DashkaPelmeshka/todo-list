import React from 'react';

import './ListItem.css';

const TodoListItem = ({ done, label, onToggleDone }) => {
    return (
        <span className='list-item' onClick={onToggleDone}>
            <button type="button" className="btn">
            <i className="material-icons">
                { done ? 'check_circle_outline' : 'panorama_fish_eye' }
            </i>
            </button>

            <span className="list-item-label">
                {label}
            </span>
        </span>
    );
};

export default TodoListItem;