import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const bookSlice = createSlice({
  name: "book",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const {
        title,
        author,
        description,
        category,
        price,
        stock,
        imageURL,
        isBestSeller,
      } = action.payload;
      state.push({
        id: nanoid(),
        title: title,
        author: author,
        description: description,
        category: category,
        price: price,
        stock: stock,
        imageURL: imageURL,
        isBestSeller: isBestSeller,
      });
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
