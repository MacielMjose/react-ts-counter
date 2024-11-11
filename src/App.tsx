import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
export type Action = "increase" | "decrease";

function App() {
  type Status = "idle" | "loading" | "success";
  const [count, setCount] = useState<number>(0);
  const [status, setStatus] = useState<Status>("idle");

  function updateCount(action: Action) {
    if (action == "increase") {
      setCount(count + 1);
    } else if (action == "decrease") {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>React + Typescript Counter</h1>
      <h2>count is {count}</h2>

      <Button action={"increase"} clickHandler={updateCount} />
      <Button action={"decrease"} clickHandler={updateCount} />

      <br></br>
      <button onClick={() => setStatus("loading")}>Set Loading</button>
      {status == "loading" && <p>Loading..</p>}
    </>
  );
}

export default App;
