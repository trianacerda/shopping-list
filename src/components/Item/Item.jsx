import { useState } from 'react';

export default function Item({ item, onChange, onDelete }) {
  const [update, setUpdate] = useState(false);

  let itemContent;
  if (update) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({ ...item, text: e.target.value });
          }}
        />
        <button type="button" onClick={() => setupdate(true)}>
          Save Item
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button type="button" onClick={() => setupdate(true)}>
          Update Item
        </button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          onChange({ ...item, done: e.target.checked });
        }}
      />
      {itemContent}
      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(item.id)}
      >
        Delete Item
      </button>
    </>
  );
}
