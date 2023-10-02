import { createRoot } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Rhea" animal="Dog" breed="Rottweiler" />
      <Pet name="Kiri" animal="Bird" breed="Parrot" />
      <Pet name="Thor" animal="Dog" breed="Rottweiler" />
    </div>
  );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
