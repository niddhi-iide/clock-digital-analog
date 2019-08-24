/* eslint-disable react/destructuring-assignment */
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
      const { hours, minutes, seconds } = this.state;
      const unit12 = 360 / 12; // 30
      const unit60 = 360 / 60; // 6
      // const hourunit = unit12 / 60;
      // const minuteunit = unit60 / 60;
      const n = 30;
      // const num = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      // {num.map(i => {
      // <div style={{ transform: `rotateZ(${(0 * n)}deg)` }} className="n n12">12</div>
      // })}

      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <>
          <div className="clock">
            <div style={{ transform: `rotateZ(${((hours % 12) * unit12)}deg)` }} className="hands hour-hand" />
            <div style={{ transform: `rotateZ(${(minutes * unit60)}deg)` }} className="hands minute-hand" />
            <div style={{ transform: `rotateZ(${(seconds * unit60)}deg)` }} className="hands second-hand" />
            <div style={{ transform: `rotateZ(${(0 * n)}deg)` }} className="n n12">12</div>
            <div style={{ transform: `rotateZ(${(1 * n)}deg)` }} className="n n1">1</div>
            <div style={{ transform: `rotateZ(${(2 * n)}deg)` }} className="n n2">2</div>
            <div style={{ transform: `rotateZ(${(3 * n)}deg)` }} className="n n3">3</div>
            <div style={{ transform: `rotateZ(${(4 * n)}deg)` }} className="n n4">4</div>
            <div style={{ transform: `rotateZ(${(5 * n)}deg)` }} className="n n5">5</div>
            <div style={{ transform: `rotateZ(${(6 * n)}deg)` }} className="n n6">6</div>
            <div style={{ transform: `rotateZ(${(7 * n)}deg)` }} className="n n7">7</div>
            <div style={{ transform: `rotateZ(${(8 * n)}deg)` }} className="n n8">8</div>
            <div style={{ transform: `rotateZ(${(9 * n)}deg)` }} className="n n9">9</div>
            <div style={{ transform: `rotateZ(${(10 * n)}deg)` }} className="n n10">10</div>
            <div style={{ transform: `rotateZ(${(11 * n)}deg)` }} className="n n11">11</div>

          </div>
          <div className="digi">
            <h2>DIGITAL CLOCK </h2>
            <p className="f1">{this.state.hours}:{this.state.minutes}:{this.state.seconds}:{(this.state.hours > 12) ? 'PM' : 'AM' }</p>
          </div>
        </>
      );
    }
}
export default Counter;
