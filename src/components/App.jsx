import { useState } from 'react';
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';
import { initItems } from '../lib/constants';

function App() {
  const [items, setItems] = useState(initItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleRemoveAllItems={handleRemoveAllItems}
          handleAddItem={handleAddItem}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
