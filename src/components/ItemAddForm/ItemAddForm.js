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

    if ((/^\s+$/.test(label)) || !label) {
        alert('Please enter non-empty task name');
    } else if ( noSpaces < 3 ) {
      alert('Please enter task name longer than 3 symbols');
    } else {
        this.setState({ label: '' });
        const addCallBack = this.props.onItemAdded || (() => {});
        addCallBack(label);
    }
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
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
};