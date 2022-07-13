import React, { useEffect, useState } from "react";

const FirstComponent = () => {
  const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
      };
      const decrement = () => {
        setCount(count - 1);
      };
      
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
};
export default FirstComponent;
