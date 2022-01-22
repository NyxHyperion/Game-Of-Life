import './App.css';
import Game from './Game.js';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>"Conway's Game of Life"</p>
        <div className='Game'>
          <Game></Game>
        </div>
      </header>
    </div>
  );
}

export default App;
