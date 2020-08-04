import React, { useState } from "react";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionalComponent";

export default function App() {
  let var1 = 0;
  const var2 = "Test valiable";
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Test react js: {var1}</h1>
      <h1>Count: {count}</h1>
      <button
        onClick={function () {
          var1 = var1 + 1;
          console.log(var1);
          setCount(count + 1);
        }}
      >
        Click Me!!
      </button>
      <CounterClassComponent />
      <CounterFunctionalComponent />
    </div>
  );
}
