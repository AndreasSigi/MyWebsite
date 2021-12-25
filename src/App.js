import logo from './logo.svg';
import './App.css';
import gremlin from "../src/gremlin.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gremlin}/>
        <p>
          Welcome to bots website, have a code...
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Code
        </a>
      </header>
    </div>
  );
}

export default App;
