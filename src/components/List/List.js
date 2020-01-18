import React from 'react';

import ListItem from '../ListItem/ListItem'
import './List.css';


const List = ({ items, onToggleImportant, onToggleDone, onDelete }) => {

    const elements = items.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item">
          <ListItem
            { ...itemProps }
            onToggleDone={ () => onToggleDone(id) }
            onDelete={ () => onDelete(id) } />
        </li>
      );
    });
  
    return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default List;