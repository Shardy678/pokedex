import Pokedex from "./components/Pokedex"
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container mx-auto">
      <header className="text-left font-bold text-2xl p-3">Pokedex</header>
        <Pokedex />
    </div>
  </div>
  );
}

export default App;
