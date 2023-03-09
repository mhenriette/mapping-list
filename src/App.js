import './App.css';
import Animals from './components/Animals';

const App = () => {
  const animals = ['🐶 dog', ' 🐱 cat', '🐥 chicken', '🐄 cow', '🐏 sheep', ' 🐎 horse']
  return <div className="App">
      <Animals list={animals}/>
    </div>;
}

export default App;
