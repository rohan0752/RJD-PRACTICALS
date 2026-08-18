import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f4f7",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h1 style={{ color: "#333" }}>Counter Application</h1>

        <h2 style={{ fontSize: "40px", margin: "20px" }}>
          Count: {count}
        </h2>

        <button
          onClick={increment}
          style={{
            padding: "12px 20px",
            margin: "5px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          disabled={count === 0}
          style={{
            padding: "12px 20px",
            margin: "5px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: count === 0 ? "not-allowed" : "pointer",
            opacity: count === 0 ? 0.5 : 1,
            fontSize: "16px",
          }}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{
            padding: "12px 20px",
            margin: "5px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;