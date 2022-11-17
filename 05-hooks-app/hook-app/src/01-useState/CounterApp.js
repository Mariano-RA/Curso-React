import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const sumarUno = () => {
    setCounter({
      ...state,
      counter1: counter1 + 1,
    });
  };

  return (
    <div>
      <hr />
      <h1 className="ms-2">Counter:{counter1}</h1>
      <h1 className="ms-2">Counter:{counter2}</h1>
      <h1 className="ms-2">Counter:{counter3}</h1>

      

      <button className="btn btn-primary ms-5" onClick={sumarUno}>
        + 1
      </button>

      <hr />
    </div>
  );
};
