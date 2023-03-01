import React from 'react';
import { useToggle } from './hooks/useToggle';
import './style.css';

export default function App() {
  const { visible, toggle } = useToggle();
  return (
    <div>
      <button className="btn btn-outline-dark" onClick={toggle}>
        Toggle
      </button>
      <div>
        {visible && (
          <img src="https://i.pinimg.com/236x/d1/9a/aa/d19aaa3c8cf4827def52c8a74b2ac891--michael-scott-the-office.jpg" />
        )}
      </div>
    </div>
  );
}
