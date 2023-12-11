import { useRef, useState } from 'react';
import Button from './Button';

export default function AddItemForm({ handleAddItem }) {
  const [itemText, setItemText] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    handleAddItem(itemText);
    setItemText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
