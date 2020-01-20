import React, { Component } from 'react';

import Header from '../Header/Header';
import List from '../List';
import ItemAddForm from '../ItemAddForm';

import './App.css';


export default class App extends Component {

  maxId = 10;

  state = {
    items: [
      {label: 'Покормить собаку', done: false, id: 1 },
      {label: 'Построить дом', done: false, id: 2 },
      {label: 'Помыть машину', done: false, id: 3 },
      {label: 'Купить продукты молоко, соль, сахар, вода, макароны, мясо, моцарелла', done: false, id:4 },
      {label: 'Составить список', done: true, id: 5 },
    ]
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

  onDelete = () => {
    this.setState((state) => {
      const items = state.items.filter((item) => !item.done);
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
      <div className="app">
        <Header onDelete={this.onDelete}/>
        <div className="content">
          <List
            items={ items }
            onToggleDone={this.onToggleDone} />

          <ItemAddForm
            onItemAdded={this.onItemAdded} />   
        </div>
      </div>
    );
  };
}