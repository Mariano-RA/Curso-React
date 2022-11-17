import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(1);

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div>
      <hr />
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        {" "}
        + 1
      </button>
      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => setShow(!show)}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
