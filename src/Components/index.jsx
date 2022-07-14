import React, { useState } from "react";

const IncrementDecrementButtons = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default IncrementDecrementButtons;
