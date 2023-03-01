import React from 'react';
import { useLocation } from 'react-router-dom';

const Whoops404 = () => {
  let locaction = useLocation();
  return (
    <>
      <h2>Page not found: {locaction.pathname}</h2>
    </>
  );
};

export default Whoops404;
