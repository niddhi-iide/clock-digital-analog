/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './card.css';

const Card = (props) => {
  const { title, children } = props;

  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>

  );
};
export default Card;
