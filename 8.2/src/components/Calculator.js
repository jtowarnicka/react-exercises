import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleFirstNumber = (event) => {
    setA(event.target.value);
  };
  const handleSecondNumber = (event) => {
    setB(event.target.value);
  };

  return (
    <>
      <h1>calculator</h1>
      <div className="dane">
        <label htmlFor="a">enter first number</label>
        <input
          type="number"
          name="firstNumber"
          value={a}
          onChange={handleFirstNumber}
        />
        <label htmlFor="b">enter second number</label>
        <input
          type="number"
          name="secondNumber"
          value={b}
          onChange={handleSecondNumber}
        />
      </div>
      <nav className="navbar navbar-expand-lg bg-light">
        <Link to={`add?x=${a}&y=${b}`}>add</Link>
        <Link to={`sub?x=${a}&y=${b}`}>subtract</Link>
        <Link to={`mul?x=${a}&y=${b}`}>multiply</Link>
        <Link to={`div?x=${a}&y=${b}`}>divide</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Calculator;
