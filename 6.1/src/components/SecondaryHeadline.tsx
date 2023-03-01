import * as React from 'react';
import ColorContext from '../Context';

const SecondaryHeadline = ({ text }) => {
  const color = React.useContext(ColorContext);
  return <h2 style={{ color }}>{text}</h2>;
};

export default SecondaryHeadline;
