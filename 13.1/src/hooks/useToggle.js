import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [visible, setVisible] = useState(initialState);

  const toggle = () => {
    setVisible(!visible);
  };

  return { visible, toggle };
};
