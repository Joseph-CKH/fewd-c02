import logo from "logo.svg";
import "App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Items from "./components/Items";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact></Route>
    </div>
  );
}

export default App;
