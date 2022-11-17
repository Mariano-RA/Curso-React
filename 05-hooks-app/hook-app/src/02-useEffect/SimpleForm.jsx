// import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const {onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  // useEffect( () => {
  //   console.log("Se uso useEffect");
  // }, []);

  // useEffect( () => {
  //   console.log("Se cambio el email");
  // }, [formState.email]);

  // useEffect( () => {
  //   console.log("Se cambio el username");
  // }, [formState.username]);

  return (
    <div>
      <hr />
      <h1>Formulario Simple</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      ></input>

      <input
        type="email"
        className="form-control mt-3"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      ></input>

      <input
        type="password"
        className="form-control mt-3"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      ></input>

      {username === "Nano" && <Message />}

      <button onClick={onResetForm} className="btn btn-primary mt-2 ms-2">
        Borrar
      </button>
    </div>
  );
};
