import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();


  return (
    <div>
        <h1>Counter with hook: {counter}</h1>
        

        <button className="btn btn-primary ms-3" onClick={() => increment(2)}>+1</button>
        <button className="btn btn-primary ms-3" onClick={reset}>Reset</button>
        <button className="btn btn-primary ms-3" onClick={() => decrement(5)}>-1</button>

    </div>
  )
}
