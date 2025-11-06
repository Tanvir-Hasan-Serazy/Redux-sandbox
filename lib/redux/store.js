import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import todoReducer from "./slice/todoSlice";
import bookReducer from "./slice/bookSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    book: bookReducer,
  },
});

export default store;
