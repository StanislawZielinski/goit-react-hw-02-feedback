import React, { Component } from "react";


class Counter extends Component {
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue
  }

    static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  handleChangeGood = (evt) => {
    evt.preventDefault();
    this.setState((state, props) => ({good: state.good+this.props.step}))
  };
  handleChangeBad = (evt) => {
    evt.preventDefault();
    this.setState((state, props) => ({bad: state.bad+this.props.step}))
  };
    handleChangeNeutral = (evt) => {
    evt.preventDefault();
    this.setState((state, props) => ({neutral: state.neutral+this.props.step}))
  };
  render() {
    return (
      <div>
        <h3>PLEASE LEAVE FEEDBACK</h3>
        <form>
          <button className="button" type="click" onClick={this.handleChangeGood}>Good {this.state.good}</button>
          <button className="button" type="click" onClick={this.handleChangeBad}>Bad {this.state.bad}</button>
          <button className="button" type="click" onClick={this.handleChangeNeutral}>Neutral { this.state.neutral}</button>
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
