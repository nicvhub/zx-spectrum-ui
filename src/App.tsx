import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KeyboardButton from "./components/KeyboardButton/KeyboardButton";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <KeyboardButton label="Some" onClick={() => {}} />
        <KeyboardButton label="Rando" onClick={() => {}} />
        <KeyboardButton label="Btns" onClick={() => {}} />
      </main>
    </div>
  );
}

export default App;
