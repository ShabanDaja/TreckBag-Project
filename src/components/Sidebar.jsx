import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({ setItems }) {
  return (
    <div className='sidebar'>
      <AddItemForm setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
