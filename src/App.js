import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Person from "./Person.component";

class App extends React.Component {
  state = {
    count: 0,
    person: { name: "john", age: 34 },
    showPerson: false,
  };
  render() {
    const { count, person, showPerson } = this.state;
    // so inside the return Person component it takes a props
    // but the props I am inline defining a object so whenever the app
    // state changes our App component end up re rendering  everything
    // which means that a new person is going to pass into the person component.

    // you might be thinking that if we move this object{person{name:"john",age:34}}
    //  into the state its not going to work .And the reason for this
    //because Person component is a functional component & functional component
    // will always re renders whenever the parent renders because the functional
    //component  simply doesn't know  its essentially being called or invoked
    //every time on render to provide us with a new person.
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {showPerson ? <Person person={person} /> : null}
          Button Count:{count}
          <button
            className="btn"
            onClick={() => this.setState({ count: count + 1 })}
          >
            Increase Count
          </button>
          <button
            className="btn"
            onClick={() => this.setState({ showPerson: !showPerson })}
          >
            Toggle Person
          </button>
        </header>
      </div>
    );
  }
}

export default App;
