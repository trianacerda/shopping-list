import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    onAddItem(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="add-item"
          value={text}
          placeholder="New Item"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Add To Your List
        </button>
      </form>
    </>
  );
}
