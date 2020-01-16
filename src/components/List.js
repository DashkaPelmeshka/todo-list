import React from 'react';

import ListItem from './ListItem';
import './List.css';


const List = ({ list }) => {
    const items = list.map((item) => {
        const { id, ...itemProps } = item;

        return (
        <li key={ id } className="list-group-item">
            <ListItem { ...itemProps } />
        </li>);
    });

    return (
        <ul className="list-group list">
            { items }
        </ul>
    );
};

export default List;