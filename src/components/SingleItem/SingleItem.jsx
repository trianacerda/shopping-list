import React from 'react';
import { useState } from 'react';
import SingleItemStyle from './SingleItemStyle.css';

export default function SingleItem({ item, onChange, onDelete }) {
  const [update, setUpdate] = useState(false);

  let itemContent;

  if (update) {
    itemContent = (
      <>
        <input
          type="text"
          value={item.text}
          onChange={(e) => {
            onChange({ ...item, text: e.target.value });
          }}
        />
        <button
          aria-label="save"
          type="button"
          name="save"
          onClick={() => setUpdate(false)}
        >
          Save Item
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button
          aria-label="update"
          type="button"
          onClick={() => setUpdate(true)}
        >
          Update Item
        </button>
      </>
    );
  }

  return (
    <div>
      Completed:
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => {
          onChange({ ...item, completed: e.target.value });
        }}
      />
      {itemContent}
      <button
        aria-label="delete"
        type="button"
        onClick={() => onDelete(item.id, item.completed)}
      >
        Delete Item
      </button>
    </div>
  );
}
