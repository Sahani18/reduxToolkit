import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={handleInput} className="space-x-3 mt-12">
      <input
        type="text"
        placeholder="Add a todo..."
        className="p-2 w-52 rounded-md h-10 bg-green-200"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-green-800 text-white text-center p-2">Add</button>
    </form>
  );
}

export default AddTodo;
