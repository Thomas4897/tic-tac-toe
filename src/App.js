import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div className="top-board">
            <div id="top-left">top-left</div>
            <div id="top-middle">top-middle</div>
            <div id="top-right">top-right</div>
          </div>
          <div className="middle-board">
            <div id="middle-left">middle-left</div>
            <div id="middle-middle">middle-middle</div>
            <div id="middle-right">middle-right</div>
          </div>
          <div className="bottom-board">
            <div id="bottom-left">bottom-left</div>
            <div id="bottom-middle">bottom-middle</div>
            <div id="bottom-right">bottom-right</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
