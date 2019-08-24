/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    show: true,
  };

  interval = null;

  componentDidMount= () => {
    this.startTimer();
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  onClickStop = () => {
    clearInterval(this.interval);
  }

  onClickReset = () => {
    this.setState({ count: 0 });
  }

  onClickStart = () => {
    this.startTimer();
  }

  onClickDestory = () => {
    this.setState({ show: false });
  }

  render() {
    console.log('render');
    if (!this.state.show) {
      return null;
    }
    return (
      <>
        <p>Hello Counter - {this.state.count}</p>
        <button onClick={this.onClickStop}>STOP!</button>
        <button onClick={this.onClickReset}>RESET</button>
        <button onClick={this.onClickStart}>START</button>
        <button onClick={this.onClickDestory}>DESTROY EVERYTHING!!</button>
      </>
    );
  }
}

export default Counter;
