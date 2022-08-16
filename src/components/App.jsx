import React, { Component } from "react";

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleChange = (evt) => {
    evt.preventDefault();
    console.log("aaa");
  };

  render() {
    return (
      <div>
        PLEASE LEAVE FEEDBACK
        <form>
          <button className="button" type="click" onClick={this.handleChange}>Good</button>
          <button className="button" type="click" onClick={this.handleChange}>Bad</button>
          <button className="button" type="click" onClick={this.handleChange}>Neutral</button>
        </form>
        </div>
    );
  }
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <Counter />

    </div>
  );
};
