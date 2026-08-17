import React, { useState } from "react";

function ColorChanger() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "30px",
        textAlign: "center"
      }}
    >
      <h2>Change Background Color</h2>

      <button onClick={() => changeColor("lightblue")}>
        Blue
      </button>

      <button onClick={() => changeColor("lightgreen")}>
        Green
      </button>

      <button onClick={() => changeColor("lightcoral")}>
        Red
      </button>

      <button onClick={() => changeColor("white")}>
        Reset
      </button>
    </div>
  );
}

export default ColorChanger;