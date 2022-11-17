import { useTodo } from "../hooks";
import { TodoAdd } from "./items/TodoAdd";
import { TodoList } from "./items/TodoList";

export const TodoApp = () => {
  const { todos,todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } =
    useTodo();

  return (
    <>
      <hr />
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
