import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { title, body } = action.payload;
      state.push({
        id: Date.now(),
        title,
        body,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
