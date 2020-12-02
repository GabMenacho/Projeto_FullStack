import Menu from './components/menu/menu'
import Categorias from './components/categorias/categorias';
import Galeria from './components/galeria/galeria'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Menu /> 
      </header>
      <main className = "container">
        <div className="row mt-4">
          <Categorias />
          <Galeria />
        </div>
      </main>
    </div>
  );
}

export default App;

