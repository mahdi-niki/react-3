import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>{count}</h1>
      <br />
      <br />
      <button onClick={() => setCount((prev)=>prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev)=>prev - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}

export default App;
