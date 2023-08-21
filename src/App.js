import React from "react";
import AddTodo from "./component/addTodo";
import Todos from "./component/todos";

function App() {
  return (
    <div className="h-screen bg-gray-700 mx-auto justify-center ">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
