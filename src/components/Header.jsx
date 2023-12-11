import Counter from './Counter';
import Logo from './Logo';

export default function Header({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
}
