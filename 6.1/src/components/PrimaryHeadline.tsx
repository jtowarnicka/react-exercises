import * as React from 'react';
import ColorContext from '../Context';

const PrimaryHeadline = () => {
  const color = React.useContext(ColorContext);
  return <h1 style={{ color }}>primary headline</h1>;
};

export default PrimaryHeadline;
