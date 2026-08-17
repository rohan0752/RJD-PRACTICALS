import React from "react";

import Practical1 from "./PRACTICAL 1/App";
import Student from "./PRACTICAL 2/Student";
import Counter from "./PRACTICAL 3/Counter";
import ColorChanger from "./PRACTICAL 4/ColorChanger";
import PasswordInput from "./PRACTICAL 5/PasswordInput";
import LoginStatus from "./PRACTICAL 6/LoginStatus";
import ProductList from "./PRACTICAL 7/ProductList";
import Calculator from "./PRACTICAL 8/Calculator";
import TemperatureConverter from "./PRACTICAL 9/TemperatureConverter";
import DigitalClock from "./PRACTICAL 10/DigitalClock";

function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/practical-1") {
    return <Practical1 />;
  }

  if (path === "/practical-2") {
    return <Student />;
  }

  if (path === "/practical-3") {
    return <Counter />;
  }

  if (path === "/practical-4") {
    return <ColorChanger />;
  }

  if (path === "/practical-5") {
    return <PasswordInput />;
  }

  if (path === "/practical-6") {
    return <LoginStatus />;
  }

  if (path === "/practical-7") {
    return <ProductList />;
  }

  if (path === "/practical-8") {
    return <Calculator />;
  }

  if (path === "/practical-9") {
    return <TemperatureConverter />;
  }

  if (path === "/practical-10") {
    return <DigitalClock />;
  }

  return (
    <div>
      <h1>RJD React Practicals</h1>
      <p>Please select a practical.</p>
    </div>
  );
}

export default App;