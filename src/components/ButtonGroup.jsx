import Button from './Button';

export default function ButtonGroup({ handleRemoveAllItems }) {
  return (
    <section className='button-group'>
      <Button buttonType='secondary'>Mark all as complete</Button>
      <Button buttonType='secondary'>Mark all as incomplete</Button>
      <Button buttonType='secondary'>Reset to initial</Button>
      <Button onClick={handleRemoveAllItems} buttonType='secondary'>
        Remove all items
      </Button>
    </section>
  );
}
