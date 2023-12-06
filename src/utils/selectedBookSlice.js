import { createSlice } from "@reduxjs/toolkit";

const selectedBookSlice = createSlice({
    name: 'selectedBook',
    initialState: {

    },
    reducers: {
        addSelectedBook: (state, action) => {
            Object.assign(state, action.payload);
        },
        removeSelectedBook: (state) => {
            for (var key in state) delete state[key];
        }
    }
});

export const { addSelectedBook, removeSelectedBook } = selectedBookSlice.actions;
export default selectedBookSlice.reducer;