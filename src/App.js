/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonGroup from './button/ButtonGroup';
import Heading from './button/Heading';
import Counter from './Analog_clock/A';
import VideoPlayer from './project/VIDEOPLAYER';
import VideoPlayer1 from './project/VidPlayerRudra';

const App = () => (
  <div className="hello">
    <ButtonGroup
      buttonText1="hey1"
      buttonText2={3}
      buttonText3={[<p key="0"> hello</p>, 'f']}
    />

    <Heading>  {/* has no props and only children */}
      <p>child1</p>
      <p>child2</p>
      <p>child3</p>
      <p>1- new date , 2-set interval , 3- modulud</p>
      <p>css - 1 - transform:rotate()   2-transform-origin: 50%</p>
    </Heading>

    <Heading
      name="props"
      age={22}
    >
      <p> these are my children</p>

    </Heading>
    <div className="timer">
      <Counter />
    </div>

    <div className="nvp">
      <VideoPlayer />   {/* without timer */}
    </div>
    <div className="rvp">
      <VideoPlayer1 />   {/* rudra */}
    </div>
  </div>
);

export default App;
