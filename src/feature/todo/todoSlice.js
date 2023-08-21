// ! Slice Helps you to create a big object which you actually export as well and this slice is responsible for tracking or initial state of the store as well as all of your reducers are selected here okay nothing was Slice is just attracted that peace and assembly said hey this is going to be my slice which is going to be linking all the reduce yours and initial state of the store store needs to no what is the default or how do I get started what is my starting so this is where all the things actually comes.

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer; //! this will be wiredup with the store
