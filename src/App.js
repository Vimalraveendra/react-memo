import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Button Count:{count}
          <button
            className="btn"
            onClick={() => this.setState({ count: count + 1 })}
          >
            Increase Count
          </button>
        </header>
      </div>
    );
  }
}

export default App;
