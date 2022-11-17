import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (value) => {
        setCounter( (c) => c + value )
      },
      [],
    );

    useEffect(() => {
      // increment();      
    }, [increment])

    

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

  return (
    <div>
        <hr />
        <h1>useCallBackHook:  {counter}</h1>

        <ShowIncrement increment={increment}/>
    </div>
  )
}
