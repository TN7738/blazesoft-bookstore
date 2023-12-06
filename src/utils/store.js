import { configureStore } from "@reduxjs/toolkit";
import showPopupSlice from "./showPopupSlice";
import booksSlice from "./booksSlice";
import selectedBookSlice from "./selectedBookSlice";

const store = configureStore({
    reducer: {
        showPopup: showPopupSlice,
        books: booksSlice,
        selectedBook: selectedBookSlice
    }
});

export default store;