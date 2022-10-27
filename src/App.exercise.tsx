import React from "react";
// ⛏️ supprime l'import du logo
import logo from "./logo.svg";
// ⛏️ supprime l'import de CSS'
import "./App.css";
// 🐶 importe css/styles.css

function App() {
  return (
    // ⛏️ supprime le rendu du composant App
    // remplace le par notre code HTML de l'application vanilla
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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

export { App };
