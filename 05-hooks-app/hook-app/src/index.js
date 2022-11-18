import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { CallBackHook } from "./06-memos/CallBackHook";
import { MemoHook } from "./06-memos/MemoHook";
import { Memorize } from "./06-memos/Memorize";
import { Padre } from "./07-tarea-memo/Padre";
import { HooksApp } from "./hooks/HooksApp";
import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="mt-5 ms-5 me-5 mb-5">
      {/* <HooksApp/>
      <CounterApp/>
      <CounterWithCustomHook/>
      <FormWithCustomHook/>
      <MultipleCustomHooks/>
      <FocusScreen/>
      <Layout/>
      <Memorize/>
      <MemoHook/>
      <CallBackHook/>
      <Padre/>
      <TodoApp/> */}

      <MainApp />
    </div>
  </BrowserRouter>
);
