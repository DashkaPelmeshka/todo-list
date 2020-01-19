import React from 'react';

import ListItem from '../ListItem/ListItem'
import './List.css';


const List = ({ items, onToggleImportant, onToggleDone, onDelete }) => {

    const elements = items.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id}>
          <ListItem
            { ...itemProps }
            onToggleDone={ () => onToggleDone(id) }
            onDelete={ () => onDelete(id) } />
        </li>
      );
    });
  
    return (<ul className="list">{ elements }</ul>);
};

export default List;