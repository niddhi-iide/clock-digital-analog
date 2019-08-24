/* eslint-disable react/button-has-type */
import React from 'react';
import Poster from './Poster';

const ButtonGroup = (props) => {
  // eslint-disable-next-line react/prop-types
  const { buttonText1, buttonText2, buttonText3 } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="button">
      <button className="button-1">{buttonText1} </button>
      <button className="button-1"> {buttonText2} </button>
      <button className="button-1"> {buttonText3} </button>
      <Poster />
    </div>
  );
};
export default ButtonGroup;
