import React from 'react';

import './DeleteButton.css'


const DeleteButton = ({onDelete}) => {
    return (
        <button type="button" className="btn delete-button"
        onClick={() => { onDelete() } }>
            <i className="material-icons">
                delete
            </i>
        </button>
    );
};

export default DeleteButton;