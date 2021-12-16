import React from 'react';
import { useState } from 'react';

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
            onchange({ ...item, text: e.target.value });
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
        name="delete"
        onClick={() => onDelete(item.id)}
      >
        Delete Item
      </button>
    </div>
  );
}
