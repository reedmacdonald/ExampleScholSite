import React, { useState } from 'react';
import { css } from '@emotion/core';
import './imageGrid.css';
import Thing1 from '../../images/thing1.png';
import Thing2 from '../../images/thing2.png';
import Thing3 from '../../images/thing3.png';
import Thing4 from '../../images/thing4.png';

const ImageGrid = () => {
  const [oneOutline, setOneOutline] = React.useState(false);
  const [twoOutline, setTwoOutline] = React.useState(false);
  const [threeOutline, setThreeOutline] = React.useState(false);
  const [fourOutline, setFourOutline] = React.useState(false);
  return (
    <div className="parent">
      <div className="div1">
        <img
          onClick={() => {
            setOneOutline(!oneOutline);
          }}
          src={Thing1}
          style={{ border: oneOutline ? '5px solid red' : 'none' }}
        ></img>
      </div>
      <div className="div2">
        <img
          onClick={() => {
            setTwoOutline(!twoOutline);
          }}
          src={Thing2}
          style={{ border: twoOutline ? '5px solid red' : 'none' }}
        ></img>
      </div>
      <div className="div3">
        <img
          onClick={() => {
            setThreeOutline(!threeOutline);
          }}
          style={{ border: threeOutline ? '5px solid red' : 'none' }}
          src={Thing3}
        ></img>
      </div>
      <div className="div4">
        <img
          onClick={() => {
            setFourOutline(!fourOutline);
          }}
          style={{ border: fourOutline ? '5px solid red' : 'none' }}
          src={Thing4}
        ></img>
      </div>
    </div>
  );
};

export default ImageGrid;
