import React from 'react';
import SingleItem from '../SingleItem/SingleItem';

export default function ItemList({ items, onChangeItem, onDeleteItem }) {
  return items.map((item) => {
    return (
      <li key={item.id}>
        <SingleItem
          item={item}
          onChange={onChangeItem}
          onDelete={onDeleteItem}
        />
      </li>
    );
  });
}
