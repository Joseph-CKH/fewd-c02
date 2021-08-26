import logo from "./logo.svg";
import "./App.css";
import { From } from "./componment/From";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {showForm && <Form />}
        <button
          onClick={() => {
            console.log(!showForm);
            setShowForm(!showForm);
          }}
        ></button>
      </header>
      {showForm ? "clase form" : "show form"}
    </div>
  );
}

export default App;
