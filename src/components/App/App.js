import React, { Component } from 'react';

import Header from '../Header/Header';
import List from '../List';
import ItemAddForm from '../ItemAddForm';

import './App.css';


export default class App extends Component {

  maxId = 8;

  state = {
    items: []
  };

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      return { items: [...state.items, item] };
    })
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value } ;
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'done');
      return { items };
    });
  };

  onDelete = (items) => {
    console.log('TTT');

    this.setState((state) => {
      const items = state.items.filter(item => !item.done);
      return { items };
    });
  };

  createItem(label) {
    return {
      id: ++this.maxId,
      label,
      done: false
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div className="todo-app">
        <Header deleteFunction={this.onDelete}/>

        <List
          items={ items }
          onToggleDone={this.onToggleDone} />

        <ItemAddForm
          onItemAdded={this.onItemAdded} />
      </div>
    );
  };
}