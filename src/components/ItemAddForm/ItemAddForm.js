import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    const stringNoSpaces = label.replace(/ /g, "");
    const noSpaces = stringNoSpaces.length;

    if ((/^\s+$/.test(label)) || (!label) || noSpaces < 3) {
        alert('Bad string');
    } else {
        this.setState({ label: '' });
        const addCallBack = this.props.onItemAdded || (() => {});
        addCallBack(label);
    }
  };

  render() {
    return (
      <form className="add-panel" onSubmit={this.onSubmit}>
        <button type="submit" className="btn delete-button">
            <i className="material-icons add-task-icon">
                add
            </i>
        </button>

        <input type="text"
               className="task-input"
               value={this.state.label}
               onChange={this.onLabelChange} />
      </form>
    );
  }
}

/*
import React from 'react';

import './ItemAddForm.css';


const ItemAddForm = () => {
    return (
        <div className="add-panel">
            <button type="button" className="btn delete-button">
                <i className="material-icons add-task-icon">
                    add
                </i>
            </button>
            
            <input type="text" className="task-input" />   
        </div>
    );
};

export default ItemAddForm;
*/