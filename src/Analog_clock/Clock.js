/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Counter extends Component {
    state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    interval = null;

    componentDidMount= () => {
      this.setTime();
    }

    setTime = () => {
      this.interval = setInterval(() => {
        const date = new Date(); // current value
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        this.setState({
          hours: h, // no need for this. as it is a part of the function itself
          minutes: m,
          seconds: s,
        });
      }, 1000);
    }

    render() {
      return (
        <>
          <p>clock - {this.state.hours} {this.state.minutes} {this.state.seconds} {(this.state.hours > 12) ? 'PM' : 'AM' }</p>
        </>
      );
    }
}
export default Counter;
