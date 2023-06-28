import React, { Component } from 'react';
import './calc.css';

export default class App extends Component {
  constructor() {
    super();
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
    this.operators = ['+', '-', '*', '/'];
    this.addingDigit = false;
  }

  state = { current: 0 }

  numEntered = e => {
    this.setState({ current: e.target.value });
  }

  numClick(elementIndex) {
    if (!this.addingDigit) {
      this.setState({ current: this.numbers[elementIndex] });
      this.addingDigit = true;
    }
    else {
      this.setState({ current: `${this.state.current}${this.numbers[elementIndex]}` });
    }
  }

  opClick(elementIndex) {
    this.setState({ total: this.state.current, operator: this.operators[elementIndex] });
    this.addingDigit = false;

  }

  solve() {
    // eslint-disable-next-line no-eval
    this.setState({ current: this.state.total ? eval(this.state.total + this.state.operator + this.state.current) : this.state.current, total: null });
    this.addingDigit = false;
  }

  render() {
    const numButtons = this.numbers.map((n, index) => <button className="number" key={index} onClick={() => this.numClick(index)}>{n}</button>)
    const opButtons = this.operators.map((o, index) => <button className="operator" key={index} onClick={() => this.opClick(index)}>{o}</button>)


    return (
      <div id="calculator">
        <div id="screen">{this.state.current}</div>
        <input id="input" placeholder="enter a number here or use keys below" type="number" onBlur={this.numEntered}></input>
        {numButtons}
        {opButtons}
        <button id="equals" onClick={() => this.solve()}>=</button>
      </div >
    );
  }
}
