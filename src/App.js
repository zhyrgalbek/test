import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Aiperi</p>
        <p>aktilek</p>
        <p>burulai</p>
        <p>all</p>
        <select>
          <option>list</option>
        </select>
        <select>
          <option>list2</option>
        </select>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <footer>email</footer>
      </header>
    </div>
  );
}

export default App;
