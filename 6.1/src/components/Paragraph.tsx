import * as React from 'react';
import ColorContext from '../Context';

const Paragraph = ({ text }) => {
  const color = React.useContext(ColorContext);
  return <p style={{ color }}>{text}</p>;
};

export default Paragraph;
