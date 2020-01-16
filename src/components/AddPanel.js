import React from 'react';

import './AddPanel.css';


const AddPanel = () => {
    return (
        <div className="add-panel">
            <i class="material-icons add-task">
                add
            </i>
            <input type="text" className="task-to-add" />   
        </div>
    );
};

export default AddPanel;