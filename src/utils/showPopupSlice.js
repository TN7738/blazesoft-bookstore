import { createSlice } from "@reduxjs/toolkit";

const showPopupSlice = createSlice({
    name: 'showPopup',
    initialState: {
        isPopupOpen: false
    },
    reducers: {
        togglePopup: (state) => {
            state.isPopupOpen = !state.isPopupOpen;
        }
    }
});

export const { togglePopup } = showPopupSlice.actions;
export default showPopupSlice.reducer;