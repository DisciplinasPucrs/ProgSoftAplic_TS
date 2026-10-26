import './App.css';
import { AloMundo } from './components/AloMundo';
import { AloMundoColorido } from './components/AloMundoColorido';

function App() {
  return (
    <div>
      <AloMundo nome='John Doe'/>
      <AloMundoColorido nome='Jane Doe' cor='blue' />
    </div>
  );
}

export default App;
