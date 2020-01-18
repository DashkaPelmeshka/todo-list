import React from 'react';

import './DeleteButton.css'


const DeleteButton = () => {
    return (
        <button type="button" className="btn delete-button">
            <i className="material-icons">
                delete
            </i>
        </button>
    );
};

export default DeleteButton;