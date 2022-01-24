import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo"/>
        <div> Chatter! </div>
      </header>
      <footer>
        <input className="text-input" />
        <button className="send">↑</button>
      </footer>
    </div>
  );
}

export default App;
