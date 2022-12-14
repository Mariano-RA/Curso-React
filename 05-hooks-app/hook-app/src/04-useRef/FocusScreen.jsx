import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef)
        inputRef.current.select();
    }

  return (
    <div>
        <hr />
        <h1>Focus Screen</h1>

        <input type="text" 
        ref={inputRef}
        placeholder="Ingrese su nombre"
        className="form-control"/>

        <button onClick={onClick} className="btn btn-primary mt-2"> Set Focus </button>
    </div>
  )
}
