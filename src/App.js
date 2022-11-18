import React from "react";
import allCountryScores from "./scores";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>High Score Per Country</h1>
      {allCountryScores.sort((a, b) => a.name.localeCompare(b.name))
        .map((table) =>
          <div>
            <h4> High Score : {table.name}</h4>
            {table.scores
              .sort((a, b) => b.s - a.s)
              .map((table) => (
                <ul>
                  <li>{table.n}    {table.s}</li>
                </ul>
              ))}
          </div>
        )}
    </div>
  )
}

export default App;
