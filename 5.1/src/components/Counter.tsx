import * as React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const handleClick0 = () => setCounter(counter + 1);
  const handleClick2 = () => setCounter(counter - 1);

  React.useEffect(() => {
    document.oncontextmenu = () => false;
    window.addEventListener('click', handleClick0);
    window.addEventListener('contextmenu', handleClick2);

    return () => {
      window.removeEventListener('click', handleClick0);
      window.removeEventListener('contextmenu', handleClick2);
    };
  }, [counter]);
  return <p>{counter}</p>;
};

export default Counter;
