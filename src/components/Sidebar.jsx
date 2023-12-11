import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
  handleResetToInitial,
  handleAddItem,
  handleRemoveAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
}
