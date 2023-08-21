import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return todos.map((todo) => {
    return (
      <div
        key={todo.id}
        className="h-10 mt-10 text-start rounded-md w-64 bg-gray-200 text-black"
      >
        {todo.text}
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="bg-red-700 text-white float-right h-10 rounded-r-md p-1"
        >
          Remove
        </button>
      </div>
    );
  });
}

export default Todos;
