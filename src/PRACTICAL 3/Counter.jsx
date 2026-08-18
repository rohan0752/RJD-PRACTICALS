import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment} style={{ margin: "5px", padding: "10px 20px" }}>
        Increment
      </button>

      <button onClick={decrement} style={{ margin: "5px", padding: "10px 20px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{ margin: "5px", padding: "10px 20px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;