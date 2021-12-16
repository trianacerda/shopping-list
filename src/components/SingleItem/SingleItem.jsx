import { useState } from 'react';

export default function SingleItem({ item, onChange, onDelete }) {
  console.log('item', item);
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
        <button type="button" onClick={() => setUpdate(false)}>
          Save Item
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button type="button" onClick={() => setUpdate(true)}>
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
        type="button"
        className="delete-btn"
        onClick={() => onDelete(item.id)}
      >
        Delete Item
      </button>
    </div>
  );
}
