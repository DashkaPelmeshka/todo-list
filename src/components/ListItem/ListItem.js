import React from 'react';

import './ListItem.css';

const TodoListItem = ({ done, label, onToggleDone,
    onDelete }) => {

        /*
        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }
        */

        return (
            <span className='list-item' onClick={onToggleDone}>
                <span className="list-item-label">
                    {label}
                </span>

                <button type="button" className="btn">
                <i className="material-icons">
                    { done ? 'check_circle_outline' : 'panorama_fish_eye' }
                </i>
                </button>
            </span>
        );
};

export default TodoListItem;



/*
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
*/

