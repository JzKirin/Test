import React from "react";

export default function CounterFunctionalComponent() {
  // React Hook
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ backgroundColor: "#3ca59d" }}>
      <h1>Counter Class Component</h1>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
