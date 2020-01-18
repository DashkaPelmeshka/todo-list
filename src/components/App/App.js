import React, { Component } from 'react';

import Header from '../Header/Header';
import List from '../List';
import AddPanel from '../AddPanel';

import './App.css';


export default class App extends Component {

  maxId = 8;

  state = {
    items: [
      { id: 1, label: 'Drink Coffee', done: false },
      { id: 2, label: 'Learn React', done: false },
      { id: 3, label: 'Make Awesome App', done: true },
      { id: 4, label: 'Drink Coffee', done: false },
      { id: 5, label: 'Learn React', done: false },
      { id: 6, label: 'Make Awesome App', done: true }
    ],
    filter: 'all',
    search: ''
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

  onDelete = (id) => {
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { items };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onSearchChange = (search) => {
    this.setState({ search });
  };

  createItem(label) {
    return {
      id: ++this.maxId,
      label,
      done: false
    };
  }

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => (!item.done));
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render() {
    const { items, filter, search } = this.state;
    const doneCount = items.filter((item) => item.done).length;
    const toDoCount = items.length - doneCount;
    const visibleItems = this.searchItems(this.filterItems(items, filter), search);

    return (
      <div className="todo-app">
        <Header toDo={toDoCount} done={doneCount}/>

        <List
          items={ visibleItems }
          onToggleDone={this.onToggleDone}
          onDelete={this.onDelete} />


        <AddPanel
          onItemAdded={this.onItemAdded} />
      </div>
    );
  };
}