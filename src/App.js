import logo from './logo.svg';
import './App.css';
import { Button } from '../src/stories/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <Button
          label="Button"
          onClick={() => {alert("hello")}}
          primary
          data-analytictag="whatever-bro"
          className="gwt-Button qm-button--primary-action"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
