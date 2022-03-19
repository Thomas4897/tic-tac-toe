import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    playerTurn: true,
    // board: [
    //   {
    //     name: "top-left",
    //     empty: true,
    //   },
    //   {
    //     name: "top-middle",
    //     empty: true,
    //   },
    //   {
    //     name: "top-right",
    //     empty: true,
    //   },
    // ],
    topLeft: { empty: true, value: "" },
    topMiddle: { empty: true, value: "" },
    topRight: { empty: true, value: "" },
    middleLeft: { empty: true, value: "" },
    middleMiddle: { empty: true, value: "" },
    middleRight: { empty: true, value: "" },
    bottomLeft: { empty: true, value: "" },
    bottomMiddle: { empty: true, value: "" },
    bottomRight: { empty: true, value: "" },
  };

  handleOnClick = (event) => {
    const { playerTurn } = this.state;
    let symbol = playerTurn === true ? "X" : "O";

    if (this.state[event.target.id].empty === true) {
      this.setState(
        {
          playerTurn: !playerTurn,
          [event.target.id]: {
            empty: false,
            value: symbol,
          },
        },
        () => console.log("handleOnClick:", this.state)
      );
    }
  };

  render() {
    const {
      topLeft,
      topMiddle,
      topRight,
      middleLeft,
      middleMiddle,
      middleRight,
      bottomLeft,
      bottomMiddle,
      bottomRight,
    } = this.state;

    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h3>
          {this.state.playerTurn === true
            ? "(Player 1's Turn!)"
            : "(Player 2's Turn!)"}
        </h3>
        <br />
        <div name="mainBoard" className="board">
          <div name="board" className="board-sections" id="top-board">
            <div
              className="board-squares"
              id="topLeft"
              onClick={this.handleOnClick}
            >
              {topLeft.value}
            </div>
            <div
              className="board-squares"
              id="topMiddle"
              onClick={this.handleOnClick}
            >
              {topMiddle.value}
            </div>
            <div
              className="board-squares"
              id="topRight"
              onClick={this.handleOnClick}
            >
              {topRight.value}
            </div>
          </div>
          <div className="board-sections" id="middle-board">
            <div
              className="board-squares"
              id="middleLeft"
              onClick={this.handleOnClick}
            >
              {middleLeft.value}
            </div>
            <div
              className="board-squares"
              id="middleMiddle"
              onClick={this.handleOnClick}
            >
              {middleMiddle.value}
            </div>
            <div
              className="board-squares"
              id="middleRight"
              onClick={this.handleOnClick}
            >
              {middleRight.value}
            </div>
          </div>
          <div className="board-sections" id="bottom-board">
            <div
              className="board-squares"
              id="bottomLeft"
              onClick={this.handleOnClick}
            >
              {bottomLeft.value}
            </div>
            <div
              className="board-squares"
              id="bottomMiddle"
              onClick={this.handleOnClick}
            >
              {bottomMiddle.value}
            </div>
            <div
              className="board-squares"
              id="bottomRight"
              onClick={this.handleOnClick}
            >
              {bottomRight.value}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
